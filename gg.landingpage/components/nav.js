import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';


export default function Nav() {
  const router = useRouter();

  return (
    <nav className="p-2 w-full">
      <div className="mx-auto flex items-center justify-between flex-wrap max-w-6xl">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <Link href="/">
            <img
              src="/logo.png"
              width="20px"
              className="cursor-pointer mr-4 inline-block"
            />
          </Link>
          <Link href="/">
            <span className="cursor-pointer sm:inline-block sm:mt-0 text-black hover:text-teal-500 font-semibold text-xl tracking-tight text-black">
              Good Ghosting
            </span>
          </Link>
        </div>
        {router.pathname !== '/signup' ? (
          <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
            <div className="text-base sm:flex-grow">
              <a
                href="#howitworks"
                className="ml-8 mt-4 inline-block sm:mt-0 text-black hover:text-teal-500"
              >
                How it works
              </a>
              <a
                href="#team"
                className="ml-8 mt-4 sm:inline-block sm:mt-0 text-black hover:text-teal-500"
              >
                Team
              </a>
              <a
                href="#faq"
                className="ml-8 mt-4 sm:inline-block sm:mt-0 text-black hover:text-teal-500"
              >
                FAQ
              </a>
            </div>
            <Link href="/signup">
              <div
                className="inline-block text-sm px-4 py-2 leading-none border rounded
              text-white border-white hover:border-transparent hover:bg-white mt-4 sm:mt-0
              cursor-pointer
            transition duration-200 ease-in-out transform
            hover:bg-gray-900  hover:text-white
            hover:-translate-y-1 hover:scale-110"
              >
                Signup
              </div>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
}
