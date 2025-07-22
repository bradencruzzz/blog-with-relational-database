// core/mod.rs
// Main application logic and transfer orchestration for Windows receiver

use crate::crypto::decrypt_chunk;
use crate::utils::lz4_decompress;

pub fn start_receiver() {
    // TODO: Implement main application logic
    // 1. Scan for devices
    // 2. On device found, show notification
    // 3. On accept, connect and perform key exchange
    // 4. Receive chunks, decrypt, and decompress
    // 5. Reassemble file and show "Open With" dialog
}

fn process_transfer(encrypted_chunks: Vec<Vec<u8>>, key: &[u8]) -> Result<Vec<u8>, &'static str> {
    let mut decompressed_chunks = Vec::new();
    for chunk in encrypted_chunks {
        let decrypted_chunk = decrypt_chunk(&chunk, key)?;
        let decompressed_chunk = lz4_decompress(&decrypted_chunk).map_err(|_| "Decompression failed")?;
        decompressed_chunks.push(decompressed_chunk);
    }
    Ok(decompressed_chunks.concat())
}
