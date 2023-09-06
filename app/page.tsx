import { Countdown, DoughnutChart } from '@/components';

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col h-screen">
      <div className="mb-8">
        <Countdown />
      </div>
      <div className="mb-4">
        Sondażowe poparcie wyborcze (stan na 5-6 września 2023)
        <DoughnutChart />
      </div>

    </main>
  );
}
