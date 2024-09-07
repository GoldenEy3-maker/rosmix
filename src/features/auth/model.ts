import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const authSchema = z.object({
  login: z.string().min(2, "Обязательное поле!"),
  password: z.string().min(8, "Пароль должен быть не мнее 8 символов!"),
});

export function useAuthForm() {
  return useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });
}
