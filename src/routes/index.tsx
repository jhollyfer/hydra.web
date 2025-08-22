import boiMangangaImage from "@/assets/boi-manganga.jpg";
import heroImage from "@/assets/hero-festival.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
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
                A Capital Cultural do Alto Solimões te convida para a maior
                festa folclórica da região
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button
                size="lg"
                // onClick={scrollToJoinSection}
                className="animate-pulse-glow text-lg px-8 py-4"
              >
                Quero fazer parte do Boi Mangangá
              </Button>
              <Button
                size="lg"
                variant="outline"
                className=" text-lg px-8 py-4"
              >
                Conheça Nossa História
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* HERO SECTION */}
      {/* FESTIVAL SECTION */}
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
              Há +30 anos, Benjamin Constant se transforma na Capital Cultural
              do Alto Solimões, recebendo mais de 5 mil visitantes de toda a
              região amazônica.
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
                    <strong>Letícia (Colômbia)</strong>, além de benjaminenses
                    que vivem em outras cidades do Amazonas e até mesmo do
                    exterior.
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
      {/* FESTIVAL SECTION */}
      {/* MANAGAGA SECTION */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src={boiMangangaImage}
                  alt="Boi Bumbá Mangangá"
                  className="w-full rounded-3xl shadow-festival animate-pulse-glow"
                />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-full opacity-20 " />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 " />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-full mb-6">
                  <span className="w-3 h-3 bg-primary-foreground rounded-full animate-pulse"></span>
                  <span className="font-semibold">
                    Maior Campeão do Festival
                  </span>
                </div>

                <h2 className=" text-4xl md:text-6xl font-bold text-foreground mb-6">
                  Boi Bumbá
                  <span className="block bg-primary bg-clip-text text-transparent">
                    Mangangá
                  </span>
                </h2>

                <div className="w-24 h-1 bg-primary rounded-full mb-8" />
              </div>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Desde <strong>1992</strong>, o Boi Bumbá Mangangá representa o
                  orgulho e a tradição do bairro da Coaban (Javarizinho).
                  Fundado pelo pescador <strong>Raimundo Dimas</strong>, de
                  origens nordestinas, nasceu no beco 50 e conquistou o coração
                  de toda Benjamin Constant.
                </p>

                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border-l-4 border-primary">
                  <p className="font-semibold text-primary mb-2">
                    O Boi Besouro • O Boi do Alagado
                  </p>
                  <p>
                    Nosso boi é <strong>branco</strong> com uma{" "}
                    <strong>estrela verde na testa</strong>, simbolizando a
                    força e a resistência dos pescadores e agricultores que
                    enfrentam anualmente as cheias do rio Javarizinho.
                  </p>
                </div>

                <p>
                  O que começou como entretenimento nos forros de rua locais,
                  rapidamente ganhou reconhecimento e se tornou o{" "}
                  <strong>maior campeão</strong> do Festival Folclórico
                  Benjaminense, com diversos títulos conquistados ao longo de
                  mais de três décadas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <Card className="p-6 text-center ">
                  <div className="text-3xl  font-bold text-primary mb-2">
                    1992
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ano de Fundação
                  </div>
                </Card>

                <Card className="p-6 text-center ">
                  <div className="text-3xl  font-bold mb-2 text-primary">
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Anos de História
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Tradição Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className=" text-3xl md:text-4xl font-bold text-primary mb-6">
                Tradição e Cultura
              </h3>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 hover:shadow-festival transition-all duration-300 ">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🎵</span>
                </div>
                <h4 className=" text-xl font-bold text-center mb-4 text-primary">
                  Marujada de Guerra
                </h4>
                <p className="text-muted-foreground text-center">
                  Nossa tradição musical única, onde a Marujada de Guerra traz o
                  ritmo especial para as apresentações no Bumbódromo.
                </p>
              </Card>

              <Card
                className="p-8 hover:shadow-festival transition-all duration-300 "
                style={{ animationDelay: "0.2s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className=" text-xl font-bold text-center mb-4 text-primary">
                  Maior Campeão
                </h4>
                <p className="text-muted-foreground text-center">
                  Diversos títulos conquistados ao longo dos anos, consolidando
                  nossa posição como o boi bumbá mais vitorioso do festival.
                </p>
              </Card>

              <Card
                className="p-8 hover:shadow-festival transition-all duration-300  md:col-span-2 lg:col-span-1"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className=" text-xl font-bold text-center mb-4 text-primary">
                  Trilogia Cultural
                </h4>
                <p className="text-muted-foreground text-center">
                  Representa oficialmente a trilogia cultural do município,
                  simbolizando o orgulho de toda a comunidade benjaminense.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* MANGAGA SECTION  */}
      {/* JOIN SECTION */}
      <section id="join-section" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className=" text-4xl md:text-6xl font-bold text-primary mb-6">
              Faça Parte da Nossa História
            </h2>
            <div className="w-32 h-1 mx-auto rounded-full mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Junte-se ao Boi Bumbá Mangangá e seja parte da maior tradição
              cultural do Alto Solimões. Venha viver a magia da cultura
              amazônica conosco!
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
                    A magia acontece também nos bastidores. Precisamos de
                    pessoas dedicadas para manter nossa tradição viva.
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
                Entre em contato e descubra como você pode contribuir para
                manter viva a mais bela tradição cultural de Benjamin Constant.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 animate-pulse-glow"
                >
                  Quero fazer parte do Mangangá
                </Button>
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
      {/* JOIN SECTION */}
      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className=" text-2xl font-bold mb-4">
                Festival Folclórico Benjaminense
              </h3>
              <p className="text-primary-foreground">
                +30 anos celebrando a cultura amazônica com orgulho e tradição.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Boi Bumbá Mangangá</h4>
              <div className="space-y-2 text-primary-foreground">
                <p>Bairro Coaban (Javarizinho)</p>
                <p>Benjamin Constant - AM</p>
                <p>Fundado em 1992</p>
              </div>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-primary-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} Boi Bumbá Mangangá. Todos os
              direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
