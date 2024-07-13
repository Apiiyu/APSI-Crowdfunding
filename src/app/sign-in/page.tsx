"use client";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

// Hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Image
import Image from "next/image";

// Next
import Link from "next/link";

// Zod
import { z } from "zod";

export default function RootPageSignIn() {
  const { toast } = useToast();
  const formSchema = z.object({
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const { data, meta, message } = await response.json();

    if (!!message && message === "Unauthorized") {
      toast({
        className: "bg-red-500 text-white",
        title: "Error",
        description: message ?? "Something went wrong",
      });
    }

    if (meta.code === 200) {
      // Set the token to the local storage
      localStorage.setItem("token", data.accessToken);

      // Redirect to the dashboard page
      window.location.href = "/";
    }
  };

  return (
    <section id="sign-in" className="px-6 pt-20 pb-14 h-full min-h-screen">
      <Form {...form}>
        <form
          className="relative inset-0 z-0 flex flex-col justify-between items-start w-full h-full min-h-screen"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <section
            id="top-content"
            className="relative inset-0 z-0 flex flex-col gap-9 w-full"
          >
            <h1 className="font-sans font-bold text-black-primary text-3xl w-full max-w-72">
              Assalamu&apos;alaikum Selamat Datang di LAZ{" "}
              <span className="font-sans font-bold text-primary text-3xl">
                RPU.
              </span>
            </h1>

            <section
              id="form-content"
              className="relative inset-0 z-0 flex flex-col gap-6"
            >
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

              <section
                id="form-password"
                className="flex flex-col gap-4 w-full"
              >
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

                <div className="flex w-full justify-end">
                  <Link
                    href="#"
                    className="text-xs text-primary font-semibold leading-6"
                  >
                    Lupa Password?
                  </Link>
                </div>
              </section>
            </section>
          </section>

          <section
            id="bottom-content"
            className="relative inset-0 z-0 flex flex-col gap-5 items-center w-full"
          >
            <Button
              type="submit"
              className="min-h-16 rounded-xl bg-primary text-base text-white font-bold w-full -mt-80"
            >
              Masuk
            </Button>

            <p
              id="descripton"
              className="text-sm text-black-primary font-semibold"
            >
              Belum punya akun?{" "}
              <Link href="sign-up" className="text-primary">
                Daftar
              </Link>
            </p>
          </section>
        </form>
      </Form>
    </section>
  );
}
