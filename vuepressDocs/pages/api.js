export const mockFetch = async (...params) => {
  console.log("mockFetch params: ", params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });
};

export const mockFetchFast = async (...params) => {
  console.log("mockFetch params: ", params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 200);
  });
};

export const mockFetchError = async (...params) => {
  console.log("mockFetch params: ", params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Math.random());
    }, 200);
  });
};
