import { useState, useEffect } from 'react';
import getHealthNews from '../../services/API';

// eslint-disable-next-line react/prop-types
const Card = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const healthNews = await getHealthNews();
      setArticles(healthNews);
    };

    fetchArticles();
  }, []);

  const handleImageError = (index) => {
    const newArticles = [...articles];
    newArticles[index].urlToImage =
      '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'; // Ganti dengan path gambar lokal yang diinginkan
    setArticles(newArticles);
  };

  const displayedArticles = articles.slice(0, 6);

  return (
    <>
      {displayedArticles.map((article, index) => (
        <div key={index} className="px-4 py-4 rounded shadow-xl">
          <div>
            <img
              src={
                article.urlToImage ||
                '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'
              }
              alt={article.title}
              className="object-cover object-center h-60 w-full"
              onError={() => handleImageError(index)}
            />
          </div>
          <div className=" h-48">
            <p className="font-bold">{article.title.substring(0, 90)}...</p>
            <p>{article.description.substring(0, 180)}...</p>
          </div>
          <div className="px-1">
            <a href={article.url} target="_blank" rel="noreferrer">
              <button className="bg-cyan-900 px-3 py-2 text-white font-semibold rounded">
                Read More
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
