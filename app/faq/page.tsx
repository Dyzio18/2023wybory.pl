import Head from 'next/head';
import { IntroSection, SejmMap, Layout, FAQ, FAQProps } from '@/components';
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

const FAQs = [
  {
    question: "Czy 2023Wybory.pl jest stroną oficjalną?",
    answer: "To nie jest oficjalna strona. To projekt, który ma na celu ułatwienie dostępu do informacji o wyborach parlamentarnych i senackich w 2023 roku.",
  },
  {
    question: "Kiedy odbędą się wybory parlamentarne i senackie w 2023 roku?",
    answer: "Wybory parlamentarne odbędą się 15 października 2023 roku. Głosować można w godzinach 7:00-21:00.",
    links: [
      {
        url: "https://wybory.gov.pl/sejmsenat2023/",
        title: "Terminy wyborów",
      },
    ],
  },
  {
    question: "Jak zostać kandydatem na członka obwodowej komisji wyborczej?",
    answer: "Zgodnie z Kalendarzem wyborczym termin na zgłaszanie przez pełnomocników komitetów wyborczych kandydatów na członków obwodowych komisji wyborczych upływa 15 września 2023 r. Obwodowe komisje wyborcze powołane zostaną do dnia 25 września 2023 roku. Za udział w pracach i szkoleniach obwodowych komisji wyborczych w wyborach do Sejmu Rzeczypospolitej Polskiej i do Senatu Rzeczypospolitej Polskiej przysługuje dieta. Przewodniczący komisji otrzymają 800 zł, zastępcy przewodniczącego 700 zł, a członkowie komisji 600 złotych. Kandydatem do składu obwodowej komisji wyborczej może być osoba posiadająca prawo wybierania, tj. osoba, która: ",
    children: `
        <ul class="list-disc pl-10 pt-2">
          <li> jest obywatelem polskim </li>
          <li> najpóźniej w dniu zgłoszenia kończy 18 lat </li>
          <li> nie jest pozbawiona praw publicznych prawomocnym orzeczeniem sądu </li>
          <li> nie jest pozbawiona praw wyborczych prawomocnym orzeczeniem Trybunału Stanu </li>
          <li> nie jest ubezwłasnowolniona prawomocnym orzeczeniem sądu.</li>
        </ul>`,
    links: [
      {
        url: "https://pkw.gov.pl/aktualnosci/informacje/jak-zostac-kandydatem-na-czlonka-obwodowej-komisji-wyborczej",
        title: "Kandydaci",
      },
    ],
  },
  {
    question: "Jak zostać kandydatem na posła lub senatora?",
    answer: "Posłem może zostać osoba, która ukończyła 21. rok życia. Kandydat na senatora musi mieć co najmniej 30 lat. Kandydat musi mieć prawo wybierania w tych wyborach i polskie obywatelstwo.",
    links: [
      {
        url: "https://pkw.gov.pl/aktualnosci/informacje/informacja-o-zasadach-i-sposobie-zglaszania-list-kandydatow-na-poslow-w-wyborach-do-sejmu-rzeczyposp",
        title: "Kandydaci na posłów",
      },
      {
        url: "https://pkw.gov.pl/aktualnosci/informacje/informacja-o-zasadach-i-sposobie-zglaszania-kandydatow-na-senatorow-w-wyborach-do-senatu-rzeczypospo",
        title: "Kandydaci na senatorów",
      }
    ],
  },
  {
    question: "Na jakiej podstawie przeprowadzane jest referendum?",
    answer: "Na postawie art. 125 Konstytucji RP",
    children: `
      <ul class="list-disc pl-10">
        <li>Art. 125.</li>
        <ol type="1" class="list-decimal pl-10">
          <li>W sprawach o szczególnym znaczeniu dla państwa może być przeprowadzone referendum ogólnokrajowe.</li>
          <li>Referendum ogólnokrajowe ma prawo zarządzić Sejm bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby posłów lub Prezydent Rzeczypospolitej za zgodą Senatu wyrażoną bezwzględną większością głosów w obecności co najmniej połowy ustawowej liczby senatorów.</li>
          <li>Jeżeli w referendum ogólnokrajowym wzięło udział więcej niż połowa uprawnionych do głosowania, wynik referendum jest wiążący.</li>
          <li>Ważność referendum ogólnokrajowego oraz referendum, o którym mowa w art. 235 ust. 6, stwierdza Sąd Najwyższy.</li>
          <li>Zasady i tryb przeprowadzania referendum określa ustawa.</li>
        </ol>
      </ul>
    `,
    links: [
      {
        url: "https://www.sejm.gov.pl/prawo/konst/polski/kon1.htm",
        title: "Konstytucja RP",
      },
    ],
  }
] as FAQProps[];

export default function Index() {
  return (
    <main className='container max-w-4xl mx-auto mt-8'>
      <h1 className='text-3xl font-bold'>FAQ</h1>
      <p className='text-lg mt-4'>Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące wyborów parlamentarnych i&nbsp;senackich w&nbsp;2023 roku.</p>
      <FAQ faqs={FAQs} />
    </ main >
  );
}


