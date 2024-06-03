"use client";

// Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SignUpCommonForm from "@/components/sign-up/common-form";
import SignUpVerificationCode from "@/components/sign-up/verification-code";

// Hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Next
import Link from "next/link";

// React
import { useState } from "react";

// Zod
import { z } from "zod";
import SignUpProfileForm from "@/components/sign-up/profile-form";

export default function RootPageSignUp() {
  const [btnText, setBtnText] = useState("Selanjutnya");
  const [headerText, setHeaderText] = useState("Buat Akun Donasi");
  const [schema, setSchema] = useState<z.ZodObject<any>>(
    z.object({
      email: z.string().email({
        message: "Invalid email address",
      }),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters",
      }),
      username: z.string().min(3, {
        message: "Username must be at least 3 characters",
      }),
    })
  );
  const [step, setStep] = useState("common-form");

  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: z.infer<any>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    switch (step) {
      case "common-form":
        setSchema(
          z.object({
            code: z.string().length(5, {
              message: "Code must be 5 characters",
            }),
          })
        );
        setStep("verification-form");
        setBtnText("Verifikasi Akun");
        break;
      case "verification-form":
        setSchema(
          z.object({
            displayName: z.string().min(3, {
              message: "Display name must be at least 3 characters",
            }),
            tags: z.string().min(2, {
              message: "Tags must be at least 2 characters",
            }),
          })
        );
        setStep("profile-form");
        setHeaderText("Kelola Profil Anda");
        setBtnText("Konfirmasi");
        break;
      case "profile-form":
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values, "final");
        break;
      default:
        break;
    }
  };

  return (
    <Form {...form}>
      <form
        id="sign-up"
        className="relative inset-0 z-0 flex flex-col justify-between items-start w-full h-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section
          id="top-content"
          className="relative inset-0 z-0 flex flex-col gap-9 w-full"
        >
          <h1 className="font-sans font-bold text-black-primary text-3xl w-full max-w-44">
            {headerText}
            {""}
            <span className="font-sans font-bold text-primary text-3xl">.</span>
          </h1>

          <Tabs value={step}>
            <TabsContent value="common-form">
              <SignUpCommonForm form={form} />
            </TabsContent>

            <TabsContent value="verification-form">
              <SignUpVerificationCode form={form} />
            </TabsContent>

            <TabsContent value="profile-form">
              <SignUpProfileForm form={form} />
            </TabsContent>
          </Tabs>
        </section>

        <section
          id="bottom-content"
          className="relative inset-0 z-0 flex flex-col gap-5 items-center w-full"
        >
          <Button
            type="submit"
            className="min-h-16 rounded-xl bg-primary text-base text-white font-bold w-full"
          >
            {btnText}
          </Button>

          <p
            id="descripton"
            className="text-sm text-black-primary font-semibold"
          >
            Sudah punya akun{" "}
            <Link href="sign-in" className="text-primary">
              Masuk
            </Link>
          </p>
        </section>
      </form>
    </Form>
  );
}
