// crypto/crypto.js
// Key exchange and encryption logic for mobile app

import nacl from 'tweetnacl';
import { Buffer } from 'buffer';

// Key pair would be generated and stored securely on the device
const generateKeyPair = () => {
  const { publicKey, secretKey } = nacl.box.keyPair();
  return {
    publicKey: Buffer.from(publicKey).toString('base64'),
    secretKey: Buffer.from(secretKey).toString('base64'),
  };
};

export const keyExchange = (receiverPublicKey) => {
  const { secretKey } = generateKeyPair(); // In a real app, you'd load the saved key
  const sharedKey = nacl.box.before(
    Buffer.from(receiverPublicKey, 'base64'),
    Buffer.from(secretKey, 'base64')
  );
  return Buffer.from(sharedKey).toString('base64');
};

export const encryptChunk = (chunk, sharedKey) => {
  const nonce = nacl.randomBytes(nacl.box.nonceLength);
  const encrypted = nacl.secretbox(Buffer.from(chunk), nonce, Buffer.from(sharedKey, 'base64'));

  const fullMessage = new Uint8Array(nonce.length + encrypted.length);
  fullMessage.set(nonce);
  fullMessage.set(encrypted, nonce.length);

  return Buffer.from(fullMessage).toString('base64');
};

export const decryptChunk = (encryptedChunk, sharedKey) => {
  const data = Buffer.from(encryptedChunk, 'base64');
  const nonce = data.slice(0, nacl.box.nonceLength);
  const message = data.slice(nacl.box.nonceLength, data.length);

  const decrypted = nacl.secretbox.open(message, nonce, Buffer.from(sharedKey, 'base64'));
  return decrypted ? Buffer.from(decrypted).toString() : null;
};
