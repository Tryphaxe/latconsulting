'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Page() {
	const router = useRouter()
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = async (e) => {
		e.preventDefault()
		setLoading(true)
		setError('')
		try {
			const res = await axios.post('/api/auth/login', { username, password })
			if (res.status === 200) {
				window.location.href = '/admin/dashboard';
				toast.success(res.data.message)
			}
		} catch (err) {
			const apiError = err.response?.data?.error || 'Erreur de connexion.'
			setError(apiError)
			toast.error(apiError)
		} finally {
			setLoading(false)
		}
	}

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<div className="bg-white w-full min-h-screen flex items-center justify-center">
			<div className="max-w-86 min-w-80 mx-auto px-6 py-7 overflow-hidden bg-white">
				<h2 className="text-2xl uppercase font-medium mb-1">Welcome back</h2>
				<p className="text-gray-600 mb-6 text-sm">Entrez vos informations s&apos;il vous plaît !</p>

				<form autoComplete="off" onSubmit={handleLogin}>
					<p className="text-red-500">{/* message d'erreur ici si besoin */}</p>

					<div className="space-y-2">
						<div>
							<label htmlFor="email" className="text-gray-600 mb-2 block">
								Username
							</label>
							<input
								type="text"
								id="username"
								value={username} onChange={e => setUsername(e.target.value)} required
								className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
								placeholder="user#1234"
							/>
						</div>
					</div>

					<div className="space-y-2 mt-4">
						<div>
							<label htmlFor="password" className="text-gray-600 mb-2 block">
								Password
							</label>
							<div className="relative">
								<input
									type={showPassword ? 'text' : 'password'}
									id="password"
									value={password} onChange={e => setPassword(e.target.value)} required
									className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-teal-500 placeholder-gray-400"
									placeholder="***********"
								/>
								<button
									type="button"
									onClick={togglePasswordVisibility}
									className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600 border-l border-gray-300 bg-white"
								>
									{showPassword ? (
										// Icône "œil barré"
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3l18 18M10.477 10.477a3 3 0 104.243 4.243M14.121 14.121A3 3 0 0112 15a3 3 0 01-3-3c0-.414.085-.807.236-1.168M9.879 9.879A3 3 0 0112 9c1.657 0 3 1.343 3 3 0 .414-.085.807-.236 1.168M12 4.5c-4.638 0-8.573 3.007-9.963 7.178a1.012 1.012 0 000 .644c1.39 4.171 5.325 7.178 9.963 7.178 2.23 0 4.289-.765 5.927-2.043" />
										</svg>
									) : (
										// Icône "œil"
										<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178a1.012 1.012 0 010 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>

					<div className="mt-6">
						<button
							type="submit"
							disabled={loading}
							className="block w-full py-2 text-center text-white bg-black rounded hover:bg-transparent hover:text-black transition font-medium"
						>
							{loading ? 'Connexion...' : 'Se connecter'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}