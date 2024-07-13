"use client";

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Next
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({});
  const listMenus = [
    {
      title: "Beranda",
      icon: "/icons/Home.svg",
      href: "/",
    },
    {
      title: "Laporan",
      icon: "/icons/Papper.svg",
      href: "/donation/history",
    },
    {
      title: "Kotak Masuk",
      icon: "/icons/Inbox.svg",
      href: "/inbox",
    },
    {
      title: "Profil",
      icon: "/icons/Profile.svg",
      href: "/profile",
    },
  ];
  const pathname = usePathname();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const user = window.localStorage.getItem("user") ?? {};
      console.log(user, " user");

      setUser(JSON.parse(user));
    }
  }, [token]);

  return (
    <section
      id="profile"
      className="relative inset-0 z-0 flex flex-col items-center gap-[30px] h-full min-h-screen p-6"
    >
      <section
        id="top-navigation-bar"
        className="flex justify-between items-center w-full"
      >
        <h1 className="font-bold text-xl text-black-primary">
          Profil<span className="font-bold text-primary">.</span>
        </h1>

        <Image
          src="/icons/Setting.svg"
          alt="icon-filter"
          width={24}
          height={24}
        />
      </section>

      <section id="profile" className="flex flex-col items-center gap-3">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src={`http://127.0.0.1:8000/storage/${user.avatar}`}
            className="w-full h-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <section id="profile-name" className="flex items-center gap-1">
          <h5 className="font-bold text-lg text-black-primary">{user.name}</h5>
        </section>

        <span
          id="username"
          className="font-normal text-sm text-placeholder -mt-2"
        >
          @{user.username}
        </span>
      </section>

      <section
        id="card-statistics"
        className="flex items-center gap-[30px] bg-white py-5 px-7 rounded-[20px]  shadow-card-profile"
      >
        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">3</h6>

          <p className="text-sm text-black-primary">Submitted</p>
        </section>

        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">1.2k</h6>

          <p className="text-sm text-black-primary">Followers</p>
        </section>

        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">22</h6>

          <p className="text-sm text-black-primary">Following</p>
        </section>
      </section>

      <section id="list-menus" className="flex flex-col gap-5 w-full">
        <section
          id="card-menu"
          className="flex justify-between items-center bg-white p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Profile.svg"
              alt="icon-profile"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              My Account
            </span>
          </section>
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Wallet.svg"
              alt="icon-wallet"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              My Wallet
            </span>
          </section>
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Logout.svg"
              alt="icon-logout"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Logout
            </span>
          </section>
        </section>
      </section>

      <section
        id="bottom-navigation-bar"
        className="fixed inset-x-0 bottom-0 z-10 flex justify-around items-center px-5 py-6 h-fit  bg-white shadow-card-profile"
      >
        {listMenus.map((menu, index) => (
          <a
            key={`menu-${index}`}
            href={menu.href}
            className="flex flex-col items-center gap-1"
          >
            {menu.href === pathname ? (
              <span
                className={`font-bold text-sm${
                  menu.href === pathname ? " text-primary" : " text-white"
                }`}
              >
                {menu.title}
              </span>
            ) : (
              <Image
                src={menu.icon}
                alt={menu.title}
                width={24}
                height={24}
                className={`${menu.href === pathname && "filter-menu-active"}`}
              />
            )}
          </a>
        ))}
      </section>
    </section>
  );
}
