import Head from 'next/head';
import { IntroSection } from '@/components';

export default function Home() {
  return (
    <main>
      <IntroSection />
    </ main>
  );
}

const Header = () => {
  return (
    <section>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src="/next.svg" className="max-w-sm rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-center mt-3 font-bold text-gray-900">2023wybory.pl</h1>
      <p className="text-xl text-center pt-3 text-gray-700">
        Wybory są fundamentem demokracji.<br /> To szansa na wpływanie na przyszłość naszego kraju. <br />
        Dowiedz się, dlaczego warto brać udział w wyborach,
      </p>
      <h2 className="text-3xl text-center mt-3 font-bold text-gray-900">15 października 2023</h2>
    </section>
  );
};
