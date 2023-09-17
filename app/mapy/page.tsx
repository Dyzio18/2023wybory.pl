import Head from 'next/head';
import { IntroSection } from '@/components';
import Layout from '@/components/Layout/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wyborcze FAQ - co warto wiedzieć? | 2023Wybory.pl - Informacje, Kandydaci, Wyniki',
  description: 'Znajdź najważniejsze informacje na temat wyborów parlamentarnych i senackich w Polsce w 2023 roku na 2023Wybory.pl. Poznaj kandydatów, sprawdź wyniki i dowiedz się, gdzie głosować. Bądź na bieżąco z naszym serwisem',
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Wybory Parlamentarne i Senackie 2023 | 2023Wybory.pl - Informacje, Kandydaci, Wyniki",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://2023wybory.pl",
    title: "Wybory Parlamentarne i Senackie 2023 | 2023Wybory.pl - Informacje, Kandydaci, Wyniki",
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
      asasas
      asas
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat odio id nulla doloribus, deserunt expedita corrupti eveniet ut deleniti aliquid dolore aperiam provident quis laboriosam tenetur natus blanditiis quod numquam!
    </ main>
  );
}


