'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { Avatar, Spinner } from 'flowbite-react'
import React from 'react'
import toast from 'react-hot-toast'
import { FileInput, Label } from "flowbite-react"
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import Link from 'next/link';
import { Loader } from 'lucide-react'

export default function page() {
	const [isLoading, setIsLoading] = useState(false);
	const [open, setOpen] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true);
		try {
			const res = await axios.post('/api/users', { username, email, password })
			toast.success('Utilisateur enregistré avec succès !')
			setOpen(false)
			setUsername('')
			setEmail('')
			setPassword('')
			console.log(res.data)
		} catch (err) {
			console.error(err)
			toast.error('Erreur lors de l’enregistrement.')
		} finally {
			setIsLoading(false);
		}
	}

	// Fonction pour récupérer les utilisateurs depuis l'API
	const fetchUsers = async () => {
		setLoading(true);
		try {
			const response = await axios.get('/api/users');
			setUsers(response.data || []);
		} catch (error) {
			toast.error("Erreur API Récupération des utilisateurs");
			setUsers([]);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div>
			{/* Banner */}
			<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					<p className="text-sm/6 text-gray-900">
						<strong className="font-semibold">Utilisateur(s)</strong>
					</p>
					<button
						type="button"
						onClick={() => setOpen(true)}
						className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
					>
						Ajouter<span aria-hidden="true">&rarr;</span>
					</button>
				</div>
			</div>

			{/* Listes des messages */}
			<ul role="list" className="divide-y divide-gray-100">
				{!loading && users.length > 0 ? (
					users.map(user => (
						<li key={user.id} className="flex justify-between gap-x-6 py-5">
							<div className="flex min-w-0 gap-x-4">
								<Avatar placeholderInitials="Username" rounded />
								<div className="min-w-0 flex-auto">
									<p className="text-sm/6 font-semibold text-gray-900">{user.name} - {user.email}</p>
									<p className="mt-1 truncate text-xs/5 text-gray-500">{user.password}</p>
								</div>
							</div>
							<div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
								<p className="mt-1 text-xs/5 text-gray-500">
									{user.createdAt}
								</p>
							</div>
						</li>

					))
				) : !loading ? (
					<li className='flex justify-center items-center my-4'>
						<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
							Aucun utilisateurs enregistrés
						</span>
					</li>
				) : null}
				{loading && (
					<div className="flex justify-center items-center my-4">
						<Loader color="#fc2700" size={24} className={loading ? "animate-spin" : ""} />
					</div>
				)}
			</ul>

			{/* Modal pour ajouter un post */}
			<Dialog open={open} onClose={setOpen} className="relative z-10">
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
				/>

				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 pt-0 text-center sm:items-center sm:p-0">
						<DialogPanel
							transition
							className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
						>
							<form onSubmit={handleSubmit} className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 space-y-3">
								<DialogTitle as="h3" className="text-base font-semibold py-3 text-gray-900 mb-4 sticky top-0 z-20 bg-white/30 backdrop-blur-sm">
									Ajouter un Utilisateur
								</DialogTitle>
								<div>
									<label className="block text-md font-medium text-gray-700 mb-1" htmlFor="username">
										Username
									</label>
									<input
										type="text"
										id="username"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
									/>
								</div>
								<div>
									<label className="block text-md font-medium text-gray-700 mb-1" htmlFor="email">
										Email
									</label>
									<input
										type="text"
										id="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
									/>
								</div>
								<div>
									<label className="block text-md font-medium text-gray-700 mb-1" htmlFor="password">
										Mot de passe
									</label>
									<input
										type="password"
										id="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
									/>
								</div>
								<div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="submit"
										className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-md font-semibold text-white shadow-xs hover:bg-orange-500 sm:ml-3 sm:w-auto"
									>
										{isLoading && <Spinner size="sm" color="warning" className="mr-2" />}
										Valider
									</button>
									<button
										type="button"
										data-autofocus
										onClick={() => {
											setOpen(false);
											setImagePreview(null);
										}}
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
									>
										Annuler
									</button>
								</div>
							</form>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	)
}