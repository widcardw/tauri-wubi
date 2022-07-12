#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;
fn main() {
  tauri::Builder::default()
    .setup(|app| {
      let main_window = app.get_window("main").unwrap();
      let kbd_window = app.get_window("kbd").unwrap();
      // 当主窗口关闭时键盘窗口也同时关闭
      main_window.on_window_event(move |event| {
        match event {
          tauri::WindowEvent::CloseRequested {..} => {
            kbd_window.close().unwrap();
          },
          _ => {}
        };
      });
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
