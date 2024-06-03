import { FieldValues, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export type TSchemaSignUpCommonForm = z.ZodObject<{
  email: z.ZodString;
  password: z.ZodString;
  username: z.ZodString;
}>;

export type THookFormSignUp = UseFormReturn<FieldValues>;
