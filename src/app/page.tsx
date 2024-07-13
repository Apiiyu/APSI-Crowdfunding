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
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [accessToken, setAccessToken] = useState("");
  const [banners, setBanners] = useState([]); // ["/images/banner-1.png"
  const [campaigns, setCampaigns] = useState([]);
  const [categories, setCategories] = useState([]);

  const listMenus = [
    {
      title: "Beranda",
      icon: "icons/Home.svg",
      href: "/",
    },
    {
      title: "Laporan",
      icon: "icons/Papper.svg",
      href: "/donation/history",
    },
    {
      title: "Kotak Masuk",
      icon: "icons/Inbox.svg",
      href: "/inbox",
    },
    {
      title: "Profil",
      icon: "icons/Profile.svg",
      href: "/profile",
    },
  ];
  const pathname = usePathname();
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/campaigns", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { data } = result.data;

        setBanners(
          data.filter((banner: any) => banner.id === 1 || banner.id === 2)
        );
        setCampaigns(
          data.filter((campaign: any) => campaign.id === 3 || campaign.id === 4)
        );
      });

    fetch("http://127.0.0.1:8000/api/categories", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { data } = result.data;

        setCategories(data);
      });
  }, []);

  useEffect(() => {
    if (token) {
      setAccessToken(token);

      fetch("http://127.0.0.1:8000/api/master-data/users/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => {
          const { data, meta } = result;

          if (meta.code === 200) {
            window.localStorage.setItem("user", JSON.stringify(data));
          }
        });
    }
  }, [token]);

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
            {banners.map((banner, index) => (
              <CarouselItem key={`carousel-item-${index}`}>
                <Link href={`/campaign/${banner.id}`}>
                  <section
                    id="banner"
                    className="relative inset-0 w-full h-fit"
                  >
                    <img
                      src={`http://127.0.0.1:8000/storage/${banner.image}`}
                      alt="banner"
                      width={375}
                      height={228}
                      className="w-full h-fit"
                    />

                    <section
                      id="pagination"
                      className="flex items-center gap-3 absolute left-1/2 bottom-4 lg:bottom-9 -translate-x-1/2"
                    >
                      {banners.map((_, dotIndex) => (
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
                </Link>
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
            {banners.map((banner, index) => (
              <CarouselItem className="basis-11/12" key={`banners-${index}`}>
                <Link href={`/campaign/${banner.id}`}>
                  <section
                    id="card-campaign"
                    className="flex flex-col gap-3 w-full bg-white rounded-[20px] shadow-card-campaign mb-10"
                  >
                    <img
                      src={`http://127.0.0.1:8000/storage/${banner.image}`}
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
                        {banner.category.name}
                      </h6>

                      <h5
                        id="title"
                        className="font-bold text-base text-black-primary"
                      >
                        {banner.title}
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
                        <section
                          id="fundraising"
                          className="flex flex-col gap-1"
                        >
                          <p className="font-semibold text-xs text-placeholder">
                            Terkumpul
                          </p>

                          <h6 className="font-bold text-sm text-primary">
                            Rp. {banner.current_fund.toLocaleString("id-ID")}
                          </h6>
                        </section>

                        <section id="days-left" className="flex flex-col gap-1">
                          <p className="font-semibold text-sm text-placeholder">
                            <span className="font-bold text-primary">22</span>{" "}
                            Hari Lagi
                          </p>
                        </section>
                      </section>
                    </section>
                  </section>
                </Link>
              </CarouselItem>
            ))}
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
        {categories.map((category, index) => (
          <Button
            key={`category-${index}`}
            variant="ghost"
            className="font-semibold text-sm text-placeholder rounded-[20px]"
          >
            {category.name}
          </Button>
        ))}
      </section>

      <section
        id="list-campaign-by-categories"
        className="relative inset-0 z-0  flex flex-col gap-3 px-5 pb-32"
      >
        {campaigns.map((campaign, index) => (
          <Link href={`campaign/${campaign.id}`} key={`campaign-${index}`}>
            <section
              id="card-campaign"
              className="flex bg-white gap-3 p-3 rounded-[20px] shadow-card-campaign h-full"
            >
              <section id="left-content" className="w-full h-full max-w-28">
                <img
                  src={`http://127.0.0.1:8000/storage/${campaign.image}`}
                  alt="campaign"
                  width={120}
                  height={120}
                  className="w-full h-full rounded-2xl object-cover"
                />
              </section>

              <section id="right-content" className="flex flex-col gap-2">
                <h6 id="tags" className="font-bold text-sm text-primary">
                  {campaign.category.name}
                </h6>

                <h5
                  id="title"
                  className="font-bold text-base text-black-primary"
                >
                  {campaign.title}
                </h5>

                <Progress
                  value={55}
                  max={100}
                  getValueLabel={(value) => `${value}%`}
                  className="bg-gray [&>div]:bg-linear-gradient-progress-bar [&>div]:rounded-[100px]"
                />

                <section
                  id="days-left"
                  className="flex flex-col items-end gap-1"
                >
                  <p className="font-semibold text-sm text-placeholder">
                    <span className="font-bold text-primary">22</span> Hari Lagi
                  </p>
                </section>
              </section>
            </section>
          </Link>
        ))}
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
