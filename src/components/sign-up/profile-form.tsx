// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Next
import Image from "next/image";

// React
import { useRef, useState } from "react";

// Types
import { THookFormSignUp } from "@/types/sign-up";

export default function SignUpProfileForm({
  form,
}: Readonly<{ form: THookFormSignUp }>): JSX.Element {
  const profilePictureRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const onClickProfilePicture = () => {
    profilePictureRef.current?.click();
  };

  const onUploadProfilePicture = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target!.files![0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <section
      id="form-content"
      className="relative inset-0 z-0 flex flex-col justify-center items-center w-full gap-8"
    >
      <section id="avatar" className="flex flex-col items-center gap-5">
        {profileImage ? (
          <Avatar className="w-[130px] h-[130px]">
            <AvatarImage src={profileImage} width={130} height={130} />
          </Avatar>
        ) : (
          <div className="relative inset-0 z-0 w-full h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130"
              height="130"
              viewBox="0 0 130 130"
              fill="none"
            >
              <circle
                cx="65"
                cy="65"
                r="65"
                fill="#04786D"
                fill-opacity="0.2"
              />
            </svg>

            <Image
              src="/icons/Camera.svg"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              width={21}
              height={19}
              alt="icon-camera"
            />
          </div>
        )}

        <span onClick={onClickProfilePicture} className="text-sm text-primary">
          Tambah Foto Profil
        </span>

        <input
          type="file"
          className="hidden"
          ref={profilePictureRef}
          onChangeCapture={onUploadProfilePicture}
          accept="image/*"
        />
      </section>

      <section
        id="content"
        className="relative inset-0 z-0 flex flex-col gap-6 w-full"
      >
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full items-center">
                  <Input
                    id="displayName"
                    type="text"
                    placeholder="Display name"
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
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative w-full items-center">
                  <Input
                    id="tags"
                    type="text"
                    placeholder="Explore Tags"
                    className="pl-14 min-h-16 rounded-xl bg-input text-base text-black-primary font-normal placeholder:text-placeholder"
                    {...field}
                  />
                  <span className="absolute start-0 inset-y-0 flex items-center justify-center p-5">
                    <Image
                      src="/icons/Explore.svg"
                      width="24"
                      height="24"
                      alt="explore-icon"
                    />
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </section>
    </section>
  );
}
