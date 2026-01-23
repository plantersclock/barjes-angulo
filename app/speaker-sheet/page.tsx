import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Speaker Sheet - Barjes Angulo",
  description:
    "See Barjes Angulo Speaker Sheet outlining speaking topics, experience, and sessions for advisor and leadership events.",
  keywords: "Speaker Sheet",
};

export default function SpeakerSheetPage() {
  redirect("/files/BarjesAngulo-SpeakerSheet.pdf");
}
