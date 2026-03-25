# Todo App

A modern cross-platform Todo app built with **React Native**, **Expo**, and **Convex**.

This project includes real-time todo updates, dark/light theme support, edit, delete, and toggle (mark as done/undone) actions.

## Screenshots
<!-- Dark -->
<p>
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/89e0f24a-24a7-4c35-85e5-fd0b85bf1652" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/81e0e29d-621d-42e6-8b7d-76019f287eb7" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/a6c2d4a8-2f8c-43d5-b8b6-287df9a97567" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/d79f03f8-9b2c-46c9-ac01-1831a80a06ac" />
<p>
  
<!-- Light -->
<p>
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/ce26d35c-9b14-4e17-8348-b27f1c411039" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/f8a34d92-2f9f-4670-bb2b-9f3f28503612" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/304d79f9-8ed9-4754-8dcc-653fd2b22ffc" />
  <img width="212" height="458" alt="image" src="https://github.com/user-attachments/assets/4e1bc75b-f6bc-4468-b113-e1125c07597e" />
<p>


## Features

- Add new todos
- Mark todos as completed or active
- Edit existing todos
- Delete individual todos with confirmation
- Delete all todos from settings
- Dark mode / light mode with persisted preference
- Statistics screen for total, completed, and active todos

## Tech Stack

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**
- **Convex**
- **Async Storage**
- **Expo Linear Gradient**
- **Expo Vector Icons**

## Project Structure

```bash
app/
  (tabs)/
    index.tsx
    settings.tsx
    _layout.tsx
  _layout.tsx

components/
hooks/
assets/
convex/
types/
````

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd todo_app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Convex

Install Convex if needed:

```bash
npm install convex
```

Then start Convex development:

```bash
npx convex dev
```

This will connect your app to a Convex project and generate the required local environment config for development. 

### 4. Start the Expo app

```bash
npx expo start
```

You can then run the app in one of these ways:

* Scan the QR code with **Expo Go** (app)
* Press **i** for iOS simulator
* Press **a** for Android emulator
* Press **w** for web, if enabled

## Available Functionality

### Todos Screen

On the main screen, users can:

* View all todos
* Toggle completion state
* Edit todo text
* Save or cancel edits
* Delete a todo with confirmation

### Settings Screen

The settings tab includes:

* Todo statistics
* Theme preference switching
* Danger zone actions like deleting all todos

## Theme Support

This app supports both **light mode** and **dark mode**.

The selected theme is persisted locally, so the app remembers the user’s preference even after closing and reopening it. This behavior is implemented through a custom `useTheme` hook and Async Storage. 

## Real-Time Backend

This project uses **Convex** as the backend.

Convex handles:

* querying todos
* adding todos
* updating todos
* toggling completion
* deleting a single todo
* clearing all todos

Because Convex is real-time, updates appear immediately without manual refresh.  

## Scripts

Common commands:

```bash
npm install
npx convex dev
npx expo start
```

## Notes

* Make sure your phone and laptop are on the same Wi-Fi network when testing with Expo Go. 
* If you are using simulators:

  * iOS usually requires Xcode on macOS
  * Android emulator typically uses Android Studio 
* This project uses TypeScript and a modular structure for easier scaling.
