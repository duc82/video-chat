"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Navigation() {
  const { user } = useUser();
  return (
    <nav className="fixed top-0 h-14 w-full bg-indigo-600 text-white shadow-md border-b border-b-gray-200 z-[999]">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex items-center justify-between mx-auto px-4 h-full">
        <Link href="/">Video Chat App</Link>
        <div className="flex gap-x-5">
          {user ? (
            <>
              <Link href="/profile">Profile</Link>
              <Link href="/api/auth/logout">Logout</Link>
            </>
          ) : (
            <Link href="/api/auth/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
