# React Portfolio Website

A minimal, responsive, and professional portfolio website built with React, Vite, and React Router. Features 6 pages with clean plain CSS styling.

## Features

- **6 Pages**: Home, About, Skills, Projects, Blog, Contact
- **React Router v6**: Client-side navigation with active link highlighting
- **Plain CSS**: Clean, maintainable styling without frameworks
- **Responsive Design**: Mobile-first approach with breakpoints
- **Firebase Ready**: Configured for Firebase Hosting deployment

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Navigation with active link highlighting
│   └── Footer.jsx        # Footer with social links
├── pages/
│   ├── Home.jsx          # Landing page with intro
│   ├── About.jsx         # Bio, education, interests
│   ├── Skills.jsx        # Technical skills with progress bars
│   ├── Projects.jsx      # Project showcase cards
│   ├── Blog.jsx          # Blog post cards
│   └── Contact.jsx       # Contact form and info
└── styles/
    ├── global.css        # Global styles and variables
    ├── navbar.css        # Navbar styles
    ├── footer.css        # Footer styles
    ├── home.css          # Home page styles
    ├── about.css         # About page styles
    ├── skills.css        # Skills page styles
    ├── projects.css      # Projects page styles
    ├── blog.css          # Blog page styles
    └── contact.css       # Contact page styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in the browser.

### Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

### Type Check

```bash
npm run typecheck
```

## Firebase Deployment

### Prerequisites

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)

### Setup

1. Update `.firebaserc` with your project ID:
```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

2. Initialize Firebase (if needed):
```bash
firebase init hosting
```
- Select "Use an existing project"
- Set public directory to `dist`
- Configure as single-page app: Yes
- Don't overwrite index.html

### Deploy

1. Build the project:
```bash
npm run build
```

2. Deploy to Firebase:
```bash
firebase deploy
```

Your site will be live at `https://your-project-id.web.app`

## Customization

### Personal Information

Update the following files with your information:

- `src/pages/Home.jsx` - Name, role, and intro text
- `src/pages/About.jsx` - Bio, education, interests
- `src/pages/Skills.jsx` - Technical skills
- `src/pages/Projects.jsx` - Your projects
- `src/pages/Blog.jsx` - Blog posts
- `src/pages/Contact.jsx` - Contact information

### Styling

Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --accent-color: #2563eb;      /* Primary color */
  --accent-hover: #1d4ed8;      /* Hover state */
  --text-primary: #1f2937;      /* Main text */
  --text-secondary: #6b7280;    /* Secondary text */
  /* ... more variables */
}
```

### Social Links

Update social media links in:
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Routing
- **Lucide React** - Icons
- **Plain CSS** - Styling
- **Firebase Hosting** - Deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
