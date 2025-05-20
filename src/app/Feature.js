import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Card } from "flowbite-react";

const features = [
  {
    id: 1,
    url: '/img/im1.jpg',
    title: "Transformez votre rêve d'études ou de voyages en réalité.",
    description: "Nous offrons des programmes d'études à l'étranger adaptés à vos besoins.",
    textb: "En savoir plus",
  },
  {
    id: 2,
    url: '/img/im2.jpg',
    title: "Voyagez à l'étranger avec nos offres personnalisées et enrichissantes.",
    description: 'Explorez le monde grâce à nos voyages organisés et sur mesure.',
    textb: "Découvrir",
  },
  {
    id: 3,
    url: '/img/im3.jpg',
    title: "Recevez des conseils personnalisés pour votre projet d'études ou de voyage.",
    description: 'Notre équipe vous accompagne à chaque étape de votre aventure.',
    textb: "Contactez-nous",
  },
]

export default function Feature() {
  return (
    <div className="bg-gray-100 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Découvrez nos services pour étudier et voyager à l'étranger.
          </p>
          {/* <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="max-w-md bg-gray-100 shadow-none border-none text-center"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={feature.url}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                  {feature.title}
                </h5>
                <p className="font-normal text-gray-700">
                  {feature.description}
                </p>
                <a href="#" className="font-semibold text-orange-600">
                  <span aria-hidden="true" className="inset-0" /> {feature.textb} <span aria-hidden="true">&rarr;</span>
                </a>
              </Card>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}