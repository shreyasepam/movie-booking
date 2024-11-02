import React from 'react';

const ShowCase: React.FC = () => {
  return (
    <ul className="m-0 mb-4 p-3 list-none flex justify-center bg-neutral-700 rounded text-neutral-400">
      <li className="mx-3">
        <span className="inline-block bg-neutral-600 w-4 h-3 rounded-t relative top-[1px]" />
        <small className="ml-2">N/A</small>
      </li>
      <li className="mx-3">
        <span className="inline-block bg-green-500 w-4 h-3 rounded-t relative top-[1px]" />
        <small className="ml-2">Selected</small>
      </li>
      <li className="mx-3">
        <span className="inline-block bg-neutral-300 w-4 h-3 rounded-t relative top-[1px]" />
        <small className="ml-2">Occupied</small>
      </li>
    </ul>
  );
};

export default ShowCase;