import { Link } from '@nextui-org/react';

export const Footer = () => {
  const links = [
    { name: 'Twitter', href: '#' },
    { name: 'Linkedin', href: '#' },
    { name: 'Email', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Figma', href: '#' },
  ];

  return (
    <footer className="w-full h-full py-8">
      <div className="flex flex-col sm:flex-row container items-center sm:items-start gap-4">
        <p>
          <samp>©</samp> 2024
        </p>
        {links.map((link, i) => (
          <Link color="foreground" key={`${link}-${i}`} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};
