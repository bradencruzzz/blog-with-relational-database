// ui/mod.rs
// Interface components and progress dialogs for Windows receiver

use winrt_notification::{Toast, Sound, Duration};
use native_dialog::{FileDialog, MessageDialog, MessageType};

pub fn show_notification(sender: &str, file_name: &str) -> bool {
    let response = MessageDialog::new()
        .set_type(MessageType::Info)
        .set_title("Vibe Airdrop")
        .set_text(&format!("{} wants to send you a file: {}. Accept?", sender, file_name))
        .show_confirm()
        .unwrap();

    response
}

pub fn show_open_with_dialog(file_path: &str) {
    let path = FileDialog::new()
        .set_location("~/Desktop")
        .set_filename(file_path)
        .show_save_single_file()
        .unwrap();

    match path {
        Some(path) => {
            // TODO: Save the file to the selected path
            println!("File saved to: {:?}", path);
        }
        None => println!("User cancelled"),
    }
}
