# Todo App

A modern cross-platform Todo app built with **React Native**, **Expo**, and **Convex**.

This project includes real-time todo updates, dark/light theme support, edit, delete, and toggle (mark as done/undone) actions.

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
