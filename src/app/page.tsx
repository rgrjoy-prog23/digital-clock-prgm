import ClockApp from "@/components/ClockApp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Clock App",
  description: "Clock App",
};

const page = () => {
  return (
    <section className="grid min-h-dvh place-items-center">
      <ClockApp />
    </section>
  );
};

export default page;
