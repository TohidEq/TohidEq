'use client';
import Wall from '@/components/wall/wall';
import Clock from '../components/clock/clock';
import Light from '../components/light/light';
import Plant from '../components/plant/plant';
import Window from '@/components/window/window';

export default function Home() {

  return (
    <div className="home" id="home">
      <main className="home__countainer">
        <div className="home__content">
          <div id="room">
            <Wall />
            <Clock />
            <Plant />
            <Window />
            <Light />
          </div>
        </div>
      </main>
    </div>
  );
}
