'use client';
import { useMounted } from '@/hooks/use-mounted';
import { useTheme } from 'next-themes';
import Wall from '@/components/wall/wall';
import Clock from '../components/clock/clock';
import Light from '../components/light/light';
import Plant from '../components/plant/plant';

export default function Home() {

  const mounted = useMounted();
  const { theme } = useTheme()

  return (
    <div className="home" id="home">
      <main className="home__countainer">
        <div className="home__content">
          <div id="room">
            <Wall />
            <Clock />
            <Plant />
            <Light />
          </div>


        </div>
      </main>
    </div>
  );
}
