"use client"
import { useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar maxWidth="xl" isBordered>
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
          <Link className="hover:text-[#1e81f2] text-md" color="foreground" href="#home">Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-md" color="foreground" href="#about">About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-md" color="foreground" href="#project">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-[#1e81f2] text-md" color="foreground" href="#contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-5 pt-5">
        <NavbarMenuItem className="w-full flex flex-row justify-center" >
          <Link className="text-2xl font-semibold" color="foreground" href="#home">Home</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full flex flex-row justify-center">
          <Link className="text-2xl font-semibold" color="foreground" href="#project">About</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full flex flex-row justify-center">
          <Link className="text-2xl font-semibold" color="foreground" href="#project">Project</Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="w-full flex flex-row justify-center">
          <Link className="text-2xl font-semibold" color="foreground" href="#contact">Contact</Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
