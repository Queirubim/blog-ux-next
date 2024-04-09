import { Link } from '@nextui-org/react';

export const Footer = () => {
  const links = [
    { name: 'Twitter', href: '#' },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/allan-soares-8139b3198/',
    },
    { name: 'Email', href: '#' },
    { name: 'GitHub', href: 'https://github.com/Queirubim' },
    {
      name: 'Figma',
      href: 'https://www.figma.com/community/file/1235152009438565697',
    },
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
