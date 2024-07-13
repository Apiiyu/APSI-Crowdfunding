"use client";

// Components
import { Button } from "@/components/ui/button";

// Next
import Image from "next/image";

export default function PaymentMethodDetail() {
  // Set due date to 1 day from now
  const amount = window.localStorage.getItem("amount") ?? 0;
  const user = window.localStorage.getItem("user");
  const objUser = JSON.parse(user ?? {});
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 1);

  return (
    <section
      id="payment-method-detail"
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

      <section
        id="salutation-text"
        className="w-full font-normal text-sm text-black-primary text-center"
      >
        Terima kasih{" "}
        <strong>
          {" "}
          {Object.keys(objUser).length > 0 ? objUser.name : "Donatur"}{" "}
        </strong>{" "}
        <br /> atas Donasi yang akan anda berikan pada program
      </section>

      <section
        id="card"
        className="flex items-center gap-4 p-3 rounded-[20px] bg-white shadow-card-profile"
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
          <h6 className="font-bold text-sm text-black-primary leading-6">
            Let’s help the palestinian for <br /> better education
          </h6>
        </section>
      </section>

      <section id="detail-information" className="flex flex-col gap-3">
        <section
          id="card-payment-method"
          className="flex justify-between items-center w-full px-5 py-[22px] rounded-xl bg-white shadow-card-profile"
        >
          <section id="left-content" className="flex items-center gap-4">
            <Image
              src="/images/bjb.png"
              width={40}
              height={20}
              alt="bank-bsi"
            />

            <section id="detail-information" className="flex flex-col">
              <h6 className="font-extrabold text-xs text-black-primary leading-6">
                006 007 008 0009
              </h6>

              <span className="font-semibold text-[10px] text-black-primary">
                an. Rumah Peduli Umat
              </span>
            </section>
          </section>

          <section id="right-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M2.5 3H0.5V14.5H14V13M2.5 3H14V13M2.5 3V0.5H17V13H14"
                stroke="#CACACA"
              />
            </svg>
          </section>
        </section>

        <section
          id="information-payment"
          className="flex justify-between items-center w-full px-5 py-[22px] rounded-xl bg-white shadow-card-profile"
        >
          <section
            id="left-content"
            className="flex justify-center items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              className="ml-[10px] mr-3"
            >
              <path
                d="M14.2613 2.18468C13.8996 1.82272 13.47 1.53559 12.9972 1.3397C12.5244 1.1438 12.0177 1.04297 11.5059 1.04297C10.9942 1.04297 10.4874 1.1438 10.0146 1.3397C9.54185 1.53559 9.1123 1.82272 8.75051 2.18468L7.99968 2.93551L7.24884 2.18468C6.51806 1.4539 5.52691 1.04335 4.49343 1.04335C3.45995 1.04335 2.46879 1.4539 1.73801 2.18468C1.00723 2.91546 0.59668 3.90661 0.59668 4.94009C0.59668 5.97358 1.00723 6.96473 1.73801 7.69551L2.48884 8.44634L7.99968 13.9572L13.5105 8.44634L14.2613 7.69551C14.6233 7.33373 14.9104 6.90417 15.1063 6.43139C15.3022 5.9586 15.4031 5.45186 15.4031 4.94009C15.4031 4.42833 15.3022 3.92159 15.1063 3.4488C14.9104 2.97602 14.6233 2.54646 14.2613 2.18468Z"
                fill="#04786D"
                stroke="#04786D"
                stroke-width="0.796875"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h6 className="font-extrabold text-sm text-black-primary">
              Rp {amount.toLocaleString("id-ID")}
            </h6>
          </section>

          <section id="right-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
            >
              <path
                d="M2.5 3H0.5V14.5H14V13M2.5 3H14V13M2.5 3V0.5H17V13H14"
                stroke="#CACACA"
              />
            </svg>
          </section>
        </section>

        <section
          id="description"
          className="font-semibold text-center text-black-primary text-[10px] w-full leading-5"
        >
          Harap transfer sesuai nominal diatas (sampai 3 digit terakhir) agar
          dapat terkonfirmasi otomatis dan kebaikan ini dapat kami teruskan.
        </section>

        <section
          id="due-date"
          className="flex items-center gap-4 bg-warning p-5 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            className="mx-4"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.25 10.5C19.25 15.609 15.109 19.75 10 19.75C4.891 19.75 0.75 15.609 0.75 10.5C0.75 5.391 4.891 1.25 10 1.25C15.109 1.25 19.25 5.391 19.25 10.5Z"
              stroke="#3E3E3E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4316 13.4424L9.66162 11.1934V6.34644"
              stroke="#3E3E3E"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <section id="information" className="flex flex-col">
            <span className="font-semibold text-[10px] text-black-primary">
              Transfer Sebelum :
            </span>

            <h6 className="font-extrabold text-xs text-black-primary">
              {/* format due date into like this 09 Jun 2024 - 07:20 WIB */}
              {dueDate.toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}{" "}
              {/* Set time into like this one 07:20 */}-{" "}
              {dueDate.toLocaleTimeString("id-ID", { timeStyle: "short" })} WIB
            </h6>
          </section>
        </section>
      </section>

      <Button className="flex items-center gap-3 w-full h-full max-h-16 rounded-2xl bg-primary font-bold text-center text-white text-base py-5 mt-5">
        Konfirmasi Pembayaran
      </Button>
    </section>
  );
}
