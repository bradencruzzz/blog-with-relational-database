// utils/mod.rs
// Shared utility functions for Windows receiver

use std::io::Read;

pub fn lz4_decompress(data: &[u8]) -> Result<Vec<u8>, std::io::Error> {
    let mut decoder = lz4::Decoder::new(data)?;
    let mut decompressed = Vec::new();
    decoder.read_to_end(&mut decompressed)?;
    Ok(decompressed)
}

pub fn logger(message: &str) {
    println!("{}", message);
}
