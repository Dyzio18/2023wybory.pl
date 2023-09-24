import { Countdown } from "..";

export const IntroSection = () => {

  return (
    <section>
      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Wybory do Sejmu i Senatu Rzeczypospolitej Polskiej"
              src="https://images.unsplash.com/photo-1543710121-35f6639aba59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Wybory do Sejmu i Senatu Rzeczypospolitej Polskiej
            </h2>
            <h2 className="text-3xl font-bold sm:text-4xl">
              15 października 2023
            </h2>

            <p className="mt-4 text-gray-600">
              Wybory to podstawowy mechanizm demokracji.
              Wybierzemy 460&nbsp;posłów i&nbsp;100&nbsp;senatorów, w&nbsp;ręce których oddamy               kluczowe decyzje dotyczące naszego kraju na kolejne 4 lata.
            </p>
            <Countdown />
          </div>
        </div>
      </div>
    </section>

  );
};