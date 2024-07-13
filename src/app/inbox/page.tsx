"use client";

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Next
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Inbox() {
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

  return (
    <section
      id="inbox"
      className="relative inset-0 z-0 flex flex-col gap-[30px] w-full h-full min-h-screen p-6"
    >
      <section
        id="top-navigation-bar"
        className="flex justify-between items-center"
      >
        <h1 className="font-bold text-xl text-black-primary">
          Kotak Masuk<span className="font-bold text-primary">.</span>
        </h1>

        <Image
          src="/icons/Notification.svg"
          alt="icon-filter"
          width={24}
          height={24}
        />
      </section>

      <section id="list-inbox" className="flex flex-col gap-4 w-full">
        <section
          id="card-inbox"
          className="flex gap-[14px] bg-white p-[10px] rounded-xl shadow-card-profile w-full"
        >
          <Avatar className="w-[46px] h-[46px]">
            <AvatarImage
              src="/images/organization-profile-1.png"
              className="w-full h-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <section id="content" className="flex flex-col gap-1">
            <header className="flex justify-between items-center w-full">
              <section id="left-content" className="flex items-center gap-1">
                <h5 className="font-bold text-sm text-black-primary">
                  Care Organization
                </h5>

                <Image
                  src="/icons/Verifed.svg"
                  alt="icon-filter"
                  width={14}
                  height={14}
                />
              </section>

              <h6
                id="date"
                className="font-semibold text-placeholder text-[13px]"
              >
                Mar 2021
              </h6>
            </header>

            <p className="text-sm text-placeholder">
              Thank you, I hope your help is useful for others, We are always
              open....
            </p>
          </section>
        </section>

        <section
          id="card-inbox"
          className="flex gap-[14px] bg-white p-[10px] rounded-xl shadow-card-profile w-full"
        >
          <Avatar className="w-[46px] h-[46px]">
            <AvatarImage
              src="/images/organization-profile-2.png"
              className="w-full h-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <section id="content" className="flex flex-col gap-1">
            <header className="flex justify-between items-center w-full">
              <section id="left-content" className="flex items-center gap-1">
                <h5 className="font-bold text-sm text-black-primary">
                  Indonesiaku
                </h5>

                <Image
                  src="/icons/Verifed.svg"
                  alt="icon-filter"
                  width={14}
                  height={14}
                />
              </section>

              <h6
                id="date"
                className="font-semibold text-placeholder text-[13px]"
              >
                Mar 2021
              </h6>
            </header>

            <p className="text-sm text-placeholder">
              Thank you, I hope your help is useful for others, We are always
              open....
            </p>
          </section>
        </section>

        <section
          id="card-inbox"
          className="flex gap-[14px] bg-white p-[10px] rounded-xl shadow-card-profile w-full"
        >
          <Avatar className="w-[46px] h-[46px]">
            <AvatarImage
              src="/images/organization-profile-3.png"
              className="w-full h-full"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <section id="content" className="flex flex-col gap-1">
            <header className="flex justify-between items-center w-full">
              <section id="left-content" className="flex items-center gap-1">
                <h5 className="font-bold text-sm text-black-primary">
                  Setia Orphanage
                </h5>

                <Image
                  src="/icons/Verifed.svg"
                  alt="icon-filter"
                  width={14}
                  height={14}
                />
              </section>

              <h6
                id="date"
                className="font-semibold text-placeholder text-[13px]"
              >
                Mar 2021
              </h6>
            </header>

            <p className="text-sm text-placeholder">
              Thank you, I hope your help is useful for others, We are always
              open....
            </p>
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
