"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import router from "next/router";
import api from "@/lib/axios";
// import { Container } from './styles';

const Content: React.FC = () => {
  const { data, status } = useSession();
  const [apiUser, setApiUser] = useState<{ id: string } | null>(null);

  const fetchUser = async (id: string) => {
    if (!id) return;
    try {
      const res = await api.get(`/discord/user/discord/${id}`);
      console.log(res);
      setApiUser(res?.data?.data);
    } catch (error) {}
  };

  useEffect(() => {
    const user: any = data;
    if (status === "loading") return;
    fetchUser(user?.id as never);
  }, [data, status]);

  return (
    <div className="mt-24 w-full h-full my-auto flex flex-col justify-center items-center">
      <div className="max-w-[1240px] mx-auto text-center mt-14">
        <div className="flex items-center gap-x-1 max-w-[350px] mx-auto">
          <Image
            className="z-20 relative mx-auto mb-5"
            src="/img/logo-triad.svg"
            width={150}
            height={60}
            alt="logo"
          />
          <span className="text-white">X</span>
          <Image
            className="z-20 relative mx-auto mb-5"
            src="/svg/forma.svg"
            width={150}
            height={60}
            alt="logo"
          />
        </div>

        <h2 className="text-4xl text-white font-semibold text-center">
          Congratulations!
        </h2>
        <h3 className="text-white mx-auto mt-5">
          You just got{" "}
          <span className="text-blue-500 font-medium mr-2">500 $tTRIAD</span>
          Make sure to join our Discord to claim your Airdrop.
        </h3>

        {status === "unauthenticated" ? (
          <button
            onClick={() => {
              signIn("discord", { redirectTo: "/sez" });
            }}
            className="h-12 rounded-full px-5 bg-white text-blue-600 font-bold mt-12 mx-auto"
          >
            Sign in with Discord
          </button>
        ) : (
          <div className="flex flex-col justify-center items-center  mt-12 ">
            <div className="flex flex-col items-center">
              {data?.user?.image && (
                <Image
                  className="rounded-full size-14 mr-1"
                  width={30}
                  height={30}
                  src={data?.user?.image}
                  alt={""}
                />
              )}
              <span className="text-white font-medium text-lg mb-3 mt-1">
                {data?.user?.name}
              </span>
            </div>
            {!apiUser?.id ? (
              <button
                onClick={() => {
                  // signOut();
                  router.push("https://discord.gg/triadfi");
                }}
                className="h-12 rounded-full px-5 bg-transparent border-2 bg-blue-600 text-white font-bold mx-auto"
              >
                Join Discord Server
              </button>
            ) : (
              <div className="flex flex-col">
                <span className="text-base text-blue-600 font-semibold">
                  Already registered !
                </span>
                <button onClick={() =>  signOut()} className="text-red-500 text-sm mt-3">Logout</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
