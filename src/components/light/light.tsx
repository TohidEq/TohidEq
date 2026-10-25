'use client';

import { useTheme } from 'next-themes';
import './light.css';
import { useMounted } from '@/hooks/use-mounted';

export default function Light() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const mounted = useMounted();
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

          <span className={`light__rays ${(mounted) && (theme=="light"? "light__rays--on":"light__rays--off")}`} />
        </button>

        {/* Light switch */}
        <button
          type="button"
          className="light__switch"
          onClick={toggleTheme}
          aria-label="Toggle light and dark theme"
        >
        </button>

      </div>
    </div>
  );
}