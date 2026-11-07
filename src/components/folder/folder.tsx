
'use client';

import { useState } from 'react';
import './folder.css';

export default function Folder() {

  const [currentPage, setCurrentPage] = useState<number>(0);

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
          <div className="folder__pages">
            <div className="folder__cover" id='fp-1'>
              <div className="folder__cover__content">
                <h2>Tohid Eghdami</h2>
                <div className="folder__cover__lines">
                  <span className='just-a-line'/>
                  <span className='just-a-line'/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}