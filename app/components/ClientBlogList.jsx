'use client';
import { useState } from 'react';
import Image from 'next/image';

const ClientBlogList = ({ initialPosts }) => {
  const [page, setPage] = useState(1);
  const limit = 10;
  // 1-1 * 10 = 0;
  // 2-1 * 10 = 10;
  const start = (page - 1) * limit;
  const end = start + limit;
  const limitedPosts = initialPosts.slice(start, end);
  return (
    <div className="p-2">
      <h1 className="text-4xl text-center mb-6 font-bold">Client Posts Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {limitedPosts?.map((el) => (
          <article
            key={el.id}
            className="mb-5 bg-white shadow-md rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <div className="p-4 ">
              {
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
              }
              <h2 className="font-semibold text-xl mb-2">{el?.title}</h2>
              <p className="text-gray-500">{el.body}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        {/* Prev */}
        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="rounded-md bg-gray-200 text-blue-500 font-semibold text-lg p-2 mr-2 cursor-pointer hover:bg-blue-800"
          >
            Prev
          </button>
        )}
        {end < initialPosts.length && (
          <button
            onClick={() => setPage(page + 1)}
            className="rounded-md bg-gray-200 text-blue-500 font-semibold text-lg p-2 cursor-pointer hover:bg-blue-800"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ClientBlogList;
