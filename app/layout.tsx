import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Footer } from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wybory Parlamentarne i Senackie 2023 | 2023Wybory.pl - Informacje, Kandydaci, Wyniki',
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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className='app-container'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
