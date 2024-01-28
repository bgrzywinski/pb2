"use client";
import Image from "next/image";
import Link from "next/link";
import NavItem from "@/layout/Navigation/NavItem";
import { navigationData } from "@/layout/Navigation/navigationData";
import useSectionObserver from "@/hooks/useSectionObserver";

const Footer = () => {
  const sections = ["#hero", "#offer", "#product", "#contact"];
  const [isActive] = useSectionObserver(sections);
  return (
    <div className="py-8 px-6 bg-black w-full flex justify-between">
      <div>
        {navigationData.map(({ label, to, active }) => (
          <NavItem
            key={label}
            className={isActive(active)}
            label={label}
            to={to}
          />
        ))}
      </div>
      <div>
        <div className="flex gap-6">
          <Link
            href="https://www.instagram.com/panstwo_barmanstwo/?hl=af"
            passHref
            target="_blank"
          >
            <Image
              src="/assets/icons/ig_icon.png"
              alt="ig"
              width={30}
              height={30}
            />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100058561542498"
            passHref
            target="_blank"
          >
            <Image
              src="/assets/icons/fb_icon.png"
              alt="ig"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
