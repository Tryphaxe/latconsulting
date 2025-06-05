'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Card, Spinner } from "flowbite-react";
import { FileInput } from "flowbite-react"
import { Loader, Trash, Clock } from 'lucide-react'
import { formatRelativeDate } from '@/utils/dateFormat';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loa, setLoa] = useState(false);
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // Fonction pour récupérer les posts depuis l'API
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/posts');
      setPosts(response.data || []);
      toast.success("Posts récupérés avec succès");
    } catch (error) {
      toast.error("Erreur API Récupération des Posts");
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setPreview(URL.createObjectURL(file)) // pour aperçu de l'image
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !content) {
      toast.error('Tous les champs sont obligatoires');
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Erreur lors de la création du post');

      toast.success('Post ajouté avec succès !');
      setTitle('');
      setContent('');
      setImage(null);
      setPreview(null);
      setOpen(false); // Fermer le modal
      fetchPosts();   // Recharger les posts
    } catch (err) {
      console.error(err);
      toast.error('Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  const supprimerPost = async (id) => {
    setLoa(true);
    try {
      const res = await axios.delete(`/api/posts/${id}`);
      toast.success("Post supprimé avec succès !");
      fetchPosts();
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la suppression du post");
    } finally {
      setLoa(false);
    }
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm/6 text-gray-900">
            <strong className="font-semibold">Post(s) crée(s)</strong>
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

      {/* Posts */}
      <div className="mx-auto mt-5">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
          {!loading && posts.length > 0 ? (
            posts.map(post => (
              <div className="rounded overflow-hidden shadow-lg flex flex-col" key={post.id}>
                <div className="relative">
                  <div>
                    <Image
                      src={post.src}
                      alt={post.title}
                      width={500}
                      height={300}
                      style={{ backgroundSize: 'cover' , backgroundPosition: 'center' }}
                      className="object-cover w-full h-48"
                    />
                    <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25" />
                  </div>

                  <button onClick={() => supprimerPost(post.id)}
                    className="absolute m-2 top-0 right-0 rounded-lg bg-red-700 p-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-red-300"
                  >
                    {loa ? <Loader color="#fff" size={16} /> : <Trash />}
                  </button>
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
                    <span className="ml-1">{formatRelativeDate(post.createdAt)}</span>
                  </span>
                </div>
              </div>
            ))
          ) : null}
        </dl>
        {!loading && posts.length === 0 ? (
          <div className='flex justify-center items-center my-4'>
            <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
              Aucun post crée !
            </span>
          </div>
        ) : null}
        {loading && (
          <div className="flex justify-center items-center my-4">
            <Loader color="#fc2700" size={24} className={loading ? "animate-spin" : ""} />
          </div>
        )}
      </div>

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
              <form onSubmit={handleSubmit} className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 space-y-4 max-h-[60vh] overflow-y-auto">
                <DialogTitle as="h3" className="text-base font-semibold py-3 text-gray-900 mb-4 sticky top-0 z-20 bg-white/30 backdrop-blur-sm">
                  Ajouter un nouveau post
                </DialogTitle>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
                    Image
                  </label>
                  {preview && (
                    <div style={{ backgroundImage: `url(${preview})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="mb-2 size-40 rounded border border-gray-200" />
                  )}
                  <FileInput id="image" sizing="sm" onChange={handleImageChange} />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1" htmlFor="title">
                    Titre
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
                    placeholder="Titre du post"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700 mb-1" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={3}
                    className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
                    placeholder="Description du post"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    disabled={isLoading}
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
                      setPreview(null);
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