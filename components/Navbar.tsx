'use client";'

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold tracking-tight">
        Emerson<span className="text-blue-600">.</span>M
      </h1>
      <div className="flex gap-6 text-lg">
        <Link className="hover:text-blue-600 transition" href="/">Home</Link>
        <Link className="hover:text-blue-600 transition" href="/about">About</Link>
        <Link className="hover:text-blue-600 transition" href="/projects">Projects</Link>
        <Link className="hover:text-blue-600 transition" href="/contact">Contact</Link>
        {/* <ThemeToggle /> */}
        </div>
    </nav>
  );
}