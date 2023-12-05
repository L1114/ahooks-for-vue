export const mockFetch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });
};
