import Brokers from "@/components/Sections/Brokers";
import Hero from "@/components/Sections/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-authorify-graylight justify-between">
      <Hero />
      <Brokers />
    </main>
  );
}
