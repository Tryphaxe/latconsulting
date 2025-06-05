'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Avatar } from 'flowbite-react'
import { Loader } from 'lucide-react';
import { formatRelativeDate } from '@/utils/dateFormat';

export default function Page() {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fonction pour récupérer les messages depuis l'API
	const fetchMessages = async () => {
		setLoading(true);
		try {
			const response = await axios.get('/api/sms');
			setMessages(response.data || []);
			toast.success("Récupération des messages réussie");
		} catch (error) {
			toast.error("Erreur API Récupération des messages");
			setMessages([]);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchMessages();
	}, []);

	return (
		<div>
			{/* Banner */}
			<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					<p className="text-sm/6 text-gray-900">
						<strong className="font-semibold">Message(s) reçu(s)</strong>
					</p>
				</div>
			</div>

			{/* Listes des messages */}
			<ul role="list" className="divide-y divide-gray-100">
				{!loading && messages.length > 0 ? (
					messages.map(message => (
						<li key={message.id} className="flex flex-col sm:flex-row justify-between gap-x-6 py-5">
							<div className="flex min-w-0 gap-x-4">
								<Avatar rounded />
								<div className="min-w-0 flex-auto">
									<p className="text-sm/6 font-semibold text-gray-900">{message.nome}{' '}{message.prenom}</p>
									<p className="mt-1 truncate text-xs/5 text-gray-500">{message.email}</p>
									<p className="mt-1 truncate text-xs/5 text-gray-500">{message.content}</p>
								</div>
							</div>
							<div className="shrink-0 flex flex-col sm:items-end items-start">
								<p className="text-sm/6 text-gray-900">{message.phone}</p>
								<p className="mt-1 text-xs/5 text-gray-500">
									<span>{formatRelativeDate(message.createdAt)}</span>
								</p>
							</div>
						</li>

					))
				) : !loading ? (
					<li className='flex justify-center items-center my-4'>
						<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
							Aucun messages reçus
						</span>
					</li>
				) : null}
				{loading && (
					<div className="flex justify-center items-center my-4">
						<Loader color="#fc2700" size={24} className={loading ? "animate-spin" : ""} />
					</div>
				)}
			</ul>
		</div>
	)
}