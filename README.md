---

Project Documentation
Overview
This project implements the provided Figma design using Next.js and React.js. It focuses on responsive design and user experience, adhering to modern front-end development practices.

live link:-  https://ms-test-home.vercel.app/


Figma Design
The design is based on the following Figma file, which outlines the UI and components for the project:

Figma Design Link :- https://www.figma.com/design/hSiCim0DOie4YLY4OVJI3t/Machine-Test-%2F%2F-MS?node-id=0-1&amp;t=vLjSTW7kw7YfsWNe-1
Technologies and Tools Used

- Next.js: Server-side rendering and routing framework.
- React.js: For building component-based UI.
- Ant Design: For pre-built UI components.
- Bootstrap: For responsive layout and styling.
- Sass/SCSS: For modular styles.
- React Icons: For using icons.
  Project Structure
  The project is organized in the following folder structure for scalability and maintainability:

--first level--
src
├── .eslintrc.json # Configuration for ESLint to maintain code quality
├── .gitignore # Specifies which files and directories to ignore in Git
├── README.md # Documentation for the project (setup, installation, etc.)
├── next.config.mjs # Next.js configuration file
├── package-lock.json # Dependency lock file
├── package.json # Dependencies and scripts for the project
├── tsconfig.json # TypeScript configuration

--second level--
src
├── app # Contains core application pages
├── assets # Holds fonts and images used in the application
├── components # Reusable components such as header, footer, etc.
├── config # SCSS variables for global fonts, colors, and styles

--third level (under app and assets)--
app
├── fonts # Font files used in the application
├── home # Contains home page components and logic (page.tsx, home-related components)
│ └── page.tsx # The main home page component

assets
├── favicon.ico # Favicon used in the project
├── globals.scss # Global SCSS styles for the application

home
├── layout.tsx  
├── page.module.css # CSS module specific to the home page
├── page.tsx # Home page implementation

components
├── Header.tsx # Header component used across different pages
├── Footer.tsx # Footer component used across different pages

config
├── variables.scss # Contains global variables for fonts, colors, etc.
Explanation of Key Sections
app/home: Contains the components and logic for the home page, including the main entry file page.tsx.
components: Reusable components like the Header and Footer that are used across the site.
assets: Stores static files such as images and fonts, along with global styles in globals.scss.
config/variables.scss: Stores global SCSS variables for managing font sizes, colors, and other styles consistently throughout the application.
Installation and Setup
To run this project locally:

Clone the repository:

- git clone https://github.com/NT009/ms-test-home.git
  Navigate to the project directory:
- cd ms-test-home
  Install the dependencies:
- npm install
  Run the development server:
- npm run dev
  Responsive Design
  The application is fully responsive, using Bootstrap’s grid system and custom media queries. It adjusts to desktop, tablet, and mobile views to provide an optimal user experience across all devices.

Dependencies
The following libraries and tools were used to build the project:

json
Copy code
"antd": "^5.21.4",
"bootstrap": "^5.3.3",
"next": "14.2.15",
"react": "^18",
"react-bootstrap": "^2.10.5",
"react-dom": "^18",
"react-icons": "^5.3.0",
"sass": "^1.79.5",
"scss": "^0.2.4"

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
