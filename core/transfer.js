// core/transfer.js
// Main application logic and transfer orchestration for mobile app

import { lz4Compress } from '../utils/helpers';
import { encryptChunk } from '../crypto/crypto';

const CHUNK_SIZE = 180;

export const sendFile = async (file, sharedKey) => {
  const chunks = chunkFile(file);
  for (const chunk of chunks) {
    const compressedChunk = lz4Compress(chunk);
    const encryptedChunk = encryptChunk(compressedChunk, sharedKey);
    // TODO: Send encryptedChunk over BLE
  }
};

const chunkFile = (file) => {
  const chunks = [];
  for (let i = 0; i < file.length; i += CHUNK_SIZE) {
    chunks.push(file.slice(i, i + CHUNK_SIZE));
  }
  return chunks;
};
