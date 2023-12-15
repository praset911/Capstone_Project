import axios from 'axios';

const getNewsData = async () => {
  try {
    const response = await axios.get(
      `https://berita-indo-api-next.vercel.app/api/suara-news/health`
    );
    return response.data.data || [];
  } catch (error) {
    console.error('Error fetching news data:', error);
    return [];
  }
};

export default getNewsData;
