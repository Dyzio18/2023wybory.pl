import Head from 'next/head';
import { IntroSection, SejmMap } from '@/components';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okręgi wyborcze | 2023Wybory.pl - Informacje, Kandydaci, Wyniki',
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
      <SejmMap />
    </ main>
  );
}


