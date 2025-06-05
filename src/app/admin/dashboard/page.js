"use client"

import { MessageSquareText, Sheet, TextQuote, Users } from 'lucide-react'
import React from 'react'
import List from './List'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page() {
	const [smsCount, setSmsCount] = useState(0);
	const [userCount, setUserCount] = useState(0);
	const [postCount, setPostCount] = useState(0);
	const fetchCount = async () => {
			try {
				const response = await axios.get('/api/sms/count');
				const responses = await axios.get('/api/users/count');
				const responsess = await axios.get('/api/posts/count');
				setSmsCount(response.data || 0);
				setUserCount(responses.data || 0);
				setPostCount(responsess.data || 0);
			} catch (error) {
				setSmsCount(0);
				setUserCount(0);
				setPostCount(0);
			}
		};
		useEffect(() => {
			fetchCount();
		}, []);
	return (
		<div>
			<div className="mb-3 grid grid-cols-1 sm:grid-cols-3 space-x-5 space-y-3 sm:space-y-0">
				<div className='bg-white shadow-sm rounded-lg p-5 flex flex-col items-center'>
					<div className="flex items-center gap-x-2 mb-3">
						<TextQuote size={16} color="orange" />
						<span className="text-orange-400 text-md"> Posts</span>
					</div>
					<div className="text-2xl text-gray-500 font-bold">{postCount}</div>
				</div>
				<div className='bg-white shadow-sm rounded-lg p-5 flex flex-col items-center'>
					<div className="flex items-center gap-x-2 mb-3">
						<MessageSquareText size={16} color="blue" />
						<span className="text-blue-500 text-md"> Messages</span>
					</div>
					<div className="text-2xl text-gray-500 font-bold">{smsCount}</div>
				</div>
				<div className='bg-white shadow-sm rounded-lg p-5 flex flex-col items-center'>
					<div className="flex items-center gap-x-2 mb-3">
						<Users size={16} color="green" />
						<span className="text-green-500 text-md"> Utilisateurs</span>
					</div>
					<div className="text-2xl text-gray-500 font-bold">{userCount}</div>
				</div>
			</div>

			<div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
				<div
					aria-hidden="true"
					className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
						}}
						className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff7215] to-[#9089fc] opacity-30"
					/>
				</div>
				<div
					aria-hidden="true"
					className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
				>
					<div
						style={{
							clipPath:
								'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
						}}
						className="aspect-577/310 w-144.25 bg-linear-to-r from-[#ff7215] to-[#9089fc] opacity-30"
					/>
				</div>
				<div className="flex flex-wrap items-center gap-x-4 gap-y-2">
					<p className="text-sm/6 text-gray-900">
						<strong className="font-semibold">Derniers messages reçus</strong>
					</p>
				</div>
				<div className="flex flex-1 justify-end">
					<button type="button" className="-m-3 p-3 focus-visible:-outline-offset-4">
						<span className="sr-only">Dismiss</span>
						<Sheet className="size-5 text-gray-900" />
					</button>
				</div>
			</div>

			{/* Liste des messages */}
			<List />
		</div>
	)
}