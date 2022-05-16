import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";
import { hasToken } from "../utils/HasToken";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    if (!hasToken()) {
      router.push("/login");
    }
  }, []);
  const router = useRouter();

  return (
    <div className="flex flex-row grow  text-white w-screen">
      <VerticalNavbar className="grow-0 shrink-0 basis-36 md:flex md:flex-col hidden"></VerticalNavbar>
      <div className="flex flex-col max-w-screen w-screen">
        <HorizontalNavbar></HorizontalNavbar>
      </div>
    </div>
  );
};

export default Home;
