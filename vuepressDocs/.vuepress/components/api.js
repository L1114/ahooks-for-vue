export const mockFetch = async (...params) => {
  console.log("mockFetch params: ", params);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });
};
