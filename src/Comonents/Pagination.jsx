import React from 'react';

function Pagination({ listrecent, postsPerPage, setcuurentpage ,npage }) {
  const pages = [];
  let nbp = listrecent.length / postsPerPage
  
  if (npage)
    nbp = npage;

  for (let i = 1; i <= Math.ceil(nbp); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center mt-8 space-x-3">
      {pages.map((page, index) => (
        <button
          key={index}
          className="px-4 py-2 bg-white text-green-700 border border-green-600 rounded-lg shadow-sm 
                     hover:bg-green-600 hover:text-white transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-green-400"

          onClick={()=>setcuurentpage(page)}           
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
