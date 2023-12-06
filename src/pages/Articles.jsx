import { useState } from "react";
import Carousel from "../components/Fragments/Carousel";
import Dropdown from "../components/Elements/Dropdown";
import Card from "../components/Fragments/Card";
const Articles = () => {
  const [sortOrder, setSortOrder] = useState("date");

  const handleSortChange = (order) => {
    setSortOrder(order);
  };
  return (
    <div className="flex flex-col min-h-screen">
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
            <Dropdown onSortChange={handleSortChange} />
          </div>
        </div>
        <div>
          <Card sortOrder={sortOrder} />
        </div>
      </body>
    </div>
  );
};

export default Articles;
