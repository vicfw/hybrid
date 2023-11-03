"use client";

import Link from "next/link";

const MainHeader = () => {
  return (
    <header className="relative w-full flex justify-center gap-12 py-4 items-center shadow-md font-bold">
      <Link href="/">Home</Link>
      <Link href="#">About</Link>
      <Link href="#">Privacy</Link>
    </header>
  );
};

export default MainHeader;
