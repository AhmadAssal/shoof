import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HorizontalNavbar } from "../stories/HorizontalNavbar";
import { VerticalNavbar } from "../stories/VerticalNavbar";
const Home: NextPage = () => {
  return (
    <div className="flex flex-row grow  text-white w-screen">
      <VerticalNavbar className="grow-0 shrink-0 basis-36 md:flex md:flex-col hidden"></VerticalNavbar>
      <div className="flex flex-col">
        <HorizontalNavbar></HorizontalNavbar>
      </div>
    </div>
  );
};

export default Home;
