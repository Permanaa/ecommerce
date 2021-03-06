import axios from 'axios';

const fetch = ({ ...opt }) => {

  const options = {
    baseURL: "https://asos2.p.rapidapi.com",
    headers: {
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
    },
    ...opt
  };

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.'
        };

        if (typeof err.response === 'undefined') {
          reject(defaultError);
        } else if (typeof err.response.data === 'undefined') {
          reject(defaultError);
        } else {
          reject(err.response.data);
        }
      });
  });
};

export default fetch;
