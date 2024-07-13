"use client";

// Components
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// Next
import Image from "next/image";
import Link from "next/link";

export default function Payment() {
  const listPaymentMethods = [
    {
      name: "Bank Syariah Indonesia",
      image: "/images/bsi.png",
      value: "BANK BSI",
    },
    {
      name: "Bank Mandiri",
      image: "/images/mandiri.png",
      value: "BANK MANDIRI",
    },
    {
      name: "Bank BJB",
      image: "/images/bjb.png",
      value: "BANK BJB",
    },
    {
      name: "Bank Muamalat",
      image: "/images/muamalat.png",
      value: "BANK MUAMALAT",
    },
    {
      name: "QRIS",
      image: "/images/qris.png",
      value: "QRIS",
    },
  ];

  return (
    <section
      id="payment"
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
          Metode Pembayaran<span className="font-bold text-primary">.</span>
        </h1>
      </header>

      <section id="payment-methods" className="flex flex-col gap-5 w-full">
        <RadioGroup className="!gap-5">
          {listPaymentMethods.map((paymentMethod, index) => (
            <section
              id="card-payment-method"
              className="flex justify-between items-center w-full px-5 py-[22px] rounded-xl bg-white shadow-card-profile"
              key={`payment-method-${index}`}
            >
              <section id="left-content" className="flex items-center gap-4">
                <Image
                  src={paymentMethod.image}
                  width={40}
                  height={20}
                  alt="bank-bsi"
                />

                <span className="text-sm text-black-primary">
                  {paymentMethod.name}
                </span>
              </section>

              <section id="right-content">
                <RadioGroupItem
                  value={paymentMethod.value}
                  className="w-5 h-5 border-2 border-placeholder [&>.lucide-circle]:text-primary has[span]:!border-primary"
                />
              </section>
            </section>
          ))}
        </RadioGroup>
      </section>

      <Link href="/payment/detail">
        <Button className="flex items-center gap-3 w-full h-full max-h-16 rounded-2xl bg-primary font-bold text-center text-white text-base py-5 mt-5">
          Selanjutnya
        </Button>
      </Link>
    </section>
  );
}
