"use client";

import { Button } from "./button";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-500">
      <div className="container px-5 m-2 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-gray-900">
          The Reading Retreat
        </a>

        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;