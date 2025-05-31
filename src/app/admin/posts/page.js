'use client'

import { useState, React } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Card } from "flowbite-react";
import Link from 'next/link';
import { Sheet } from 'lucide-react';
import { FileInput, Label } from "flowbite-react"

export default function page() {
  const [open, setOpen] = useState(false)

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
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
          <Card
            key={1}
            className="max-w-md bg-gray-100 shadow-none border-none"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="/img/img5.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              Etudier au canada
            </h5>
            <p className="font-normal text-gray-700">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="font-semibold text-orange-600">
              <span aria-hidden="true" className="inset-0" /> voir plus <span aria-hidden="true">&rarr;</span>
            </Link>
          </Card>
        </dl>
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
              <form className="bg-white px-4 pb-4 sm:p-6 sm:pb-4 space-y-4 max-h-[60vh] overflow-y-auto">
                <DialogTitle as="h3" className="text-base font-semibold py-3 text-gray-900 mb-4 sticky top-0 z-20 bg-white/30 backdrop-blur-sm">
                  Ajouter un nouveau post
                </DialogTitle>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="image">
                    Image
                  </label>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Aperçu"
                      className="mb-2 max-h-48 rounded border border-gray-200 object-contain"
                    />
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
                    name="title"
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
                    name="description"
                    rows={3}
                    className="block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-md"
                    placeholder="Description du post"
                  />
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-orange-600 px-3 py-2 text-md font-semibold text-white shadow-xs hover:bg-orange-500 sm:ml-3 sm:w-auto"
                  >
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
