import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Join() {
  return (
    <section id="join-section" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className=" text-4xl md:text-6xl font-bold text-primary mb-6">
            Faça Parte da Nossa História
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Junte-se ao Boi Bumbá Mangangá e seja parte da maior tradição
            cultural do Alto Solimões. Venha viver a magia da cultura amazônica
            conosco!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="bg-primary backdrop-blur-sm p-8  transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎭</span>
                </div>
                <h3 className=" text-2xl font-bold text-primary-foreground mb-4">
                  Artistas e Performers
                </h3>
                <p className="text-primary-foreground mb-6">
                  Dançarinos, atores, cantores e músicos. Todos são bem-vindos
                  para dar vida às nossas apresentações no Bumbódromo.
                </p>
                <ul className="text-left text-primary-foreground space-y-2">
                  <li>• Dançarinos de todas as idades</li>
                  <li>• Músicos da Marujada de Guerra</li>
                  <li>• Atores para as alegorias</li>
                  <li>• Artistas visuais e figurinistas</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-primary backdrop-blur-sm p-8  transition-all duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className=" text-2xl font-bold text-primary-foreground mb-4">
                  Apoiadores e Voluntários
                </h3>
                <p className="text-primary-foreground mb-6">
                  A magia acontece também nos bastidores. Precisamos de pessoas
                  dedicadas para manter nossa tradição viva.
                </p>
                <ul className="text-left text-primary-foreground space-y-2">
                  <li>• Organização de eventos</li>
                  <li>• Produção de fantasias</li>
                  <li>• Marketing e comunicação</li>
                  <li>• Apoio logístico</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="backdrop-blur-sm rounded-3xl p-8 md:p-12 border  text-center">
            <h3 className=" text-3xl md:text-4xl font-bold text-primary mb-6">
              Pronto para Fazer História Conosco?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como você pode contribuir para manter
              viva a mais bela tradição cultural de Benjamin Constant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <JoinSheet /> */}
              <Button
                size="lg"
                variant="outline"
                className=" text-primary text-lg px-8 py-4"
              >
                Saiba Mais Sobre Nós
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
