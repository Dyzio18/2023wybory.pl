import { MobileNavigation } from ".";

export const Header = () => {

  return (
    <header className="bg-white">
      <div
        className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
      >
        <a className="block text-teal-600 font-bold" href="/">
          <span className="sr-only">Home</span>
          2023wybory.pl
        </a>

        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/faq">
                  Wyborcze FAQ
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="/mapy">
                  Sejm
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};