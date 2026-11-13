
'use client';

import { useState } from 'react';
import './folder.css';
import Image from 'next/image';

export default function Folder() {
  const PAGES_COUNT = 9;
  const [currentPage, setCurrentPage] = useState<number>(0);

  const getPageState = (page: number) =>
    currentPage >= page ? 'is-flipped' : 'is-unflipped';

  const getPageZIndex = (page: number) =>
    currentPage >= page ? page : PAGES_COUNT+1 - page;

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, PAGES_COUNT-1));
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
            <button className='text-center bg-linear-to-r btn-l'
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              {"-"}
            </button>


            <button className='text-center bg-linear-to-r btn-c'
                         onClick={()=>setCurrentPage(0)}
                         disabled={currentPage === 0}
                       >
                         {"="}
                       </button>


            <button className='text-center bg-linear-to-l btn-r '
              onClick={nextPage}
              disabled={currentPage === PAGES_COUNT-1}
            >
              {"+"}
            </button>
          </div>






          <div className="folder__pages">
            <div
              className={`folder__page folder__page--full folder__cover ${getPageState(1)}`}
              id="fp-cover"
              style={{ zIndex: getPageZIndex(1) }}
              onClick={() => setCurrentPage(currentPage==0? 1:0)}

            >
              <div className="folder__page__content folder__cover__content">
                <h2>TOHID EGHDAMI</h2>
                <div className="folder__cover__more">
                  <p>Front-End Developer</p>
                </div>
              </div>
            </div>



            <div
              className={`folder__page folder__page--normal ${getPageState(2)}`}
              id="fp-about"
              onClick={()=>setCurrentPage(-1+2)}
              style={{ zIndex: getPageZIndex(2) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                ABOUT
              </div>
              <div className="folder__page__content">
                <section className="fp-about">
                  <header>
                    <span>
                      <h1 className='pb-0.5 md:pb-1'>Tohid Eghdami</h1>
                      <p className='text-[clamp(1rem,3.1vw,1.4rem)] opacity-70'>Front-End Developer</p>
                    </span>
                    <div className="img">

                      <Image
                        src="/images/Tohid_Eghdami.png"
                        alt="Tohid Eghdami"
                        width={60}
                        height={60}
                      />
                    </div>
                  </header>
                  <p className='med'>
                    23-year-old front-end developer from Rasht, Iran, passionate about building modern, responsive, and interactive web experiences. He enjoys turning ideas into clean, intuitive interfaces, with a strong interest in creative UI design, modern web technologies, and thoughtful details.
                  </p>

                   <ul className='smll'>
                     <li>Born: May 3, 2003 · Rasht, Iran</li>
                     <li>Location: Gilan, Iran (UTC+03:30)</li>
                     <li>Education: M.Sc. Computer Architecture, University of Guilan</li>
                   </ul>
                </section>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(3)}`}
              id="fp-skills"
              onClick={()=>setCurrentPage(-1+3)}
              style={{ zIndex: getPageZIndex(3) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                SKILLS
              </div>

              <div className="folder__page__content">
                <section className="fp-skills">
                  <header>
                    <span>
                      <h2>Technical Skills</h2>
                    </span>
                  </header>

                    <p className='med'>Programming Languages: HTML, CSS, JavaScript, TypeScript.</p>

                    <p className='med'>Frameworks & Libraries: React, Next.js, Redux, Tailwind CSS, Bootstrap.</p>

                    <p className='med'>Styling: CSS, SCSS, Responsive Design.</p>

                    <p className='smll brdr-t'>Development Tools: Git, GitHub, Vite, Webpack, ESLint.</p>

                    <p className='smll'>Package Managers: npm, pnpm.</p>

                    <p className='smll brdr-t'>Development Practices: Component-Based Development, Reusable Components, Clean Code.</p>
                </section>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(4)}`}
              id="fp-p1"
              onClick={()=>setCurrentPage(-1+4)}
              style={{ zIndex: getPageZIndex(4) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                1
              </div>

              <div className="folder__page__content">
                <p>page3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(5)}`}
              id="fp-p2"
              onClick={()=>setCurrentPage(-1+5)}
              style={{ zIndex: getPageZIndex(5) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                2
              </div>

              <div className="folder__page__content">
                <p>page3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(6)}`}
              id="fp-p3"
              onClick={()=>setCurrentPage(-1+6)}
              style={{ zIndex: getPageZIndex(6) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                3
              </div>

              <div className="folder__page__content">
                <p>page3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(7)}`}
              id="fp-p4"
              onClick={()=>setCurrentPage(-1+7)}
              style={{ zIndex: getPageZIndex(7) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                4
                <span className="folder__projects-label">
                  <div className="folder__projects-label__letter">P</div>
                  <div className="folder__projects-label__letter">R</div>
                  <div className="folder__projects-label__letter">O</div>
                  <div className="folder__projects-label__letter">J</div>
                  <div className="folder__projects-label__letter">E</div>
                  <div className="folder__projects-label__letter">C</div>
                  <div className="folder__projects-label__letter">T</div>
                  <div className="folder__projects-label__letter">S</div>
                </span>
              </div>

              <div className="folder__page__content">
                <p>page3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vel veritatis. At, inventore fugiat! Illum laborum ipsam ea voluptatem eveniet praesentium vero? Voluptate neque praesentium rerum quia placeat, cupiditate rem?</p>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(8)}`}
              id="fp-interests"
              onClick={()=>setCurrentPage(-1+8)}
              style={{ zIndex: getPageZIndex(8) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                INTERESTS
              </div>

              <div className="folder__page__content">
                <section className="fp-interests">
                  <header>
                    <span>
                      <h2>
                        Personal Interests
                      </h2>
                    </span>
                  </header>



                  <p className='med'>
                    Arch Linux, Wayland, open-source software
                    and shell scripting.
                  </p>

                  <p className='med'>
                    Additional technical experience: Node.js, PHP,
                    MySQL, MongoDB, Python, C++, Rust and Java.
                  </p>

                  <p className='smll brdr-t'>
                    Chess (1+0 Bullet), World of Warcraft (WotLK),
                    Dota 2, Counter-Strike 2, Factorio, Luanti and Arma 3.
                  </p>

                  <p className='smll brdr-t'>
                    Fitness, strength training and bodybuilding.
                  </p>
                </section>
              </div>
            </div>


            <div
              className={`folder__page folder__page--normal ${getPageState(9)}`}
              id="fp-contact"
              onClick={()=>setCurrentPage(-1+9)}
              style={{ zIndex: getPageZIndex(9) }}
            >
              <div className="folder__page__label folder__page__label--normal">
                CONTACT
              </div>

              <div className="folder__page__content">
                <section className="fp-contact">
                  <header>
                    <span>
                      <h2>Contact</h2>
                    </span>
                  </header>

                    <address>
                      <ul>
                        <li>
                          <a href="mailto:TohidEq@gmail.com">
                            Email
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://t.me/tohid_eq"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Telegram
                          </a>
                        </li>

                        <li>
                          <a href="tel:+989307827788">
                            Phone
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://github.com/TohidEq"
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        </li>
                      </ul>
                    </address>

                </section>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}
