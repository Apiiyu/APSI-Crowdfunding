"use client";

// Components
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

// Embla Carousel
import Autoplay from "embla-carousel-autoplay";

// Next
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const listBanners = ["/images/banner-1.png"];
  const listMenus = [
    {
      title: "Beranda",
      icon: "icons/Home.svg",
      href: "/",
    },
    {
      title: "Laporan",
      icon: "icons/Papper.svg",
      href: "/report",
    },
    {
      title: "Donasi",
      icon: "icons/Donate.svg",
      href: "/donation",
    },
    {
      title: "Profil",
      icon: "icons/Profile.svg",
      href: "/profile",
    },
  ];
  const pathname = usePathname();

  return (
    <section
      id="home"
      className="relative inset-0 z-0 flex flex-col gap-6 h-[100dvh]"
    >
      <section
        id="top-navigation-bar"
        className="absolute inset-0 z-10 flex justify-between items-center px-5 py-3 h-fit"
      >
        <Image src="app-logo.svg" alt="app-logo" width={60} height={30} />
        <Image
          src="icons/search-white.svg"
          alt="icon-search"
          width={24}
          height={24}
        />
      </section>

      <section id="carousel" className="relative inset-0 z-0 w-full">
        <Carousel
          className="relative inset-0 z-0 w-full"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {listBanners.map((banner, index) => (
              <CarouselItem key={`carousel-item-${index}`}>
                <section id="banner" className="relative inset-0 w-full h-fit">
                  <Image
                    src={banner}
                    alt="banner"
                    width={375}
                    height={228}
                    className="w-full h-fit"
                  />

                  <section
                    id="pagination"
                    className="flex items-center gap-3 absolute left-1/2 bottom-4 lg:bottom-9 -translate-x-1/2"
                  >
                    {listBanners.map((_, dotIndex) => (
                      <span
                        key={`dot-${dotIndex}`}
                        id="dot"
                        className={`${
                          index === dotIndex
                            ? "w-8 bg-primary rounded-md"
                            : "w-3 bg-white rounded-full"
                        } h-3`}
                      >
                        &nbsp;
                      </span>
                    ))}
                  </section>
                </section>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <section
        id="campaign"
        className="relative inset-0 z-0 w-full flex flex-col pl-5 gap-5"
      >
        <h1 className="font-bold text-2xl text-black-primary">
          Mari Peduli Sesama
        </h1>

        <Carousel className="relative inset-0 z-0 w-full">
          <CarouselContent>
            <CarouselItem className="basis-11/12">
              <section
                id="card-campaign"
                className="flex flex-col gap-3 w-full bg-white rounded-[20px] shadow-card-campaign mb-10"
              >
                <Image
                  src="/images/campaign-1.png"
                  alt="campaign"
                  width={310}
                  height={135}
                  className="w-full h-40 rounded-2xl"
                />

                <section
                  id="information"
                  className="flex flex-col gap-2 px-6 py-3"
                >
                  <h6 id="tags" className="font-bold text-sm text-primary">
                    Pendidikan
                  </h6>

                  <h5
                    id="title"
                    className="font-bold text-base text-black-primary"
                  >
                    Let’s help the palestinian for better education
                  </h5>

                  <Progress
                    value={55}
                    max={100}
                    getValueLabel={(value) => `${value}%`}
                    className="bg-gray [&>div]:bg-linear-gradient-progress-bar [&>div]:rounded-[100px]"
                  />

                  <section
                    id="detail-information"
                    className="flex justify-between items-end mt-2"
                  >
                    <section id="fundraising" className="flex flex-col gap-1">
                      <p className="font-semibold text-xs text-placeholder">
                        Terkumpul
                      </p>

                      <h6 className="font-bold text-sm text-primary">
                        Rp 40.773.677
                      </h6>
                    </section>

                    <section id="days-left" className="flex flex-col gap-1">
                      <p className="font-semibold text-sm text-placeholder">
                        <span className="font-bold text-primary">22</span> Hari
                        Lagi
                      </p>
                    </section>
                  </section>
                </section>
              </section>
            </CarouselItem>

            <CarouselItem>
              <section
                id="card-campaign"
                className="flex flex-col gap-3 w-full bg-white rounded-[20px] shadow-card-campaign max-w-[90%] mb-10"
              >
                <Image
                  src="/images/campaign-1.png"
                  alt="campaign"
                  width={310}
                  height={135}
                  className="w-full h-40 rounded-2xl"
                />

                <section
                  id="information"
                  className="flex flex-col gap-2 px-6 py-3"
                >
                  <h6 id="tags" className="font-bold text-sm text-primary">
                    Pendidikan
                  </h6>

                  <h5
                    id="title"
                    className="font-bold text-base text-black-primary"
                  >
                    Let’s help the palestinian for better education
                  </h5>

                  <Progress
                    value={55}
                    max={100}
                    getValueLabel={(value) => `${value}%`}
                    className="bg-gray [&>div]:bg-linear-gradient-progress-bar [&>div]:rounded-[100px]"
                  />

                  <section
                    id="detail-information"
                    className="flex justify-between items-end mt-2"
                  >
                    <section id="fundraising" className="flex flex-col gap-1">
                      <p className="font-semibold text-xs text-placeholder">
                        Terkumpul
                      </p>

                      <h6 className="font-bold text-sm text-primary">
                        Rp 40.773.677
                      </h6>
                    </section>

                    <section id="days-left" className="flex flex-col gap-1">
                      <p className="font-semibold text-sm text-placeholder">
                        <span className="font-bold text-primary">22</span> Hari
                        Lagi
                      </p>
                    </section>
                  </section>
                </section>
              </section>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      <section
        id="list-categories"
        className="relative inset-0 z-0 flex items-center pl-5 -mt-10"
      >
        <Button className="font-semibold text-sm text-white bg-black-secondary rounded-[20px]">
          For You
        </Button>
        <Button
          variant="ghost"
          className="font-semibold text-sm text-placeholder rounded-[20px]"
        >
          Pendidikan
        </Button>
        <Button
          variant="ghost"
          className="font-semibold text-sm text-placeholder rounded-[20px]"
        >
          Kemanusiaan
        </Button>
      </section>

      <section
        id="list-campaign-by-categories"
        className="relative inset-0 z-0  flex flex-col gap-3 px-5 pb-32"
      >
        <section
          id="card-campaign"
          className="flex bg-white gap-3 p-3 rounded-[20px] shadow-card-campaign"
        >
          <section id="left-content" className="w-full h-full max-w-28">
            <Image
              src="/images/campaign-2.png"
              alt="campaign"
              width={120}
              height={120}
              className="w-full h-full rounded-2xl"
            />
          </section>

          <section id="right-content" className="flex flex-col gap-2">
            <h6 id="tags" className="font-bold text-sm text-primary">
              Kemanusiaan
            </h6>

            <h5 id="title" className="font-bold text-base text-black-primary">
              Let’s make our earth green and healthy
            </h5>

            <Progress
              value={55}
              max={100}
              getValueLabel={(value) => `${value}%`}
              className="bg-gray [&>div]:bg-linear-gradient-progress-bar [&>div]:rounded-[100px]"
            />

            <section id="days-left" className="flex flex-col items-end gap-1">
              <p className="font-semibold text-sm text-placeholder">
                <span className="font-bold text-primary">22</span> Hari Lagi
              </p>
            </section>
          </section>
        </section>

        <section
          id="card-campaign"
          className="flex bg-white gap-3 p-3 rounded-[20px] shadow-card-campaign"
        >
          <section id="left-content" className="w-full h-full max-w-28">
            <Image
              src="/images/campaign-3.png"
              alt="campaign"
              width={120}
              height={120}
              className="w-full h-full rounded-2xl"
            />
          </section>

          <section id="right-content" className="flex flex-col gap-2">
            <h6 id="tags" className="font-bold text-sm text-primary">
              Kemanusiaan
            </h6>

            <h5 id="title" className="font-bold text-base text-black-primary">
              Let’s make our earth green and healthy
            </h5>

            <Progress
              value={55}
              max={100}
              getValueLabel={(value) => `${value}%`}
              className="bg-gray [&>div]:bg-linear-gradient-progress-bar [&>div]:rounded-[100px]"
            />

            <section id="days-left" className="flex flex-col items-end gap-1">
              <p className="font-semibold text-sm text-placeholder">
                <span className="font-bold text-primary">22</span> Hari Lagi
              </p>
            </section>
          </section>
        </section>
      </section>

      <section
        id="bottom-navigation-bar"
        className="fixed inset-x-0 bottom-0 z-10 flex justify-around items-center px-5 py-7 h-fit  bg-white shadow-card-campaign border-t-2 border-solid border-[#eaeaea]"
      >
        {listMenus.map((menu, index) => (
          <a
            key={`menu-${index}`}
            href={menu.href}
            className="flex flex-col items-center gap-1"
          >
            <Image
              src={menu.icon}
              alt={menu.title}
              width={24}
              height={24}
              className={`${menu.href === pathname && "filter-menu-active"}`}
            />
            <span
              className={`font-bold text-sm${
                menu.href === pathname ? " text-primary" : " text-white"
              }`}
            >
              {menu.title}
            </span>
          </a>
        ))}
      </section>
    </section>
  );
}
