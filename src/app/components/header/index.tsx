'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import { HeaderLink } from '../Link';
import { SwitchLights } from '../SwitchLights';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Blog', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Newsletter', href: '#' },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="2xl"
      position="static"
      className="py-4 bg-neutral-200 dark:bg-darkBlue container"
    >
      {/* Logo */}
      <NavbarContent justify="start">
        <NavbarBrand className={isMenuOpen ? 'hidden' : 'flex'}>
          <p className="font-semibold text-md">Your Name</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        {/* Links */}
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <HeaderLink href={item.href} className="text-medium font-bold">
              {item.name}
            </HeaderLink>
          </NavbarItem>
        ))}

        {/* Lights */}
        <NavbarItem>
          <SwitchLights />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle icon={isMenuOpen ? <X /> : <Menu />} />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="flex items-center justify-center gap-5 bg-neutral-200 dark:bg-darkBlue">
        {/* Logo */}
        <NavbarBrand className="flex-grow-0">
          <p className="font-semibold text-md">Your Name</p>
        </NavbarBrand>

        {/* Links */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <HeaderLink href={item.href} className="text-medium font-normal">
              {item.name}
            </HeaderLink>
          </NavbarMenuItem>
        ))}

        {/* Lights */}
        <NavbarItem>
          <SwitchLights />
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
