'use client';
import { useState } from "react";
import "./window.css"
export default function Window() {
  const [windowState, setWindowState] = useState<"open"|"close">("open");

  const toggleWindowState = () => {
    setWindowState(windowState==="close"? "open":"close")
  }
  return (
    <div className="window" id="window" onClick={toggleWindowState}>
      <div className="window__container">
        <div className="window__content">
          <div className={`window__inside window__inside--${windowState}`}>
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
          <div className="window__outside">
            <div className="window__sun hidden"></div>
            <div className="window__moon hidden">
              <div className="window__moon__content"></div>
            </div>
            <div className="window__cloud hidden">
              <div className="window__cloud__left"></div>
              <div className="window__cloud__center"></div>
              <div className="window__cloud__right"></div>
              <div className="window__cloud__white"></div>
            </div>
            <div className="window__star"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

