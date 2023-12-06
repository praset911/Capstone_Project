import { useState, useEffect } from 'react';
import getHealthNews from '../../services/API';

const formatDate = (isoDate) => {
  const dateObj = new Date(isoDate);
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
    hour12: false,
  };
  return dateObj.toLocaleDateString('id-ID', options);
};
// eslint-disable-next-line react/prop-types
const Card = ({ sortOrder }) => {
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6);
  const [loadMore, setLoadMore] = useState(true);

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
      '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg';
    setArticles(newArticles);
  };

  const filteredArticles = articles.filter(
    (article) => article.source.name !== '[Removed]'
  );
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === 'date') {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    } else if (sortOrder === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortOrder === 'source') {
      return a.source.name.localeCompare(b.source.name);
    }
    return 0;
  });

  const handleLoadMore = () => {
    const nextVisibleArticles = visibleArticles + 6;

    setVisibleArticles(nextVisibleArticles);

    if (nextVisibleArticles >= sortedArticles.length) {
      setVisibleArticles(sortedArticles.length);
      setLoadMore(false);
    }
  };

  const displayArticles = sortedArticles.slice(0, visibleArticles);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {displayArticles.map((article, index) => (
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
            <div className=" h-52">
              <p className="font-bold">{article.title}</p>
              <p>
                {article.description
                  ? article.description.substring(0, 100) + '...'
                  : ''}
              </p>
            </div>
            <div className="flex justify-between px-1">
              <div className="row">
                <p>Source : {article.source.name}</p>
                <p>{formatDate(article.publishedAt)}</p>
              </div>
              <a href={article.url} target="_blank" rel="noreferrer">
                <button className="bg-cyan-900 px-3 py-2 text-white font-semibold rounded text-sm">
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleArticles <= sortedArticles.length && (
        <>
          <p className="flex justify-center pt-10 pb-3">
            Show: {visibleArticles} of {sortedArticles.length} articles
          </p>
          {loadMore && (
            <div className="flex justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-cyan-900 px-4 py-2 text-white rounded"
              >
                Load More Pages
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Card;
