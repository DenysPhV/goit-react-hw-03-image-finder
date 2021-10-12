import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '22979201-d3b88ee555cfd640fb3d2f529';

const fetchData = async ({
  searchQuery = '',
  currentPage = 1,
  perPage = 12,
}) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
  );
  return response.data.hits;
};

const getImagesApi = { fetchData };
export default getImagesApi;
