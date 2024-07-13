"use client";

// Components
import { Switch } from "@/components/ui/switch";

// Next
import Image from "next/image";

export default function Settings() {
  return (
    <section
      id="settings"
      className="relative inset-0 z-0 flex flex-col gap-[30px] h-full min-h-screen p-6"
    >
      <section
        id="top-navigation-bar"
        className="flex justify-between items-center w-full"
      >
        <Image
          src="/icons/ArrowLeftBlack.svg"
          alt="icon-back"
          width={24}
          height={24}
          onClick={() => window.history.back()}
        />
      </section>

      <header>
        <h1 className="font-bold text-xl text-black-primary">
          Settings<span className="font-bold text-primary">.</span>
        </h1>
      </header>

      <section id="list-menus" className="flex flex-col gap-5 w-full">
        <section
          id="card-menu"
          className="flex justify-between items-center bg-white shadow-card-profile p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5 ">
            <Image
              src="/icons/Notification.svg"
              alt="icon-notification"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Notification
            </span>
          </section>

          <Switch />
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white shadow-card-profile p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Inbox.svg"
              alt="icon-inbox"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Change Email
            </span>
          </section>
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white shadow-card-profile p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Password.svg"
              alt="icon-password"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Change Password
            </span>
          </section>
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white shadow-card-profile p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/3-User.svg"
              alt="icon-3-user"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Contact Us
            </span>
          </section>
        </section>

        <section
          id="card-menu"
          className="flex justify-between items-center bg-white shadow-card-profile p-5 rounded-2xl w-full"
        >
          <section id="left-content" className="flex items-center gap-5">
            <Image
              src="/icons/Help.svg"
              alt="icon-help"
              width={24}
              height={24}
            />
            <span className="font-semibold text-sm text-black-primary">
              Help
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}
