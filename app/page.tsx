import Head from 'next/head';
import { Countdown, DoughnutChart } from '@/components';

export default function Home() {
  return (
    <>
      <Head>
        <title>2023 Wybory</title>
      </Head>
      <main className="flex flex-col mb-4">
        <Header />
        <div className="mb-8">
          {/* <Countdown /> */}
        </div>
        <div className="max-w-xl m-auto flex-col justify-center text-center pt-6 mb-4">
          Sondażowe poparcie wyborcze (stan na 5-6 września 2023)
          <DoughnutChart />
        </div>

        <div className="m-auto max-w-lg text-center pt-6 mb-4">
          <p>
            Ogólnokrajowe wybory to jedno z najważniejszych wydarzeń w życiu politycznym kraju. To czas, kiedy obywatele mają szansę wybrać swoich przedstawicieli do parlamentu, senatu, a także do organów samorządu terytorialnego. Wybory są fundamentem demokracji, ponieważ to właśnie wtedy obywatele mają wpływ na kształtowanie przyszłości kraju. Każdy głos jest ważny i może mieć znaczący wpływ na wynik wyborów. Dlatego warto brać udział w wyborach i wykorzystać swoje prawo do głosowania.
          </p>
        </div>

      </main>
    </>
  );
}


const Header = () => {
  return (
    <section>
      <h1 className="text-5xl text-center mt-3 font-bold text-gray-900">2023wybory.pl</h1>
      <p className="text-xl text-center pt-3 text-gray-700">
        Wybory są fundamentem demokracji.<br /> To szansa na wpływanie na przyszłość naszego kraju. <br />
        Dowiedz się, dlaczego warto brać udział w wyborach,
      </p>
      <h2 className="text-3xl text-center mt-3 font-bold text-gray-900">15 października 2023</h2>
    </section>
  );
};