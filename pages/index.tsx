/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";
import { hasToken } from "../utils/HasToken";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getTrending } from "../services/tmdb/media";
import { useState } from "react";
import { MediaCard } from "../components/MediaCard";
import { User } from "../types/User";
import { getUser } from "../services/backend/user";
const Home: NextPage = () => {
  const [trendingItems, setTrendingItems] = useState([]);
  const [user, setUser] = useState<User>({
    created_at: "",
    email: "",
    email_verified_at: "",
    id: -1,
    name: "",
    updated_at: "",
    user_id: -1,
    watchlists: [],
  });

  useEffect(() => {
    if (!hasToken()) {
      router.push("/login");
    }
    const getTrendingItems = async () => {
      const response = await getTrending();
      setTrendingItems(response.data.results);
    };
    if (typeof window !== "undefined") {
      setUser(JSON.parse(localStorage.getItem("shoof-user")!));
    }
    const refreshUser = async () => {
      const response = await getUser(
        JSON.parse(localStorage.getItem("shoof-token")!)
      );
      setUser(response);
    };
    refreshUser();
    getTrendingItems();
  }, []);
  const router = useRouter();
  return (
    <div className="flex flex-row text-white w-screen max-w-screen">
      <VerticalNavbar className="lg:flex md:flex-col hidden max-h-screen h-full sticky left-0 top-0 bottom-0"></VerticalNavbar>
      <div className="flex flex-col w-full max-w-full">
        <HorizontalNavbar></HorizontalNavbar>
        <div className="flex flex-row flex-wrap max-w-full w-full ml-12">
          {trendingItems.map((item: any) => (
            <MediaCard
              mediaId={item.id}
              mediaType={item.media_type == "movie" ? "movie" : "show"}
              watchlists={user.watchlists}
              key={item.id}
              className="m-4"
            ></MediaCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
