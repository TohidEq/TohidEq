'use client';
import { useState } from "react";
import "./window.css"
import { useDayPercent } from "@/hooks/useDayPercent";


export default function Window() {
  const [windowState, setWindowState] = useState<"open"|"close">("open");

  const toggleWindowState = () => {
    setWindowState(windowState==="close"? "open":"close")
  }

  const dayPercent = useDayPercent();



  const rotateItem: React.CSSProperties = {
    rotate: `${dayPercent/100*360}deg`,
  };

  const rotateItemReverse: React.CSSProperties = {
    rotate: `-${dayPercent/100*360}deg`,
  };

  const COLOR_SKY_DAY   = '#88edff';
  const COLOR_SKY_NIGHT = '#142123';

  const background = `linear-gradient(${dayPercent/100*360}deg, ${COLOR_SKY_NIGHT} 30%, ${COLOR_SKY_DAY} 100%)`;



  return (
    <div className="window" id="window"
      onClick={toggleWindowState}>

      <div className="window__container">
        <div className="window__content">
          <div className={`window__inside window__inside--${windowState}`}>
            <div className="window__frame"></div>
            <div className="window__blinds">
              <div className="window__blinds-manager">
                <span/>
              </div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
              <div className="window__blind"></div>
            </div>
          </div>

          <div className="window__outside"
                style={{background,}}>

            <div className="window__outside__sun-moon"
                  style={rotateItem}>
              <div className="window__sun"
                style={rotateItemReverse}></div>
              <div className="window__moon"
                style={rotateItemReverse}>
                <div className="window__moon__content"></div>
              </div>
            </div>


            <div className="window__outside__cloud-star window__outside__cloud-star--left"
                  style={rotateItemReverse}>

              <div className="window__cloud"
                    style={rotateItem}>
              <div className="window__cloud__left"></div>
              <div className="window__cloud__center"></div>
              <div className="window__cloud__right"></div>
              <div className="window__cloud__white"></div>
            </div>
              <div className="window__star"
                    style={rotateItem}></div>
            </div>
            <div className="window__outside__cloud-star window__outside__cloud-star--right"
                  style={rotateItem}>

              <div className="window__cloud"
                    style={rotateItemReverse}>
              <div className="window__cloud__left"></div>
              <div className="window__cloud__center"></div>
              <div className="window__cloud__right"></div>
              <div className="window__cloud__white"></div>
            </div>
              <div className="window__star"
                    style={rotateItemReverse}></div>
            </div>


            <div className="window__outside__hills">
              <div className="window__outside__hill
              window__outside__hill--small"
                    style={rotateItem}
              ></div>
              <div className="window__outside__hill
              window__outside__hill--big"
                    style={rotateItem}
              ></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

