"use client";
import { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed z-40 w-full bg-accent-100 xl:bg-transparent">
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0">
        topbar
      </div>
      <div className="container mx-auto flex items-center justify-between px-6">
        <div>
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              width={120}
              height={44}
              priority
              alt=""
            />
          </Link>
        </div>
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary" />
        </div>
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px] xl:hidden z-50"
        >
          <MobileNav setMobileNav={setMobileNav} />
        </motion.div>
        <div className="hidden xl:block">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
