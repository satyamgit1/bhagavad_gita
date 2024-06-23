## Bhagavad Gita Website Documentation

### Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup and Installation](#setup-and-installation)
5. [Authentication](#authentication)
6. [API Integration](#api-integration)
7. [Themes](#themes)
8. [Audio Playback](#audio-playback)
9. [GitaGPT](#gitagpt)
10. [Image Storage](#image-storage)
11. [Contact and About Pages](#contact-and-about-pages)
12. [Deployment](#deployment)
13. [Contributing](#contributing)
14. [License](#license)

### Introduction
The Bhagavad Gita website is a dynamic and interactive platform that allows users to explore the teachings of the Bhagavad Gita. Built with Next.js and Tailwind CSS, the website offers a range of features including secure authentication, customizable themes, audio playback, and an AI-powered Q&A system. The goal is to make the profound wisdom of the Bhagavad Gita more accessible and engaging for users.

### Features
- **Secure Authentication:** Supports login via GitHub, Google, and LinkedIn using Auth0.
- **Customizable Themes:** Offers various themes such as Light, Dark, Cyberpunk, Halloween, Valentine, Winter, Aqua, Retro, Luxury, Black, and Dim.
- **Interactive Scripture Access:** Allows users to browse chapters and verses with Sanskrit headings and Hindi translations.
- **Audio Playback:** Enables users to listen to verses.
- **GitaGPT:** Provides answers to life-related questions from Shree Krishna.
- **Cloud Image Storage:** Utilizes ImageKit.io for image storage.
- **Contact and About Pages:** Includes information about the project and ways to get in touch.

### Technologies Used
- **Front-end:** Next.js, Tailwind CSS
- **Back-end:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Auth0
- **Audio Integration:** HTML5 Audio API
- **AI Integration:** Custom implementation (GitaGPT)
- **Image Storage:** ImageKit.io

### Setup and Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/satyamgit1/bhagavad_gita.git
   cd bhagavad_gita
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following variables:
   ```plaintext
   MONGODB_URI=<your_mongodb_uri>
   AUTH0_DOMAIN=<your_auth0_domain>
   AUTH0_CLIENT_ID=<your_auth0_client_id>
   AUTH0_CLIENT_SECRET=<your_auth0_client_secret>
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=<your_imagekit_url_endpoint>
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Authentication
Authentication is implemented using Auth0. Users can log in using their GitHub, Google, or LinkedIn accounts. The authentication flow is handled by Auth0 and integrated into the application using the `next-auth` library.

### API Integration
The website uses a custom REST API to fetch chapter and verse data. The API endpoints are defined in the `api` directory and are consumed by the front-end using `axios`.

### Themes
Users can choose from a variety of themes to customize their experience. The themes are implemented using Tailwind CSS and can be selected from the user settings.

### Audio Playback
The website includes audio playback functionality for each verse. The audio files are stored in the cloud and played using the HTML5 Audio API.

### GitaGPT
GitaGPT is an AI-powered system that answers life-related questions based on the teachings of the Bhagavad Gita. It uses a custom implementation to provide meaningful responses.

### Image Storage
Images are stored using ImageKit.io, which provides efficient cloud storage and management. The integration is handled using the ImageKit SDK.

### Contact and About Pages
The website includes `Contact Us` and `About Us` pages. These pages provide information about the project and ways for users to get in touch with the team.

### Deployment
The website is deployed on Vercel, which provides seamless deployment for Next.js applications. To deploy the project:
1. Push the code to a GitHub repository.
2. Link the repository to Vercel.
3. Configure the environment variables in Vercel settings.
4. Deploy the project.

### Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to submit a pull request. Please ensure your code follows the project's coding standards.

### License
This project is licensed under the MIT License. See the `LICENSE` file for more details.


