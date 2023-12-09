import { useState } from 'react';
import Carousel from '../components/Fragments/Carousel';
import Dropdown from '../components/Elements/Dropdown';
import Card from '../components/Fragments/Card';

const Articles = () => {
  const [sortField, setSortField] = useState('date');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortFieldChange = (field) => {
    setSortField(field);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div>
      <body className="px-20 py-10">
        <div>
          <h1 className="text-2xl font-bold">Latest Articles</h1>
          <div>
            <Carousel></Carousel>
          </div>
        </div>
        <div className="pb-16">
          <h1 className="font-bold text-2xl">All Articles</h1>
          <div className="absolute right-0 px-20">
            <Dropdown
              onSortFieldChange={handleSortFieldChange}
              onSortOrderChange={handleSortOrderChange}
            />
          </div>
        </div>
        <div>
          <Card sortField={sortField} sortOrder={sortOrder} />
        </div>
      </body>
    </div>
  );
};

export default Articles;
