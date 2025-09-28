import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Our services" },
  { href: "/gallery", label: "Gallery" },
];
export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-5 h-20">
      <Image
        src="/logo-black.png"
        alt="logo"
        width={150}
        height={10}
        priority
      />
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {navLinks.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link className="text-primary font-bold" href={href}>
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Button variant="outline">CONTACT US</Button>
    </div>
  );
}
