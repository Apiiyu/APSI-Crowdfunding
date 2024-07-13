"use client";

// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

// Next
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function DetailCampaign() {
  const [campaign, setCampaign] = useState({});
  const [amount, setAmount] = useState(0);
  const token = localStorage.getItem("token");

  const onSelectAmountOfDonation = (index: number, amount: number) => {
    const listElementIds = [
      "card-option-1",
      "card-option-2",
      "card-option-3",
      "card-option-4",
    ];

    // ? Remove all active class
    listElementIds.forEach((id) => {
      const element = document.getElementById(id);
      element?.classList.remove("!bg-primary");
      element?.classList.remove("!text-white");
    });

    const element = document.getElementById(`card-option-${index}`);
    element?.classList.add("!bg-primary");
    element?.classList.add("!text-white");

    setAmount(amount);
  };

  const onContinue = () => {
    window.localStorage.setItem("amount", amount ? amount.toString() : "0");
    window.location.href = "/payment";
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    fetch(`http://127.0.0.1:8000/api/campaigns/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        const { data, meta } = result;

        if (meta.code === 200) {
          setCampaign(data);
        }
      });

    return () => {};
  }, []);

  return (
    <section
      id="detail-campaign"
      className="relative inset-0 z-0 flex flex-col gap-4 w-full h-full p-6"
    >
      <section
        id="top-navigation-bar"
        className="flex justify-between items-center"
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

      <figure id="campaign" className="flex flex-col gap-3">
        <img
          src={`http://127.0.0.1:8000/storage/${campaign.image}`}
          alt="campaign"
          width={325}
          height={141}
          className="w-full h-full max-h-36 rounded-[20px]"
        />

        <figcaption
          id="campaign-information"
          className="flex flex-col max-w-[80%] gap-1"
        >
          <h6 id="tags" className="font-bold text-sm text-primary">
            {campaign.category?.name}
          </h6>

          <h5 id="title" className="font-bold text-base text-black-primary">
            {campaign.title}
          </h5>

          <p className="font-semibold text-sm text-placeholder mt-1">
            <span className="font-bold text-primary">22</span> Hari Lagi
          </p>
        </figcaption>
      </figure>

      <section id="statistics" className="flex items-center w-full h-fit">
        <section id="left-content" className="flex gap-2 p-1">
          <section
            id="box-icon"
            className="flex justify-center items-center w-11 h-11 rounded-xl p-2 bg-primary"
          >
            <Image
              src="/icons/SendWhite.svg"
              alt="icon-send"
              width={24}
              height={24}
            />
          </section>

          <section id="information" className="flex flex-col gap-1">
            <h6 className="font-semibold text-[13px] text-placeholder">
              Target Donasi
            </h6>

            <p className="font-bold text-sm text-black-primary">
              Rp. {campaign.target_fund?.toLocaleString("id-ID")}
            </p>
          </section>
        </section>

        <section id="right-content" className="flex gap-2 p-1">
          <section
            id="box-icon"
            className="flex justify-center items-center w-11 h-11 rounded-xl p-2 bg-primary"
          >
            <Image
              src="/icons/Chart.svg"
              alt="icon-chart"
              width={24}
              height={24}
            />
          </section>

          <section id="information" className="flex flex-col gap-1">
            <h6 className="font-semibold text-sm text-placeholder">
              Dana Terkumpul
            </h6>

            <p className="font-bold text-sm text-black-primary">
              Rp. {campaign.current_fund?.toLocaleString("id-ID")}
            </p>
          </section>
        </section>
      </section>

      <section id="fundraiser">
        <Link href={`/organization/${campaign.organization?.id}`}>
          <p className="font-semibold text-sm text-placeholder">
            By {""}{" "}
            <span className="font-bold text-primary">
              {campaign.organization?.name}
            </span>
          </p>
        </Link>
      </section>

      <section
        id="description"
        className="font-semibold text-sm text-black-primary opacity-80"
      >
        {campaign.description}
      </section>

      <Sheet key="bottom">
        <SheetTrigger asChild>
          <Button className="flex items-center gap-3 w-full h-full max-h-16 rounded-2xl bg-primary font-bold text-center text-white text-base py-5 mt-5">
            Donasi Sekarang
            <Image
              src="/icons/Love.svg"
              alt="icon-love"
              width={14}
              height={14}
            />
          </Button>
        </SheetTrigger>

        <SheetContent side="bottom">
          <SheetHeader>
            <h1 className="font-sans font-bold text-base text-black-primary">
              How much wanna donate?
            </h1>
          </SheetHeader>

          <section
            id="content"
            className="flex flex-col gap-4 items-center w-full"
          >
            <section
              id="list-options"
              className="grid grid-rows-2 grid-cols-12 gap-4 mt-6 w-full"
            >
              <section
                id="card-option-1"
                className="flex justify-center items-center col-span-6 w-full h-full max-h-16 bg-white rounded-2xl border border-solid border-[rgba(202, 202, 202, 0.20)] font-bold text-base text-primary"
                onClick={() => onSelectAmountOfDonation(1, 75000)}
              >
                Rp 75.000
              </section>

              <section
                id="card-option-2"
                className="flex justify-center items-center col-span-6 w-full h-full max-h-16 bg-white rounded-2xl border border-solid border-[rgba(202, 202, 202, 0.20)] font-bold text-base text-primary py-5"
                onClick={() => onSelectAmountOfDonation(2, 125000)}
              >
                Rp 125.000
              </section>

              <section
                id="card-option-3"
                className="flex justify-center items-center col-span-6 w-full h-full max-h-16 bg-white rounded-2xl border border-solid border-[rgba(202, 202, 202, 0.20)] font-bold text-base text-primary py-5"
                onClick={() => onSelectAmountOfDonation(3, 300000)}
              >
                Rp 300.000
              </section>

              <section
                id="card-option-4"
                className="flex justify-center items-center col-span-6 w-full h-full max-h-16 bg-white rounded-2xl border border-solid border-[rgba(202, 202, 202, 0.20)] font-bold text-base text-primary py-5"
                onClick={() => onSelectAmountOfDonation(4, 1000000)}
              >
                Rp 1.000.000
              </section>
            </section>

            <span className="font-semibold text-sm text-black-primary">Or</span>

            <Label htmlFor="nominal" className="w-full">
              Nominal Lainnya
            </Label>
            <div className="relative w-full items-center">
              <Input
                id="nominal"
                type="number"
                placeholder="Masukkan Nominal"
                className="pl-14 min-h-16 rounded-xl bg-input text-base text-black-primary font-normal placeholder:text-placeholder"
                onInput={(e) => setAmount(parseInt(e.currentTarget.value))}
              />
              <span className="absolute start-0 inset-y-0 flex items-center justify-center p-5 font-bold text-base text-black-primary">
                Rp.
              </span>
            </div>
          </section>

          <SheetFooter>
            <SheetClose asChild>
              <Button
                type="submit"
                className="w-full h-full max-h-16 rounded-2xl bg-primary font-bold text-center text-white text-base py-5 mt-5"
                onClick={onContinue}
              >
                Continue
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </section>
  );
}
