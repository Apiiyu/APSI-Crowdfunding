"use client";

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Next
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrganizationDetail() {
  const [organization, setOrganization] = useState({});
  const [campaign, setCampaigns] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    fetch(`http://127.0.0.1:8000/api/organizations/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, meta } = result;

        if (meta.code === 200) {
          setOrganization(data);
        }
      });

    return () => {};
  }, []);

  return (
    <section
      id="user-profile"
      className="relative inset-0 z-0 flex flex-col items-center gap-[30px] h-full min-h-screen p-6"
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

        <Link href="/settings">
          <Image
            src="/icons/Option.svg"
            alt="icon-filter"
            width={24}
            height={24}
          />
        </Link>
      </section>

      <section id="profile" className="flex flex-col items-center gap-3">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src="/images/organization-profile-1.png"
            className="w-full h-full"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <section id="profile-name" className="flex items-center gap-1">
          <h5 className="font-bold text-lg text-black-primary">
            {organization.name}
          </h5>

          <Image
            src="/icons/Verifed.svg"
            alt="icon-filter"
            width={14}
            height={14}
          />
        </section>

        <span id="username" className="font-normal text-sm text-placeholder">
          @{organization.username}
        </span>

        <p
          id="description"
          className="font-normal text-sm text-center text-black-primary"
        >
          {organization.description}
        </p>
      </section>

      <Button className="min-h-12 rounded-3xl bg-success text-sm text-primary font-bold w-fit px-14">
        Messages
      </Button>

      <section
        id="card-statistics"
        className="flex items-center gap-[30px] bg-white py-5 px-7 rounded-[20px]  shadow-card-profile"
      >
        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">
            {organization.campaigns?.length || 0}
          </h6>

          <p className="text-sm text-black-primary">Submitted</p>
        </section>

        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">
            {organization.followers}
          </h6>

          <p className="text-sm text-black-primary">Followers</p>
        </section>

        <section id="statistic" className="flex flex-col items-center gap-1">
          <h6 className="font-bold text-lg text-black-primary">
            {organization.following}
          </h6>

          <p className="text-sm text-black-primary">Following</p>
        </section>
      </section>

      <section id="fundraising-supported" className="flex flex-col w-full">
        <h5 className="font-bold text-base text-black-primary mb-6">
          Fundarising Supported
        </h5>

        {organization.campaigns?.map((campaign, index) => (
          <Link href="/campaign/1" key={`campaign-${index}`}>
            <section
              id="card-campaign"
              className="flex flex-col gap-3 w-full bg-white rounded-[20px] shadow-card-campaign mb-10"
            >
              <img
                src={`http://127.0.0.1:8000/storage/${campaign.image}`}
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
                  {campaign.category?.name}
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
                  id="detail-information"
                  className="flex justify-between items-end mt-2"
                >
                  <section id="fundraising" className="flex flex-col gap-1">
                    <p className="font-semibold text-xs text-placeholder">
                      Terkumpul
                    </p>

                    <h6 className="font-bold text-sm text-primary">
                      Rp {campaign.current_fund.toLocaleString("id-ID")}
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
          </Link>
        ))}
      </section>

      <Link href="/" className="w-full -mt-10">
        <Button
          type="submit"
          className="min-h-16 rounded-xl bg-primary text-base text-white font-bold w-full"
        >
          Back to Home
        </Button>
      </Link>
    </section>
  );
}
