import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const EyeModal = ({ show, handleClose, movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" dark:bg-black w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <img
                  className='h-[385px] w-[400px] rounded-md'
                  src={movie.Poster}
                  alt={movie.Title}
                />

                <div className="mt-1">
                  <p className="text-lg text-gegared font-poppin dark:text-blue-500">
                    {movie.Title}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Year: {movie.Year}
                  </p>
                </div>


                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   imdb: {movie.imdbRating}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Released: {movie.Released}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Runtime: {movie.Runtime}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Genre: {movie.Genre}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Director: {movie.Director}
                  </p>
                </div>

                <div className="">
                  <p className="text-base font-poppin dark:text-white">
                   Plot: {movie.Plot.slice(0, 50)}...
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gegablue px-[150px] lg:px-[184px] py-2 text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EyeModal;
