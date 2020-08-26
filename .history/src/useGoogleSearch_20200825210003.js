import {useState, useEffect} from 'react';
import API_KEY from './keys';

const CONTEXT_KEY = 'c90302f32871e15c3';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  //data layer
  useEffect(() => {
    const fetchData = async() => {
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}`
        )
    }

  }, [term]);
  return data;
};

export default useGoogleSearch;
