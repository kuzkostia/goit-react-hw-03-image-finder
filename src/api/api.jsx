const KEY = '34667101-9710bd17cfb75e50a5c2acb1d';
const BASE_URL = 'https://pixabay.com/api';

export const getPictures = (searchText, page) => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  return fetch(`${BASE_URL}?${params}`);
};
