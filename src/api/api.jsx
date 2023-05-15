const KEY = '34667101-9710bd17cfb75e50a5c2acb1d';
const URL = 'https://pixabay.com/api/';
const PICTURES_ON_PAGE = 12;

export const getPictures = (search, page) => {
  const params = {
    q: search,
    page: page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PICTURES_ON_PAGE,
  };
  return fetch(`${URL}?${params}`);
};
