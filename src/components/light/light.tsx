'use client';

import { useTheme } from 'next-themes';
import './light.css';

export default function Light() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="light" id="light">
      <div className="light__container">

        {/* Hanging lamp */}
        <button
          type="button"
          className="light__content"

          onClick={toggleTheme}
          aria-label="Toggle theme using lamp"
        >
          <span className="light__wire" />

          <div className="light__lamp">
            <div className="light__lamp__3angle">
              <div className="light__lamp__3angle__circle" >
                <span className="light__bulb" />
              </div>
            </div>
          </div>

          <span className="light__rays" />
        </button>

        {/* Light switch */}
        <button
          type="button"
          className="light__switch "
          id="light__switch"
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
        >
          <span className="light__switch__title">Light</span>
          <div className="light__switch__content">
            <span>ON</span>
            <div className="light__switch__key"></div>
            <span>OFF</span>
          </div>
        </button>

      </div>
    </div>
  );
}