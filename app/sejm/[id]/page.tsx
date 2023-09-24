import { Breadcrumbs } from "@/components";
import { getCsvDistrictIds, getSejmCsvDataByDistrict, getSejmCandidatesCsvDataByDistrict, CandidateCsvHeaders } from '@/lib/getCsvData';

interface PageProps {
  params: {
    id: number;
    data?: any;
  };
}

export async function generateStaticParams() {
  const paths = getCsvDistrictIds('sejm.csv');
  return paths.map((id) => {
    return {
      params: {
        id: id,
      },
    };
  });
}

export default function Page({ params }: PageProps) {
  const data = getSejmCsvDataByDistrict(params.id).region;
  const candidates = getSejmCandidatesCsvDataByDistrict(params.id).candidates;

  return (
    <div className='container mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8'>
      <Breadcrumbs
        level1={{
          link: "/sejm",
          label: "Sejm"
        }}
        level2={{
          link: `/sejm/${params.id}`,
          label: `Okręg ${params.id}`
        }}
      />
      <h1 className="text-2xl font-bold">Okręg: {params.id}</h1>
      <h2 className="text-xl font-bold mt-4">Informacje o okręgu</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <div className="bg-white shadow">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <div className="sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6 sm:py-5">
                <dt className="text-sm font-medium text-gray-500">
                  Numer okręgu
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  {data?.districtNumber}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Liczba mandatów
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  {data?.mandateCount}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Liczba list wyborczych
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  {data?.listCount}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Liczba kandydatów
                </dt>

                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  {data?.candidateCount}
                </dd>

                <dt className="text-sm font-medium text-gray-500">
                  Obszar
                </dt>

                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  {data?.borderDescription}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-8">Kandydaci</h2>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Imię i nazwisko</th>
              <th className="px-4 py-2">Partia</th>
              <th className="px-4 py-2">Zawód</th>
              <th className="px-4 py-2">Miejsce zamieszkania</th>
              <th className="px-4 py-2">Liczba głosów</th>
            </tr>
          </thead>
          <tbody>
            {candidates?.map((candidate: CandidateCsvHeaders) => (
              <tr key={candidate.districtNumber}>
                <td className="border px-4 py-2">{candidate.fullName}</td>
                <td className="border px-4 py-2">{candidate.partyAffiliation}</td>
                <td className="border px-4 py-2">{candidate.occupation}</td>
                <td className="border px-4 py-2">{candidate.residence}</td>
                <td className="border px-4 py-2">{candidate.voteCount || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
