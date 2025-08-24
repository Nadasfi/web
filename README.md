# Nadas.fi Landing Page

Modern, responsive landing page for Nadas.fi - a Hyperliquid DeFi automation platform. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Sleek, professional design with gradient accents and glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Performance**: Optimized for fast loading and smooth interactions
- **SEO Ready**: Built with Next.js 14 App Router and proper meta tags

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nadas-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
nadas-landing-page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero section with CTA
│   ├── FeaturesSection.tsx # Features showcase
│   └── Footer.tsx         # Footer with links
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The current theme uses:
- Primary: Cyan (#06b6d4)
- Secondary: Teal (#14b8a6)
- Background: Black to gray gradients

### Content

Update the content in the component files:
- `HeroSection.tsx`: Main headline, description, and CTA buttons
- `FeaturesSection.tsx`: Feature list and descriptions
- `Header.tsx`: Navigation links and branding
- `Footer.tsx`: Footer links and company information

### Styling

Modify the global styles in `app/globals.css` and component-specific styles using Tailwind CSS classes.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## Performance

- **Lighthouse Score**: Optimized for high performance scores
- **Image Optimization**: Next.js built-in image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO**: Server-side rendering and proper meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- Website: [nadas.fi](https://nadas.fi)
- Email: contact@nadas.fi
- Twitter: [@nadasfi](https://twitter.com/nadas_fi)
- GitHub: [nadasfi](https://github.com/nadasfi)

## Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Animations powered by Framer Motion
- Design inspired by modern DeFi platforms
