import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useFormValidation = <T extends z.ZodType<any, any>>(schema: T) => {
  type FormData = z.infer<T>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    reset,
  };
};
