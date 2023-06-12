import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

export default function Pagination({category,pageLenght}) {
const {pageNumber} = useParams()

const articlesPerPage = 10;
  const totalPages = Math.ceil(pageLenght / articlesPerPage);

  const getPageLinks = () => {
    const links = [];
    for (let i = 1; i <= totalPages; i++) {
      links.push(
        <li key={i}>
          <Link to={category?`/${category}/page/${i}`: `/page/${i}`}  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i}</Link>
        </li>
      );
    }
    return links;
  };

const previous = pageNumber > 1 ? parseInt(pageNumber) - 1 : 1;
const next = pageNumber < totalPages ? parseInt(pageNumber) + 1 : totalPages;

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <Link to={ category ? `/${category}/page/${previous}`:`/page/${previous}`} className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only  text-red-500">Previous</span>
            <svg aria-hidden="true" className="w-5 h-5  text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </Link>
        </li>
       {getPageLinks()} 
       
        <li>
          <Link to = {category?`/${category}/page/${next}`: `/page/${next}`} className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only  text-red-500">Next</span>
            <svg aria-hidden="true" className="w-5 h-5  text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Link>
        </li>
      </ul>
    </nav>


  )
}