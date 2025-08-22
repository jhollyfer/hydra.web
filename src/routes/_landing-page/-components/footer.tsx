export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className=" text-2xl font-bold mb-4">Boi bumbá Mangangá</h3>
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
  );
}
