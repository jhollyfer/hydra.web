import { Card } from "@/components/ui/card";

export function Festival() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2  rounded-full " />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 rounded-full " />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-primary text-4xl md:text-6xl font-bold  mb-6">
            O Maior Festival do Alto Solimões
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-xl  max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Há +30 anos, Benjamin Constant se transforma na Capital Cultural do
            Alto Solimões, recebendo mais de 5 mil visitantes de toda a região
            amazônica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-primary backdrop-blur-sm p-8 text-center transition-all duration-300 ">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary-foreground">
                27
              </span>
            </div>
            <h3 className=" text-2xl font-bold text-primary-foreground mb-4">
              Anos de Tradição
            </h3>
            <p className="text-primary-foreground">
              Quase três décadas celebrando a cultura amazônica com paixão e
              autenticidade.
            </p>
          </Card>

          <Card
            className="bg-primary backdrop-blur-sm p-8 text-center transition-all duration-300 "
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-foreground">
                5k+
              </span>
            </div>
            <h3 className=" text-2xl font-bold text-primary-foreground mb-4">
              Visitantes
            </h3>
            <p className="text-primary-foreground">
              Pessoas de Brasil, Peru e Colômbia se reúnem para celebrar nossa
              cultura.
            </p>
          </Card>

          <Card
            className="bg-primary backdrop-blur-sm p-8 text-center transition-all duration-300 "
            style={{ animationDelay: "0.4s" }}
          >
            <div className="w-16 h-16 bg-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-primary-foreground">
                🏛️
              </span>
            </div>
            <h3 className=" text-2xl font-bold text-primary-foreground mb-4">
              Bumbódromo
            </h3>
            <p className="text-primary-foreground">
              Centro Cultural de Benjamin Constant, palco da maior festa
              cultural da região.
            </p>
          </Card>
        </div>

        <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 ">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className=" text-3xl text-primary md:text-4xl font-bold  mb-6">
                Uma Celebração Internacional
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  O Festival Folclórico Benjaminense transcende fronteiras,
                  atraindo visitantes das cidades vizinhas de{" "}
                  <strong>Islândia (Peru)</strong> e{" "}
                  <strong>Letícia (Colômbia)</strong>, além de benjaminenses que
                  vivem em outras cidades do Amazonas e até mesmo do exterior.
                </p>
                <p className="text-lg leading-relaxed">
                  Tradicionalmente realizado em <strong>julho</strong>, o
                  festival eleva a cultura do povo benjaminense através de
                  alegorias, lendas e figuras típicas da Amazônia e do Alto
                  Solimões.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🇧🇷</span>
                </div>
                <div className="">
                  <div className="font-semibold text-primary">
                    Brasil - Benjamin Constant
                  </div>
                  <div className="text-muted-foreground">
                    Capital Cultural do Alto Solimões
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🇵🇪</span>
                </div>
                <div className="">
                  <div className="font-semibold text-primary">
                    Peru - Islândia
                  </div>
                  <div className="text-muted-foreground">
                    Visitantes internacionais
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🇨🇴</span>
                </div>
                <div className="">
                  <div className="font-semibold text-primary">
                    Colômbia - Letícia
                  </div>
                  <div className="text-muted-foreground">
                    União cultural amazônica
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
