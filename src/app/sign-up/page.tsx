"use client";

// Axios
import axios from "axios";

// Components
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SignUpCommonForm from "@/components/sign-up/common-form";
import SignUpVerificationCode from "@/components/sign-up/verification-code";
import { useToast } from "@/components/ui/use-toast";

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
import { fetchData } from "@/tools/api";

export default function RootPageSignUp() {
  const [btnText, setBtnText] = useState("Selanjutnya");
  const [headerText, setHeaderText] = useState("Buat Akun Donasi");
  const [payload, setPayload] = useState({});
  const [schema, setSchema] = useState<z.ZodObject<any>>(
    z.object({
      email: z.string().email({
        message: "Invalid email address",
      }),
      password: z.string().min(8, {
        message: "Password must be at least 8 characters",
      }),
      name: z.string().min(3, {
        message: "Name must be at least 3 characters",
      }),
    })
  );
  const [step, setStep] = useState("common-form");
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: z.infer<any>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    switch (step) {
      case "common-form":
        setPayload(values);

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
        // ? Set the payload with combined values from the previous step.
        setPayload({ ...payload, ...values });

        setSchema(
          z.object({
            avatar: z.any(),
            username: z.string().min(3, {
              message: "Username must be at least 3 characters",
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
        setPayload({ ...payload, ...values });
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        Object.assign(payload, values);
        const formData = new FormData();

        for (const key in payload) {
          formData.append(key, payload[key]);
        }

        console.log(formData.get("avatar"), "form data");

        const response = axios.post(
          "http://127.0.0.1:8000/api/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const result = await response;

        const { data, meta, message } = result.data;

        console.log(result, "result");

        if (!!message) {
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

        break;
      default:
        break;
    }
  };

  return (
    <Form {...form}>
      <form
        id="sign-up"
        className="relative inset-0 z-0 flex flex-col justify-between items-start w-full h-full px-6 pt-20 pb-14"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <section
          id="top-content"
          className="relative inset-0 z-0 flex flex-col gap-9 w-full h-full min-h-screen"
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
            className="min-h-16 rounded-xl bg-primary text-base text-white font-bold w-full -mt-80"
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
