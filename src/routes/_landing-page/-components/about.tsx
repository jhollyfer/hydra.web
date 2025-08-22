import boiMangangaImage from "@/assets/boi-manganga.jpg";
import { Card } from "@/components/ui/card";

export function About() {
  return (
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
                <span className="font-semibold">Maior Campeão do Festival</span>
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
                orgulho e a tradição do bairro da Coaban (Javarizinho). Fundado
                pelo pescador <strong>Raimundo Dimas</strong>, de origens
                nordestinas, nasceu no beco 50 e conquistou o coração de toda
                Benjamin Constant.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border-l-4 border-primary">
                <p className="font-semibold text-primary mb-2">
                  O Boi Besouro • O Boi do Alagado
                </p>
                <p>
                  Nosso boi é <strong>branco</strong> com uma{" "}
                  <strong>estrela verde na testa</strong>, simbolizando a força
                  e a resistência dos pescadores e agricultores que enfrentam
                  anualmente as cheias do rio Javarizinho.
                </p>
              </div>

              <p>
                O que começou como entretenimento nos forros de rua locais,
                rapidamente ganhou reconhecimento e se tornou o{" "}
                <strong>maior campeão</strong> do Festival Folclórico
                Benjaminense, com diversos títulos conquistados ao longo de mais
                de três décadas.
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
                <div className="text-3xl  font-bold mb-2 text-primary">30+</div>
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
  );
}
