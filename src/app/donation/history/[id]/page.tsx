// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Next
import Image from "next/image";
import Link from "next/link";

export default function DetailDonationHistory() {
  return (
    <section
      id="detail-donation-history"
      className="relative inset-0 z-0 flex flex-col justify-between p-6 h-screen"
    >
      <section
        id="content"
        className="flex flex-col gap-3 h-[calc(100vh - 200px)]"
      >
        <Image
          src="/icons/ArrowLeftBlack.svg"
          alt="icon-back"
          width={24}
          height={24}
          onClick={() => window.history.back()}
        />

        <section
          id="card"
          className="flex items-center gap-4 p-3 rounded-[20px] bg-white shadow-card-campaign mt-5"
        >
          <section id="left-content">
            <Image
              src="/images/campaign-1.png"
              alt="campaign"
              width={80}
              height={80}
              className="w-20 h-20 rounded-2xl"
            />
          </section>

          <section id="right-content" className="flex flex-col gap-1">
            <span id="date" className="font-bold text-sm text-primary">
              22 March 2021
            </span>

            <h6 className="font-bold text-sm text-black-primary">
              Let’s help the palestinian for <br /> better education
            </h6>
          </section>
        </section>

        <section id="detail-information" className="flex flex-col w-full">
          <section
            id="information"
            className="flex justify-between items-center py-5 border-b border-solid border-[#eaeaea] "
          >
            <h6 className="font-semibold text-sm text-black-primary">
              Donation Amount
            </h6>

            <h6 className="font-semibold text-sm text-black-primary">$200</h6>
          </section>

          <section
            id="information"
            className="flex justify-between items-center py-5 border-b border-solid border-[#eaeaea] "
          >
            <h6 className="font-semibold text-sm text-black-primary">
              Payment Method
            </h6>

            <h6 className="font-semibold text-sm text-black-primary">
              Debit Card
            </h6>
          </section>

          <section
            id="information"
            className="flex justify-between items-center py-5 border-b border-solid border-[#eaeaea] "
          >
            <h6 className="font-semibold text-sm text-black-primary">
              ID Donation
            </h6>

            <h6 className="font-semibold text-sm text-black-primary">
              #923729
            </h6>
          </section>

          <section
            id="information"
            className="flex justify-between items-center py-5 border-b border-solid border-[#eaeaea] "
          >
            <h6 className="font-semibold text-sm text-black-primary">Status</h6>

            <Badge className="bg-success font-semibold text-sm text-secondary  px-10 py-3 rounded-3xl">
              Success
            </Badge>
          </section>
        </section>
      </section>

      <Button
        type="submit"
        className="min-h-16 rounded-xl bg-primary text-base text-white font-bold w-full"
      >
        Back to Home
      </Button>
    </section>
  );
}
