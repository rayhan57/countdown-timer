import { format } from "date-fns";
import emailjs from "@emailjs/browser";

export const notifyEmail = (email, targetTime, waiting) => {
  const formattedDate = format(new Date(targetTime), "dd MMMM yyyy HH:mm");
  const formData = {
    email,
    waiting,
    destinationDate: formattedDate,
  };

  emailjs.send(
    import.meta.env.VITE_SERVICE_ID,
    import.meta.env.VITE_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_PUBLIC_KEY,
  );
};
