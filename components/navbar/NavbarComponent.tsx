"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar maxWidth="xl" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-2xl">Gourav Joshi</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="end">
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-lg" color="foreground" href="#home">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-lg" color="foreground" href="#about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-lg" color="foreground" href="#contact">Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-lg" color="foreground" href="#project">Project</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link href="#home">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#contact">Contact</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#project">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link href="#project">Project</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
