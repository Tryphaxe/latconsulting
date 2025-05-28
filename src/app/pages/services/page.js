import React from 'react'
import Animate from "../../../../components/Animate";
import Image from 'next/image';
import Link from 'next/link';
import Aservices from './Aservices';
import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import Call from './Callta';

const features = [
  {
    name: 'Le choix du programme et de l’établissement',
  },
  {
    name: 'La constitution du dossier d’inscription',
  },
  {
    name: 'La demande de visa étudiant',
  },
  {
    name: 'La recherche de logement',
  },
  {
    name: 'L’orientation une fois sur place',
  },
]
const conseils = [
  {
    name: 'Identifier les destinations les plus adaptées à votre profil',
  },
  {
    name: 'Choisir le bon parcours (études, séjour, formation…)',
  },
  {
    name: 'Préparer votre dossier administratif sans stress',
  },
  {
    name: 'Trouver les meilleures options de financement',
  },
]
const feat = [
  {
    name: 'Circuits touristiques :',
    description: 'Visites guidées, découvertes culturelles, expériences locales'
  },
  {
    name: 'Séjours linguistiques :',
    description: 'Immersion dans la langue, cours intensifs, hébergement chez l’habitant'
  },
  {
    name: 'Voyages en groupe ou en solo :',
    description: 'Expériences sur mesure, accompagnement personnalisé, flexibilité totale'
  },
]
const avants = [
  {
    name: 'Support 24/7',
    description:
      'Nous restons à vos côtés avant, pendant et après votre départ.',
  },
  {
    name: 'Accompagnement personnalisé',
    description:
      'Chaque client est unique, chaque projet est sur mesure.',
  },
  {
    name: 'Large choix de destinations',
    description:
      'Plus de 20 pays disponibles pour vos projets.',
  },
  {
    name: 'Partenaires de confiance',
    description:
      'Universités, écoles, agences et structures locales certifiées.',
  },
]

export default function page() {
  return (
    <div>
      {/* HERO */}
      <Animate>
        <div className="relative isolate bg-white overflow-hidden sm:h-[40vh] h-[30vh] mx-0 sm:mx-12 mb-12 rounded-none sm:rounded-md">
          <div className="bg-[url('/img/trav.jpg')] absolute -z-10 bg-cover bg-center h-full w-full" />
          <div className=" h-full w-full bg-[#0000006b] flex items-center justify-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Nos services
            </h1>
          </div>
        </div>
      </Animate>

      <Aservices />

      <div className="overflow-hidden bg-gray-50 py-24 sm:py-32 mt-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange-600">Informations</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Etudes à l'étranger
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Nous travaillons avec un large réseau d’universités et d’écoles partenaires à travers l’Europe, l’Amérique, l’Asie et l’Afrique.
                  Que vous souhaitiez faire une licence, un master ou un programme court, nous vous accompagnons dans :
                </p>
                <dl className="mt-10 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CheckBadgeIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                        {feature.name}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="/img/study.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-gray-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange-600">Informations</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Voyages à l'étranger
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Que ce soit pour le plaisir, la découverte ou l’apprentissage,
                  nous vous proposons des séjours sur mesure dans plusieurs destinations :
                </p>
                <dl className="mt-10 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
                  {feat.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CheckBadgeIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="/img/tourist.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-orange-600">Informations</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Conseils personnalisés
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Chaque projet est unique, c’est pourquoi nous proposons des sessions de conseils personnalisés.
                  Grâce à notre expérience et notre écoute, nous vous aidons à :
                </p>
                <dl className="mt-10 max-w-xl space-y-3 text-base/7 text-gray-600 lg:max-w-none">
                  {conseils.map((conseil) => (
                    <div key={conseil.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CheckBadgeIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-orange-600" />
                        {conseil.name}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="/img/business.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-orange-600">Avantages</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Un suivi clair et personnalisé
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              En choisissant notre entreprise, vous bénéficiez de nombreux avantages :
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {avants.map((avant) => (
                <div key={avant.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-orange-600">
                      <CheckBadgeIcon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {avant.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">{avant.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-[url('/img/voyage.jpg')] bg-cover bg-center h-72">
        <div className="bg-black opacity-80 px-12 flex flex-col justify-center gap-y-3 py-12 h-full">
          <span className='text-5xl font-black text-white'>Explorez le monde avec nous</span>
          <span className="text-gray-300">Contactez-nous dès aujourd&apos;hui pour commencer votre aventure à l&apos;étranger et réaliser vos rêves.</span>
          <div className="flex items-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Inscription
            </Link>
            <Link href="#" className="text-sm/6 font-semibold text-gray-300">
              En savoir plus<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <Call />
    </div>
  )
}