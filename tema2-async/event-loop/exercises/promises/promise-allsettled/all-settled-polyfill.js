if (!Promise.allSettled) {
  const rejectHandler = reason => ({ status: 'rejected', reason });

  const resolveHandler = value => ({ status: 'fulfilled', value });

  Promise.allSettled = function (promises) {
    const convertedPromises = promises.map(
      p => Promise.resolve(p).then(
                      resolveHandler, 
                      rejectHandler)
           );
    return Promise.all(convertedPromises);
  };
}
