import React from 'react';
import Link from 'next/link';

export default ({children}) => (
  <Link href="/signup">
    <div className="
            w-32 mx-auto cursor-pointer
            mt-12 text-2xl bg-transparent text-gray-900 rounded shadow py-2 px-4 border border-gray-900
            transition duration-500 ease-in-out transform
            hover:bg-gray-900  hover:text-white hover:shadow-lg hover:border-transparent;
            hover:-translate-y-1 hover:scale-110
        ">
      {children}
    </div>
  </Link>
);
