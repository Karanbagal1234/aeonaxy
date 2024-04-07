import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Option = ({ name, icon, handleClick }) => {
  return (
    <p className="w-full my-3 p-2 hover:bg-stone-400 flex items-center" onClick={handleClick}>
      <FontAwesomeIcon icon={icon} className="mr-2" />
      {name}
    </p>
  );
}

export default Option;
