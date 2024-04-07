import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Search = ({ searchFunction }) => {
  return (
    <div className='my-5'>
      <h3 className='text-3xl m-3'>Enter your Question</h3>
      <div className='p-1 bg-white rounded border border-neutral-700/[.21] w-2/3'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="mx-3 bg-grey" />
        <input onChange={searchFunction} type="text" placeholder='how do i connect the domain?' className="w-3/4 p-2 bg-transparent outline-none" id="" />
      </div>
    </div>
  );
};

export default Search;