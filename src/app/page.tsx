'use client';
import ThemeToggle from '@/components/theme-toggle';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import Wall from '@/components/wall/wall';
import Clock from '../components/clock/clock';

export default function Home() {

  const mounted = useMounted();
  const { theme } = useTheme()

  return (
    <div className="home" id="home">
      <main className="home__countainer">
        <div className="home__content">
          <Wall />
          <Clock />

          <br /><br /><br />
          <div className="asd">
            <span className='text-yellow-800'>
              {mounted && theme}
            </span>
          </div>
          <ThemeToggle />

        </div>
      </main>
    </div>
  );
}
