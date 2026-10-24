'use client';
import "./wall.css"
export default function Wall() {

  return (
    <div className="wall" id="wall">
      <div className="wall__container">
        <div className="wall__content">

          {/*
                WALL:

                  (X)
                  |
                  |
                  |
                  |
                  |
                  |______________ (X)
                 /
                /
               /
              /
            (Z)

          */}

          <div className="wall__x"></div>
          <div className="wall__y"></div>
          <div className="wall__z__container">
            <div className="wall__z"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

