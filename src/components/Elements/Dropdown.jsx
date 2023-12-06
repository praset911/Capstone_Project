import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ onSortChange }) => {
  const [isActive, setIsActive] = useState('date');
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState('date');

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleSortClick = (order) => {
    setIsActive(order);
    setSortOrder(order);
    setIsOpen(false);
    onSortChange(order);
  };

  return (
    <div className="relative">
      <div
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-black border border-black rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
      >
        {`Sort By ${sortOrder.charAt(0).toUpperCase() + sortOrder.slice(1)}`}
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </div>

      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? '' : 'hidden'
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className={`${
                isActive === 'date'
                  ? 'hidden'
                  : 'block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
              }`}
              onClick={() => handleSortClick('date')}
            >
              Sort By Date
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                isActive === 'title'
                  ? 'hidden'
                  : 'block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
              }`}
              onClick={() => handleSortClick('title')}
            >
              Sort By Title
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`${
                isActive === 'source'
                  ? 'hidden'
                  : 'block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
              }`}
              onClick={() => handleSortClick('source')}
            >
              Sort By Source
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
