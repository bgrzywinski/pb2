import * as yup from "yup";
import { ContactFormFieldsEnum } from "@/components/ContactSection/Form/ContactForm";

export const ContactFormSchema = () =>
  yup.object().shape({
    [ContactFormFieldsEnum.Name]: yup
      .string()
      .required("Pole jest wymagane")
      .max(20, "Twoje imię jest za długie"),
    [ContactFormFieldsEnum.Email]: yup
      .string()
      .required("Pole jest wymagane")
      .max(50, "Twój email jest za długi")
      .email("Proszę wprowadź poprawny email"),
    [ContactFormFieldsEnum.Text]: yup.string().max(1000, "Za mało miejsca"),
  });
