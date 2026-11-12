
'use client';

import { useState } from 'react';
import './folder.css';

export default function Folder() {
  const PAGES_COUNT = 3;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getPageState = (page: number) =>
    currentPage >= page ? 'is-flipped' : 'is-unflipped';

  const getPageZIndex = (page: number) =>
    currentPage >= page ? page : PAGES_COUNT+1 - page;

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 2));
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="folder" id="folder">
      <div className="folder__container">
        <div className="folder__content">
          <div className="folder__cover-mini">
            <div className="folder__cover-mini__container">
              <div className="folder__cover-mini__content">
                <h3>Tohid</h3>
                <h4>Eq</h4>
                <p>2003</p>
                <p>May 3</p>
              </div>
              <div className="folder__cover-mini__hole">
                <span />
              </div>
            </div>
          </div>





          <div className="folder__controls">
            <button className='text-left bg-linear-to-r btn-l'
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              {"<"}
            </button>


            <button className='text-center bg-linear-to-r btn-c'
                         onClick={()=>setCurrentPage(0)}
                         disabled={currentPage === 0}
                       >
                         {"۰"}
                       </button>


            <button className='text-right bg-linear-to-l btn-r '
              onClick={nextPage}
              disabled={currentPage === 2}
            >
              {">"}
            </button>
          </div>






          <div className="folder__pages">
            <div
              className={`folder__page folder__page--full folder__cover ${getPageState(1)}`}
              id="fp-1"
              style={{ zIndex: getPageZIndex(1) }}

            >
              <div className="folder__page__content folder__cover__content">
                <h2>Tohid Eghdami</h2>
                <div className="folder__cover__lines">
                  <span className='just-a-line'/>
                  <span className='just-a-line'/>
                </div>
              </div>
            </div>
            <div
              className={`folder__page folder__page__flag--normal folder__page--normal ${getPageState(2)}`}
              id="fp-2"
              onClick={()=>setCurrentPage(1)}
              style={{ zIndex: getPageZIndex(2) }}
            >
              <div className="folder__page__content">

                <p>page2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>

            <div
              className={`folder__page folder__page__flag--normal folder__page--normal ${getPageState(3)}`}
              id="fp-3"
              onClick={()=>setCurrentPage(2)}
              style={{ zIndex: getPageZIndex(3) }}
            >

              <div className="folder__page__content">
                <p>page3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
