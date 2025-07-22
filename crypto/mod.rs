// crypto/mod.rs
// Key exchange and encryption logic for Windows receiver

use rand_core::OsRng;
use x25519_dalek::{EphemeralSecret, PublicKey};
use aes_gcm::{Aes256Gcm, Key, Nonce};
use aes_gcm::aead::{Aead, NewAead};

pub fn key_exchange(remote_public_key: PublicKey) -> (PublicKey, [u8; 32]) {
    let secret = EphemeralSecret::new(&mut OsRng);
    let public = PublicKey::from(&secret);
    let shared_secret = secret.diffie_hellman(&remote_public_key);
    (public, shared_secret.to_bytes())
}

pub fn decrypt_chunk(encrypted_chunk: &[u8], key: &[u8]) -> Result<Vec<u8>, &'static str> {
    let key = Key::from_slice(key);
    let cipher = Aes256Gcm::new(key);

    let (nonce_bytes, ciphertext) = encrypted_chunk.split_at(12);
    let nonce = Nonce::from_slice(nonce_bytes);

    cipher.decrypt(nonce, ciphertext)
        .map_err(|_| "Decryption failed")
}
