import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { siteConfig } from "@/config/site";
import { useToast } from "@/hooks/use-toast";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/model/contact-form";

export function useContactForm() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function submit(values: ContactFormValues) {
    const subject = encodeURIComponent(`Contato de ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\nE-mail de contato: ${values.email}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    toast({
      title: "Mensagem preparada",
      description: "Seu aplicativo de e-mail foi aberto com os dados preenchidos.",
    });
  }

  return { form, submit };
}
