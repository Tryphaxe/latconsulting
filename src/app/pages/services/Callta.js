'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'

export default function Call() {
	const [agreed, setAgreed] = useState(false)

	return (
		<div className="bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contactez-nous</h2>
				<p className="mt-2 text-lg/8 text-gray-600">Prenez rendez-vous dès maintenant ou demandez un devis personnalisé gratuitement.</p>
			</div>
			<form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
				<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
					<div>
						<label htmlFor="nom" className="block text-sm/6 font-semibold text-gray-900">
							Nom
						</label>
						<div className="mt-2.5">
							<input
								id="nom"
								name="nom"
								type="text"
								autoComplete="given-name"
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="prenoms" className="block text-sm/6 font-semibold text-gray-900">
							Prénom(s)
						</label>
						<div className="mt-2.5">
							<input
								id="prenoms"
								name="prenoms"
								type="text"
								autoComplete="prenoms"
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
							Email
						</label>
						<div className="mt-2.5">
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
							/>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="telephone" className="block text-sm/6 font-semibold text-gray-900">
							Téléphone
						</label>
						<div className="mt-2.5">
							<div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-orange-600">
								<div className="grid shrink-0 grid-cols-1 focus-within:relative">
									<select
										id="pays"
										name="pays"
										autoComplete="pays"
										aria-label="pays"
										className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
									>
										<option>CIV</option>
										<option>BF</option>
										<option>GHN</option>
									</select>
									<ChevronDownIcon
										aria-hidden="true"
										className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
									/>
								</div>
								<input
									id="telephone"
									name="telephone"
									type="text"
									placeholder="00 00 000 000"
									className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
								/>
							</div>
						</div>
					</div>
					<div className="sm:col-span-2">
						<label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
							Message
						</label>
						<div className="mt-2.5">
							<textarea
								id="message"
								name="message"
								rows={4}
								className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600"
								defaultValue={''}
							/>
						</div>
					</div>
					<Field className="flex gap-x-4 sm:col-span-2">
						<div className="flex h-6 items-center">
							<Switch
								checked={agreed}
								onChange={setAgreed}
								className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 data-checked:bg-orange-600"
							>
								<span className="sr-only">Accepter la politique de confidentialité</span>
								<span
									aria-hidden="true"
									className="size-4 transform rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
								/>
							</Switch>
						</div>
						<Label className="text-sm/6 text-gray-600">
							En sélectionnant cela, vous acceptez notre{' '}
							<a href="#" className="font-semibold text-orange-600">
								politique&nbsp;de&nbsp;confidentialité
							</a>
							.
						</Label>
					</Field>
				</div>
				<div className="mt-10">
					<button
						type="submit"
						className="block w-full rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
					>
						Envoyer
					</button>
				</div>
			</form>
		</div>
	)
}