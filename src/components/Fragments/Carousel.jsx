// Carousel.jsx
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../carousel.css';
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import getHealthNews from '../../services/API';

const Carousel = () => {
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

  const displayedArticles = articles.slice(0, 5);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        mousewheel={{
          invert: false,
          forceToAxis: true,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Mousewheel, Navigation]}
        allowTouchMove={false}
        className="mySwiper"
      >
        {displayedArticles.map((article, index) => (
          <SwiperSlide key={index}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <img
                src={
                  article.urlToImage ||
                  '/images/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg'
                }
                alt={article.title}
                onError={() => handleImageError(index)}
              />
            </a>

            <p className="absolute">{article.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
