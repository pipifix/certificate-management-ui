export function use<T>(promise: Promise<T>): T {
  const cache = promise as Promise<T> & {
    status?: 'pending' | 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
  };

  if (!cache.status) {
    cache.status = 'pending';
    cache.value = undefined;
    cache.reason = undefined;

    promise.then(
      (value) => {
        cache.status = 'fulfilled';
        cache.value = value;
      },
      (reason) => {
        cache.status = 'rejected';
        cache.reason = reason;
      }
    );
  }

  switch (cache.status) {
    case 'fulfilled':
      return cache.value as T;
    case 'rejected':
      throw cache.reason;
    case 'pending':
      throw promise;
    default:
      throw promise;
  }
}