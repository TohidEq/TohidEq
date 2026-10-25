
'use client';

import { useTheme } from 'next-themes';
import './plant.css';
import { useMounted } from '@/hooks/use-mounted';

export default function Plant() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const mounted = useMounted();
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
<div className="plant" id="plant">
  <div className="plant__container">
    <div className="plant__content">
      <div className="plant__pot">

        <div className="plant__pot__container">
          <span className="plant__pot__top"></span>
          <span className="plant__pot__bottom"></span>
        </div>

        <div className="plant__flower">
          <div className="plant__flower__flytrap">
            <div className="plant__flower__flytrap__head">
              <span className="plant__flower__flytrap__upper-jaw"></span>
              <span className="plant__flower__flytrap__lower-jaw"></span>
              <span className="plant__flower__flytrap__eye"></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  );
}