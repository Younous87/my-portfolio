// Example usage file - you can integrate this into your layout or main page

"use client";

import PillNav from '@/components/PillNav';

// Example navigation items
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

// Example usage component
export default function NavigationExample() {
  return (
    <PillNav
      logo="/next.svg" // Replace with your actual logo path
      logoAlt="My Portfolio Logo"
      items={navItems}
      activeHref="/" // Set this based on current route
      baseColor="#ffffff"
      pillColor="#000000"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      initialLoadAnimation={true}
      className="custom-nav-class" // Optional custom styling
    />
  );
}

// To integrate into your layout, you would typically add it to your main layout component:
/*
import PillNav from '@/components/PillNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <html lang="en">
      <body>
        <PillNav
          logo="/your-logo.png"
          logoAlt="Your Portfolio"
          items={navItems}
          baseColor="#ffffff"
          pillColor="#000000"
          hoveredPillTextColor="#ffffff"
        />
        {children}
      </body>
    </html>
  );
}
*/
