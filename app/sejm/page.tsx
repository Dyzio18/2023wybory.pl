import { Breadcrumbs, SejmMap } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wybory do sejmu | 2023Wybory.pl - Informacje, Kandydaci, Wyniki',
  description: 'Znajdź najważniejsze informacje na temat wyborów parlamentarnych i senackich w Polsce w 2023 roku na 2023Wybory.pl. Poznaj kandydatów, sprawdź wyniki i dowiedz się, gdzie głosować. Bądź na bieżąco z naszym serwisem',
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Wybory Parlamentarne i Senackie 2023 | 2023Wybory.pl - Informacje, Kandydaci, Wyniki",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://2023wybory.pl",
    title: 'Okręgi wyborcze | 2023Wybory.pl - Informacje, Kandydaci, Wyniki',
    description: "Znajdź najważniejsze informacje na temat wyborów parlamentarnych i senackich w Polsce w 2023 roku na 2023Wybory.pl. Poznaj kandydatów, sprawdź wyniki i dowiedz się, gdzie głosować. Bądź na bieżąco z naszym serwisem",
    siteName: "Wybory Parlamentarne i Senackie 2023 | 2023Wybory.pl - Informacje, Kandydaci, Wyniki",
    images: [{
      url: "https://2023wybory.pl/og.png",
    }],
  },
};

export default function Index() {
  return (
    <main>
      <div className='container mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8'>
        <Breadcrumbs
          level1={{
            link: "/sejm",
            label: "Sejm"
          }}
        />
        <h1 className='text-4xl font-bold text-center'>Wybory do sejmu</h1>
        <p className='text-center'>Wybierz okręg wyborczy i sprawdź kandydatów do sejmu.</p>
      </div>
      <SejmMap />
    </ main>
  );
}


