'use client';
import "./window.css"
export default function Window() {

  return (
    <div className="window" id="window">
      <div className="window__container">
        <div className="window__content">
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
          <div className="window__star hidden"></div>
        </div>
      </div>
    </div>
  );
}

