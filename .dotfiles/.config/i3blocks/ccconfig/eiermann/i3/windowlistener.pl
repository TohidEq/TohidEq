#!/usr/bin/perl

use strict;
use warnings;

sub get_window {
    my ($window_id) = @_;
    open(my $xprop, "xprop -id $window_id |");
    my $title = "";
    my $class = "";
    while (my $line = <$xprop>) {
	if ($line =~ /_NET_WM_NAME\(UTF8_STRING\) = \"(.*)\"/) {
	    $title = $1;
	}
	if ($line =~ /WM_CLASS\(STRING\) = \".*?\", \"(.*)\"/) {
	    $class = $1;
	}
    }
    return (id => $window_id, title => $title, class => $class);
}


sub index_of {
    my @windows = @{$_[0]};
    my %window = %{$_[1]};
    for my $i (0 .. $#windows) {
	my $ref = $windows[$i];
	if ($ref->{id} eq $window{id}) {
	    return $i;
	}
    }
    return -1;
}

sub dump_windows {
    my @windows = @{$_[0]};
    print "\nAll windows:\n";
    for my $window (@windows) {
	print "id: ", $window->{id},
	    ", class: ", $window->{class},
	    ", title: ", $window->{title}, "\n";
    }
}


## MAIN

my @windows = ();

open(my $xprop, "xprop -spy -root |");

while (my $line = <$xprop>) {
    if ($line =~ /_NET_ACTIVE_WINDOW\(WINDOW\): window id # (0x[0-9a-z]+)/) {
	my %window = get_window($1);
	my $index = index_of(\@windows, \%window);
	if ($index != -1) {
	    splice @windows, $index, 1;
	}
	unshift @windows, \%window;
	dump_windows(\@windows);
    }
}
close($xprop);
