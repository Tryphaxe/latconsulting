import { BanknotesIcon, GlobeEuropeAfricaIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Teams from "./Team";
import Contact from "./Contact";

export default function page() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-orange-600">
                Qui sommes-nous ?
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                LAT Consulting
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Nous sommes une entreprise de spécialistes passionnés, dédiés à
                transformer chaque projet en une réussite tangible. Chez LAT
                Consulting, notre mission est d&apos;offrir des solutions
                innovantes et personnalisées, en tirant parti de notre vaste
                expérience dans des domaines clés tels que les voyages, la
                construction immobilière, la vente de terrains,
                l&apos;import-export, le transport, et les formations
                professionnelles.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt=""
            src="/img/work.jpg"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                Dans le secteur des voyages, nous nous engageons à créer des
                expériences inoubliables, adaptées aux besoins et aux désirs
                uniques de nos clients. Que ce soit pour des vacances, des
                voyages d&apos;affaires, ou des escapades de dernière minute,
                notre équipe travaille sans relâche pour garantir des
                itinéraires parfaits et des séjours sans souci.
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">
                Autres secteurs
              </h2>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <HomeModernIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-orange-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Construction immobilière :
                    </strong>{" "}
                    Nous apportons une expertise approfondie pour donner vie à
                    des projets ambitieux. Que vous cherchiez à bâtir une
                    maison, un immeuble commercial, ou à rénover une structure
                    existante, nous mettons en œuvre des solutions de haute
                    qualité, respectueuses des normes les plus strictes, pour
                    réaliser vos visions architecturales.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BanknotesIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-orange-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Vente de terrains :
                    </strong>{" "}
                    Nous offrons une gamme variée de terrains soigneusement
                    sélectionnés, que ce soit pour un usage résidentiel,
                    commercial, ou industriel. Nous aidons nos clients à trouver
                    l&apos;emplacement idéal qui répondra parfaitement à leurs
                    attentes et à leurs objectifs à long terme.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeEuropeAfricaIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-orange-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Import-export :
                    </strong>{" "}
                    Nous facilitons les échanges commerciaux à l&apos;international
                    grâce à des services logistiques efficaces et une
                    compréhension approfondie des marchés mondiaux. Nous aidons
                    nos clients à naviguer dans les complexités des
                    réglementations douanières et à maximiser leurs opportunités
                    de croissance sur les marchés étrangers.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Avec LAT Consulting, vous choisissez un partenaire qui met
                l&apos;accent sur la qualité, l&apos;innovation, et une
                compréhension fine de vos besoins. Nous nous efforçons de bâtir
                des relations de confiance et de contribuer de manière
                significative au succès de nos clients. Découvrez comment nous
                pouvons collaborer pour atteindre vos objectifs et réaliser vos
                ambitions avec excellence.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Notre crédo
              </h2>
              <p className="mt-6">
                Au cœur de notre succès se trouve un engagement profond envers
                la satisfaction client. Nous croyons fermement que chaque client
                mérite une attention personnalisée et une approche sur mesure
                pour ses besoins spécifiques. Notre équipe, composée
                principalement de jeunes talents dynamiques, allie innovation,
                réactivité et expertise pour fournir des services qui dépassent
                les attentes et créent une valeur durable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teams/>

    <Contact/>
    </div>
  );
}
