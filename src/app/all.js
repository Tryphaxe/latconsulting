'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Card, Spinner } from "flowbite-react";
import { Loader, Sparkles, Clock } from 'lucide-react'
import Animate from "@/components/Animate";
import { formatRelativeDate } from '@/utils/dateFormat';
import Image from "next/image";

export default function All() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	// Fonction pour récupérer les posts depuis l'API
	const fetchPosts = async () => {
		setLoading(true);
		try {
			const response = await axios.get('/api/posts');
			setPosts(response.data || []);
			toast("Visitez notre catalogue", {
				icon: <Sparkles className="animate-bounce" color="#fc2900" size={16} />,
				duration: 8000,
				style: {
					backgroundColor: '#fff',
					color: '#000',
					borderRadius: '8px',
					padding: '10px',
					fontSize: '16px',
				},
			});
		} catch (error) {
			setPosts([]);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchPosts();
	}, []);
	return (
		<div className="bg-white py-24 sm:py-24" id="catalogue">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Catalogue</h2>
					<p className="mt-2 text-lg/8 text-gray-600">Décrouvez notre catalogue de posts sur les études et les voyages.</p>
				</div>
				<div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-3 sm:mt-5 sm:pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{!loading && posts.length > 0 ? (
						posts.map(post => (
							<Animate key={post.id}>
								<div className="rounded overflow-hidden shadow-lg flex flex-col min-h-[400px]" key={post.id}>
									<div className="relative">
										<div>
											<Image
												src={post.src}
												alt={post.title}
												width={500}
												height={300}
												style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
												className="object-cover w-full h-48"
											/>
											<div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
										</div>
									</div>

									<div className="px-6 py-4 mb-auto">
										<span
											className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out mb-2"
										>
											{post.title}
										</span>
										<p className="text-gray-500 text-sm">
											{post.content}
										</p>
									</div>

									<div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
										<span className="py-1 text-xs text-gray-900 mr-1 flex flex-row items-center">
											<Clock size={14} className="text-gray-500" />
											<span className="ml-1">Ajouté{" "}{formatRelativeDate(post.createdAt)}</span>
										</span>
									</div>
								</div>
							</Animate>
						))
					) : null}
				</div>
				{!loading && posts.length === 0 ? (
					<div className='flex justify-center items-center my-4'>
						<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
							Aucun post pour le moment!
						</span>
					</div>
				) : null}
				{loading && (
					<div className="flex justify-center items-center my-4">
						<Loader color="#fc2700" size={24} className={loading ? "animate-spin" : ""} />
					</div>
				)}
			</div>
		</div>
	)
}