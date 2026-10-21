import { Timer } from "@/components/Contador/Timer";
import { HomeForm } from "@/components/HomeForm/HomeForm";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Timer />
      <HomeForm />
    </main>
  );
}
