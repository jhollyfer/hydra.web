import heroImage from "@/assets/hero-festival.jpg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Festival Folclórico Benjaminense"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="">
          <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6">
            Conheça o Besouro
          </h1>
          <h2 className=" text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-8">
            Benjaminense
          </h2>
        </div>

        <div className="space-y-6 animate-fade-in">
          <div className="bg-primary backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-3xl">
            <p className="text-xl md:text-2xl text-primary-foreground font-medium">
              +30 Anos de Tradição Cultural Amazônica
            </p>
            <p className="text-lg text-primary-foreground mt-2">
              A Capital Cultural do Alto Solimões te convida para a maior festa
              folclórica da região
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            {/* <JoinSheet /> */}
            <Button size="lg" variant="outline" className=" text-lg px-8 py-4">
              Conheça Nossa História
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
