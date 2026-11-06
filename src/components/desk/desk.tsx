
'use client';

import './desk.css';


export default function Desk(props: {scrollPercent:number}) {
  const { scrollPercent } = props;

  function rotatePercentToDeg(x: number):number{
    const maxDeg = 25;
    const y = (maxDeg * x) / 100;
    return maxDeg-Number(y.toFixed(2));
  }
  function paddingPercentToPx(x: number):number{
    const extraPx = 2;
    const maxPx= 20;
    const y = (maxPx* x) / 100;
    return maxPx-Number(y.toFixed(2)) + extraPx;
  }


  return (
    <div className="desk" id="desk"
          style={{
              paddingTop: `${paddingPercentToPx(scrollPercent)}px`,
              paddingLeft: `${paddingPercentToPx(scrollPercent)}px`,
              paddingRight: `${paddingPercentToPx(scrollPercent)}px`,
            }}>
      <div className="desk__container"
        style={{
          transform: `rotateX(${rotatePercentToDeg(scrollPercent)}deg)`
        }}
      >
        <div className="desk__light">
          <div className="desk__light__lamp">
            <div className="desk__light__ray"></div>
          </div>
        </div>
        <div className="desk__content">
          {rotatePercentToDeg(scrollPercent)}
          <br />
          { scrollPercent}
        </div>
      </div>
    </div>
  );

}