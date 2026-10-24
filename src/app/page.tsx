'use client';
import ThemeToggle from '@/components/theme-toggle';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import Wall from '@/components/wall/wall';

export default function Home() {

  const mounted = useMounted();
  const { theme } = useTheme()

  return (
    <div className="home" id="home">
      <main className="home__countainer">
        <div className="home__content">
          <Wall />
          <ThemeToggle />aaaaaaa
          <div className="asd">ASD
            <span className='text-yellow-800'>
              {mounted && theme}
            </span>
          </div>

        </div>
      </main>
    </div>
  );
}
