// utils/helpers.js
// Shared utility functions for mobile app

import lz4 from 'lz4js';

export const lz4Compress = (data) => {
  const compressed = lz4.compress(data);
  return compressed;
};

export const lz4Decompress = (data) => {
  const decompressed = lz4.decompress(data);
  return decompressed;
};

export const logger = (message) => {
  console.log(message);
};
