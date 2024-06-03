// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

// Image
import Image from "next/image";

// Types
import { THookFormSignUp } from "@/types/sign-up";

export default function SignUpVerificationCode({
  form,
}: Readonly<{ form: THookFormSignUp }>): JSX.Element {
  return (
    <section id="form-content" className="relative inset-0 z-0 flex w-full">
      <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <div className="relative w-full items-center">
                <InputOTP
                  maxLength={5}
                  placeholder="Masukan Kode Verifikasi"
                  className="!text-base !placeholder:text-placeholder !tracking-normal pl-[4.6rem] !font-sans !placeholder:font-sans"
                  {...field}
                >
                  <InputOTPGroup className="w-full h-16 rounded-xl !bg-input pl-14">
                    <InputOTPSlot
                      className="!border-0 !ring-0 !ring-transparent"
                      index={0}
                    />
                    <InputOTPSlot
                      className="!border-0 !ring-0 !ring-transparent"
                      index={1}
                    />
                    <InputOTPSlot
                      className="!border-0 !ring-0 !ring-transparent"
                      index={2}
                    />
                    <InputOTPSlot
                      className="!border-0 !ring-0 !ring-transparent"
                      index={3}
                    />
                    <InputOTPSlot
                      className="!border-0 !ring-0 !ring-transparent"
                      index={4}
                    />
                  </InputOTPGroup>
                </InputOTP>

                <span className="absolute start-0 inset-y-0 flex p-5 gap-5">
                  <Image
                    src="/icons/Inbox.svg"
                    width="24"
                    height="24"
                    alt="profile-icon"
                  />
                </span>
              </div>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
}
