# Prakash Amusements - Event Organizer & Amusement Rides Booking

A modern, fully responsive website for Prakash Amusements - your trusted partner for memorable events and thrilling amusement rides. This website showcases our event planning services, amusement rides booking, and provides an easy way for customers to get in touch.

## Features

- **Modern & Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Loading Screen**: Animated loading screen with "Prakash Amusements" text
- **Event Management Services**: Showcase of professional event planning and management services
- **Amusement Rides Booking**: Interactive booking form for reserving rides
- **Events Gallery**: Visual showcase of past events and celebrations
- **Contact Integration**: EmailJS integration for contact form submissions
- **About Sections**: Detailed information about the business and founder
- **Smooth Animations**: Professional animations and transitions throughout

## Sections

1. **Home/Header**: Hero section with video background and call-to-action buttons
2. **Services**: Event planning, rides rental, and celebration services
3. **About**: About Me and About Business sections with company history
4. **Gallery**: Events gallery showcasing past celebrations
5. **Rides Booking**: Interactive form to book amusement rides
6. **Contact**: Contact form with EmailJS integration and business contact information

## Tech Stack

- React 18.2.0
- React Scroll for smooth scrolling
- EmailJS for contact form submissions
- Font Awesome icons
- Custom CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Prakash_Ammusements
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (optional):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Get your Service ID, Template ID, and Public Key
   - Update the EmailJS configuration in `src/components/Contact.js`:
     ```javascript
     const serviceId = 'YOUR_SERVICE_ID';
     const templateId = 'YOUR_TEMPLATE_ID';
     const publicKey = 'YOUR_PUBLIC_KEY';
     ```

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the built app to GitHub Pages.

## Customization

### Update Contact Information

Edit the contact details in:
- `src/components/Contact.js` - Contact form section
- `src/components/Footer.js` - Footer contact information

### Update Business Information

Edit business details in:
- `src/components/About.js` - About Me and About Business sections
- Update the establishment year/date as needed

### Replace Images

Replace placeholder images in the `public/img/` directory:
- `img1.png` - About section images
- `card1.png`, `card2.png`, `card3.png` - Service cards and gallery images

### Update Services

Modify services in `src/components/Services.js` to match your offerings.

## Business Information

**Business Name**: Prakash Amusements  
**Domain**: Event Organizer & Amusement Rides Booking  
**Established**: 2002

## Contact

- **Email**: info@prakashamusements.com, bookings@prakashamusements.com
- **Phone**: +91 98765 43210, +91 98765 43211
- **Business Hours**: Monday - Sunday: 9:00 AM - 8:00 PM

## License

This project is private and proprietary.

---

Built with ❤️ for Prakash Amusements

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
