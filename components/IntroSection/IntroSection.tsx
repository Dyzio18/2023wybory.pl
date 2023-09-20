import { Countdown } from "..";

export const IntroSection = () => {

  return (
    <section className="bg-white">
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="mx-auto">
          <h1 className="text-3xl font-bold sm:text-4xl pb-2 text-center">
            Wybory do Sejmu i Senatu Rzeczypospolitej Polskiej w 2023 r.
          </h1>
          <h2 className="text-3xl font-bold sm:text-4xl text-center">
            15 października 2023
          </h2>


          <Countdown />

          {/* <p className="mt-4 text-black-300">
            Ogólnokrajowe wybory to jedno z najważniejszych wydarzeń w życiu politycznym kraju. To czas, kiedy obywatele mają szansę wybrać swoich przedstawicieli do parlamentu, senatu, a także do organów samorządu terytorialnego. Wybory są fundamentem demokracji, ponieważ to właśnie wtedy obywatele mają wpływ na kształtowanie przyszłości kraju. Każdy głos jest ważny i może mieć znaczący wpływ na wynik wyborów. Dlatego warto brać udział w wyborach i wykorzystać swoje prawo do głosowania.
          </p> */}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border  bg-red-400 text-white border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Wybory Parlamentarne 2023</h2>

            <p className="mt-1 text-sm text-gray-100">
              Dowiedz się więcej o nadchodzących wyborach parlamentarnych w 2023 roku. Zapoznaj się z kandydatami, datami głosowania i ważnymi informacjami dotyczącymi tego historycznego wydarzenia.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
            href="https://wybory.gov.pl/sejmsenat2023/pl/obwodowe/wyszukiwarka"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Gdzie zagłosować?</h2>

            <p className="mt-1 text-sm text-gray-700">
              Wyszukiwarka obwodowych komisji wyborczych
              w wyborach do Sejmu i Senatu w 2023 r
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
            href="/sejm"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Kandydaci</h2>

            <p className="mt-1 text-sm text-gray-700">
              Wyszukiwarka kandydatów
              w wyborach do Sejmu i Senatu w 2023 r.
            </p>
          </a>

          {/* <a
            className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Digital campaigns</h2>

            <p className="mt-1 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Digital campaigns</h2>

            <p className="mt-1 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-pink-500 hover:shadow-pink-500"
            href="/services/digital-campaigns"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-4 text-xl font-bold ">Digital campaigns</h2>

            <p className="mt-1 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a> */}

        </div>

        <div className="mt-6 text-left">
          <h2 className="text-3xl font-bold sm:text-4xl mt-28">
            Referendum ogólnokrajowe w 2023 r.
          </h2>

          <h3 className="text-lg text-gray-500 font-bold">
            Pytania referendalne
          </h3>

          <h4 className="text-xl font-bold mt-6">
            Pytanie 1:
          </h4>
          <p className="mt-1 text-xl text-gray-700">
            Czy popierasz wyprzedaż majątku państwowego podmiotom zagranicznym, prowadzącą do utraty kontroli Polek i Polaków nad strategicznymi sektorami gospodarki?
          </p>

          <h4 className="text-xl font-bold mt-6">
            Pytanie 2:
          </h4>
          <p className="mt-1 text-xl text-gray-700">
            Czy popierasz podniesienie wieku emerytalnego, w tym przywrócenie podwyższonego do 67 lat wieku emerytalnego dla kobiet i mężczyzn?
          </p>
          <h4 className="text-xl font-bold mt-6">
            Pytanie 3:
          </h4>
          <p className="mt-1 text-xl text-gray-700">
            Czy popierasz likwidację bariery na granicy Rzeczypospolitej Polskiej z Republiką Białorusi?
          </p>
          <h4 className="text-xl font-bold mt-6">
            Pytanie 4:
          </h4>
          <p className="mt-1 text-xl text-gray-700">
            Czy popierasz przyjęcie tysięcy nielegalnych imigrantów z Bliskiego Wschodu i Afryki, zgodnie z przymusowym mechanizmem relokacji narzucanym przez biurokrację europejską?
          </p>

        </div>

        {/* <div className="mt-6 text-center">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium  transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div> */}

      </div>


    </section>

  );
};