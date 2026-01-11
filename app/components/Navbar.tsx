"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Button from "./common/Button";
import { useRouter } from "next/navigation";
import { NAV } from "../constants";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleSignIn = () => {
    router.push("/dashboard");
  };

  return (
    <nav className="fixed w-full z-50 py-4 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-[32px]">
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={68}
              height={68}
            />

            <div className="hidden md:flex gap-[30px]">
              {NAV.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 py-2 text-sm font-normal transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex gap-[24px]">
            <Button label="SIGN IN" onClick={handleSignIn} />
            <Button label="SIGN UP" onClick={() => {}} />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`bg-black md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="p-4 space-y-2">
          {NAV.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-normal text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 p-4 bg-black">
          <Button label="SIGN IN" onClick={handleSignIn} />
          <Button label="SIGN UP" onClick={() => {}} />
        </div>
      </div>
    </nav>
  );
};

export default App;
