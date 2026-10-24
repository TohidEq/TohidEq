'use client';
import ThemeToggle from '@/components/theme-toggle';
import { useTheme } from 'next-themes';

export default function Home() {

  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">

        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis, obcaecati beatae illo consequatur voluptatum ut, tenetur odio, rerum iure quia laboriosam quibusdam eos nemo eius. Ut explicabo magnam dolorum.</div>

        <ThemeToggle />
        <div className="asd">ASD <span className='text-yellow-800'>{ theme}</span></div>
      </main>
    </div>
  );
}
