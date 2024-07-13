// Components
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Image
import Image from "next/image";

// Types
import { THookFormSignUp } from "@/types/sign-up";

export default function SignUpCommonForm({
  form,
}: Readonly<{
  form: THookFormSignUp;
}>): JSX.Element {
  return (
    <section
      id="form-content"
      className="relative inset-0 z-0 flex flex-col gap-6"
    >
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative w-full items-center">
                <Input
                  id="name"
                  type="text"
                  placeholder="Name"
                  className="pl-14 min-h-16 rounded-xl bg-input text-base text-black-primary font-normal placeholder:text-placeholder"
                  {...field}
                />
                <span className="absolute start-0 inset-y-0 flex items-center justify-center p-5">
                  <Image
                    src="/icons/Profile.svg"
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

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative w-full items-center">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="pl-14 min-h-16 rounded-xl bg-input text-base text-black-primary font-normal placeholder:text-placeholder"
                  {...field}
                />
                <span className="absolute start-0 inset-y-0 flex items-center justify-center p-5">
                  <Image
                    src="/icons/Inbox.svg"
                    width="24"
                    height="24"
                    alt="inbox-icon"
                  />
                </span>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className="relative w-full items-center">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="pl-14 min-h-16 rounded-xl bg-input text-base text-black-primary font-normal placeholder:text-placeholder"
                  {...field}
                />

                <span className="absolute start-0 inset-y-0 flex items-center justify-center p-5">
                  <Image
                    src="/icons/Password.svg"
                    width="24"
                    height="24"
                    alt="password-icon"
                  />
                </span>

                <span className="absolute end-0 inset-y-0 flex items-center justify-center p-5">
                  <Image
                    src="/icons/eye-off.svg"
                    width="24"
                    height="24"
                    alt="eye-off-icon"
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
