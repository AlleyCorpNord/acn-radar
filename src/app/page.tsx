"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const { push } = useRouter();

  useEffect(() => {
    push("/blips");
  }, []);

  return null;
};

export default Home;
