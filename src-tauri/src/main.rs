#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use std::process::Command;

#[tauri::command]
fn say(message: &str) -> String {
  Command::new("say")
    .args(&[message])
    .spawn()
    .expect("failed to start `ls`");

   format!("Hello, {}!",message)
}

fn main() {  
  let context = tauri::generate_context!();
  tauri::Builder::default()
    .menu(tauri::Menu::os_default(&context.package_info().name))
    .invoke_handler(tauri::generate_handler![say])
    .run(context)
    .expect("error while running tauri application");
}
