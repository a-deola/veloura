import { Button } from "../ui/button";
import Typewriter from "../effects/Typewritter";
export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-[url('/event3.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-foreground/50" />

      <div className="relative z-10 flex flex-col justify-center md:items-center md:text-center h-full px-10 text-white">
        <h1 className="w-1/2 md:w-full text-5xl md:text-7xl font-semibold font-serif">
          Creating Unforgettable
        </h1>
        <Typewriter words={["Moments.", "Memories."]} />
        <p className="mb-4 whitespace-normal lg:whitespace-nowrap tracking-wide text-lg">
          From Weddings to Corporate Events, We ensure Seamless Execution.
        </p>
        <Button className="px-6 py-3 transition w-36" variant="outline">
          Book Us Now
        </Button>
      </div>
    </div>
  );
}
