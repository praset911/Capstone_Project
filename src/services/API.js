import axios from 'axios';

const getHealthNews = async () => {
  try {
    const response = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
    );
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching health news:', error);
    return [];
  }
};

export default getHealthNews;
