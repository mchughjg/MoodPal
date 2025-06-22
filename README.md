# MoodPal

Hello! Welcome to my project, MoodPal.

## Overview

MoodPal is a mobile application designed to help users track their daily moods and reflect on their emotional well-being over time. By providing a user-friendly interface for entering and reviewing mood data, MoodPal aims to encourage mindfulness and greater emotional awareness. Developed as part of the HackForGood UGR 2024 event, this project showcases an intuitive approach to personal mental wellness tracking.

## Features

MoodPal offers a comprehensive set of functionalities to support emotional well-being:

* **Daily Mood Logging:** Users can log their mood at any time of day with a few simple taps. Each entry allows the user to select their current mood from a set of visually representative mood icons (e.g., content, anxious, calm, sad, excited, angry, stressed) and add optional notes for context, including reasons, associated activities, and hours of sleep.
* **Mood History & Trends:** Users can view a history of their mood entries, displayed both as a timeline and a statistical overview. This includes visualizations through interactive charts (weekly and monthly) that help users identify patterns and trends in their emotional state over time.
* **Mood Analysis:** The app provides basic analytics, such as mood trends and the most frequent moods, to offer insights into the user’s emotional cycles.
* **Intuitive Navigation:** Seamless navigation between key sections like the Dashboard, Mood Entry, Mood History, Settings, Sign In, Sign Up, and Support, ensuring a smooth user experience.
* **User Settings:** Includes basic privacy and security toggle options, along with feedback and contact functionalities.

## How It Works

MoodPal utilizes a simple yet effective interface to facilitate easy navigation and interaction:

* **Dashboard:** Upon opening the app, the user is greeted by the Dashboard, which displays options to log a new mood or view their mood history, offering a quick overview of their options.
* **Mood Entry:** When logging a mood, the user selects from visually representative mood icons. Each selection can be accompanied by a textual note for additional details and context.
* **History and Analytics:** The Mood History section visualizes past entries, allowing users to scroll through their mood data or view graphical representations of mood trends using dynamic charts.

## Technical Details & Implementation

This section provides an overview of the technologies and architecture that power MoodPal.

### Technologies Used

* **Mobile Development:**
    * **React Native:** Core framework for building the cross-platform mobile application, allowing for a single codebase for iOS and Android.
    * **Expo:** Platform and framework for streamlined React Native development, facilitating build processes, asset management, and device deployment.
* **Navigation:**
    * `@react-navigation/native` & `@react-navigation/native-stack`: Utilized for robust and customizable navigation flow throughout the application, managing screen transitions and history stacks.
* **State Management:**
    * **React `useState` Hook:** Employed for efficient management of local component state, such as selected moods, user inputs, and UI toggles.
* **Charting & Data Visualization:**
    * `react-native-chart-kit`: For rendering interactive charts to visually represent mood history and trends (e.g., LineChart for weekly/monthly data).
    * `chart.js` & `react-chartjs-2`: Underlying charting libraries providing the graphical capabilities.
* **UI Components & Styling:**
    * **React Native core components:** Fundamental UI building blocks like `View`, `Text`, `Image`, `TouchableOpacity`, `TextInput`, `Switch`, `Button`, `ScrollView`, and `StyleSheet` for layout and styling.
    * `@chakra-ui/react`, `@emotion/react`, `@emotion/styled`, `framer-motion`: Indicate the integration of modern UI component libraries and styling tools for enhanced design flexibility and animations.
* **Other Libraries:**
    * `react-native-safe-area-context`, `react-native-screens`, `react-native-svg`: Essential dependencies supporting robust React Native app functionality and rendering.

### Project Structure
