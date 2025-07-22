# Vibe Airdrop

A cross-platform Bluetooth-based file transfer system that allows iPhones or Android phones to send files to a Windows laptop offline using only Bluetooth Low Energy (BLE).

## How to Build and Run

### Mobile App (iOS/Android)

**Dependencies:**
- Xcode (for iOS)
- Android Studio (for Android)
- react-native-ble-plx
- tweetnacl
- buffer
- lz4js
- react-native-qrcode-svg
- react-native-camera

**Setup:**
1. Clone the repository.
2. Open the `mobile` directory in Xcode or Android Studio.
3. Install dependencies: `npm install`
4. Install dependencies: `npm install react-native-ble-plx tweetnacl buffer lz4js react-native-qrcode-svg react-native-camera`
5. Build and run the app on a physical device.

### Windows Receiver

**Dependencies:**
- Visual Studio
- Rust
- btleplug
- rand_core
- x25519-dalek
- aes-gcm
- lz4
- winrt-notification
- native-dialog

**Setup:**
1. Clone the repository.
2. Open the `windows` directory in Visual Studio Code.
3. Add the following to your `Cargo.toml`:
   ```
   btleplug = { version = "0.10", features = ["serde"] }
   rand_core = "0.6"
   x25519-dalek = "1.1"
   aes-gcm = "0.9"
   lz4 = "1.23"
   winrt-notification = "0.5"
   native-dialog = "0.6"
   ```
4. Install Rust dependencies: `cargo build`
5. Run the app: `cargo run`

## Contributor Instructions

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-feature-branch`
6. Submit a pull request.
