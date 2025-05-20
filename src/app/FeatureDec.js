import { CubeIcon } from '@heroicons/react/20/solid'

const features = [
  {
    id: 1,
    title: "Un processus simple pour réaliser vos rêves d'études ou de voyages.",
    description: "Inscrivez-vous facilement en suivant nos étapes claires et précises.",
    lien: "Inscription",
  },
  {
    id: 2,
    title: "Suivez nos étapes pour préparer votre départ à l'étranger.",
    description: "Nous vous guidons à chaque étape pour un voyage réussi.",
    lien: "Etapes",
  },
  {
    id: 3,
    title: "Profitez de conseils personnalisés pour une expérience inoubliable à l'étranger.",
    description: "Notre équipe est là pour vous aider à chaque moment.",
    lien: "Aide",
  },
]

export default function FeatureDec() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Découvrez comment rejoindre nos programmes d&apos;études et de voyage à l&apos;étranger.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-16">
                <dt className="text-xl/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-gray-700">
                    <CubeIcon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                <dd className="mt-2 text-base/7 text-gray-600">
                  <a href="#" className="font-semibold text-orange-600">
                    <span aria-hidden="true" className="absolute inset-0" />{feature.lien}<span aria-hidden="true">&rarr;</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}