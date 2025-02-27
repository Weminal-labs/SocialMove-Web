"use client";
import { useState } from "react";
import Link from "next/link";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";

// Import SVG dưới dạng React component
import MenuIcon from "../../assets/icons/menu.svg";
import { ModeToggle } from "@/components/ui/toggle-theme";

const menuItems = [
  { label: "About", path: "#" },
  { label: "Actions", path: "/action" },
  { label: "Updates", path: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black z-10">
      <div className="px-4">
        <div className="container">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <Link href={"/"}>
                <span className="flex items-center relative">
                  <p className="text-3xl lg:text-4xl font-bold bg-logoGradientDark bg-clip-text text-transparent">
                  SocialMove
                  </p>
                </span>
              </Link>
            </div>
            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon className="text-white" />
            </div>
            <nav
              className={`${
                isOpen ? "flex" : "hidden"
              } lg:flex flex-col lg:flex-row gap-6 items-center justify-center absolute top-14 left-0 right-0 bg-black lg:static lg:bg-transparent z-10 p-4 lg:p-0`}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="text-[#737373] font-semibold hover:text-opacity-100 transition py-2 lg:py-0 block lg:inline-block"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={"/create"}
                className="bg-[#e9e9e9] text-black py-2 px-4 rounded-lg block lg:inline-block"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
