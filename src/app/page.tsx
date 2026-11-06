'use client';
import Wall from '@/components/wall/wall';
import Clock from '../components/clock/clock';
import Light from '../components/light/light';
import Plant from '../components/plant/plant';
import Window from '@/components/window/window';
import Human from '../components/human/human';
import Desk from '@/components/desk/desk';
import { FullPageProvider, FullPageWrapper, Section } from '@alvalens/react-fullpage-snap';
import { useEffect, useState } from 'react';

export default function Home() {

  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const deskTop = 50 ; // ? vh
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight * (deskTop/1.5/100);

      const percent = Math.min(
        Math.max((window.scrollY / maxScroll) * 100, 0),
        100
      );

      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home" id="home">
      <main className="home__countainer">
        <div className="home__content">
          <div id="room">
            <Wall />
            <Clock />
            <Plant />
            <Window />

            <Human />

            <Desk scrollPercent={scrollPercent} />

            <Light />


          </div>
          <FullPageProvider
            scrollingSpeed={1000}
            anchors={['YourRoom', 'MyFolder', 'More']}
            menu="#navigation"
          >
            <FullPageWrapper>
              <Section className={`h-[50vh] `}>
                <span className='invisible hidden'>room</span>
              </Section>
              <Section className='h-screen '>
                <span className='invisible hidden'>desk</span>
              </Section>
              <Section className='h-screen bg-black text-white '>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum cum et, blanditiis rem nam ducimus recusandae inventore voluptatibus est dolores voluptate ad quam atque quaerat modi! Facere eum porro soluta.</p>
              </Section>
            </FullPageWrapper>
          </FullPageProvider>
        </div>
      </main>
    </div>
  );
}
