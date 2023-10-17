import Head from 'next/head';
import { IntroSection, SejmMap } from '@/components';

export default function Home() {
  return (
    <main>
      <IntroSection />
      <h1 className='text-4xl font-bold text-center'>Wybory do sejmu</h1>
      <p className='text-center'>Wybierz okręg wyborczy i sprawdź kandydatów do sejmu.</p>
      <SejmMap />
    </ main>
  );
}


