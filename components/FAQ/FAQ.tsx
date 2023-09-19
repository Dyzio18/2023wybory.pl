interface FAQLinks {
  title: string;
  url: string;
}

export interface FAQProps {
  answer: string;
  children?: string | TrustedHTML;
  question: string;
  links?: FAQLinks[];
}

export interface FAQComponentProps {
  faqs: FAQProps[];
}

export const FAQ = ({ faqs }: FAQComponentProps) => {
  return (

    <div className="container max-w-4xl mx-auto">
      <div className="space-y-4 pt-10">
        <>
          {faqs.map((faq: FAQProps) => (
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
              >
                <h2 className="font-medium">
                  {faq.question}
                </h2>
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </summary>
              <p className="mt-4 px-4 leading-relaxed text-gray-700">
                {faq.answer}
              </p>
              {faq.children && <div dangerouslySetInnerHTML={{ __html: faq.children }} />}
              {faq.links && (
                <>
                  <h3 className="mt-4 px-4 font-medium text-gray-900">
                    Więcej informacji:
                  </h3>
                  <ul className="mt-4 px-4 list-disc list-inside">
                    {faq.links.map((link: FAQLinks) => (
                      <li>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-800 hover:underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}

            </details>
          ))}
        </>
      </div >
    </div>
  );
};
