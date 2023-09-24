export const ReferendumSection = () => {
  return (
    <div className="mt-6">
      <h2 className="text-3xl text-center font-bold sm:text-4xl mt-28">
        Referendum ogólnokrajowe w 2023 r.
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-50">
          <h3 className="text-2xl font-bold mb-6">
            Pytanie 1:
          </h3>
          <p className="text-xl text-gray-700">
            Czy popierasz wyprzedaż majątku państwowego podmiotom zagranicznym, prowadzącą do utraty kontroli Polek i Polaków nad strategicznymi sektorami gospodarki?
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-50">
          <h3 className="text-2xl font-bold mb-6">
            Pytanie 2:
          </h3>
          <p className="text-xl text-gray-700">
            Czy popierasz podniesienie wieku emerytalnego, w tym przywrócenie podwyższonego do 67 lat wieku emerytalnego dla kobiet i mężczyzn?
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-50">
          <h3 className="text-2xl font-bold mb-6">
            Pytanie 3:
          </h3>
          <p className="text-xl text-gray-700">
            Czy popierasz likwidację bariery na granicy Rzeczypospolitej Polskiej z Republiką Białorusi?
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:bg-slate-50">
          <h3 className="text-2xl font-bold mb-6">
            Pytanie 4:
          </h3>
          <p className="text-xl text-gray-700">
            Czy popierasz przyjęcie tysięcy nielegalnych imigrantów z Bliskiego Wschodu i Afryki, zgodnie z przymusowym mechanizmem relokacji narzucanym przez biurokrację europejską?
          </p>
        </div>
      </div>
    </div>
  );
};
