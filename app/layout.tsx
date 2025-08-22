// app/layout.tsx
import { redirect } from "next/navigation";

export default function RootLayout() {
  redirect("/en");
}