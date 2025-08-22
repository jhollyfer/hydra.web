import { DateTimePicker } from "@/components/date-picker";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Formatter } from "@/lib/formatter";
import { cn } from "@/lib/utils";
import React from "react";
import { useForm } from "react-hook-form";

export function JoinSheet() {
  const [open, setOpen] = React.useState(false);
  const form = useForm();

  const onJoin = form.handleSubmit(console.log);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="text-lg cursor-pointer">
          Quero fazer parte do Mangangá
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col py-4 px-6 gap-5 w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader className="px-0">
          <SheetTitle className="text-lg font-medium">
            Junte-se ao Boi Bumbá Mangangá
          </SheetTitle>
          <SheetDescription>
            Faça seu cadastro e junte-se ao Boi Bumbá Mangangá!
          </SheetDescription>
        </SheetHeader>

        {/* {roles?.status === "error" && <Error />} */}

        {/* {roles?.status === "pending" && <Skeleton />} */}

        <Form {...form}>
          <form className="space-y-4" onSubmit={onJoin}>
            <FormField
              control={form.control}
              name="name"
              rules={{
                validate: (value) => {
                  if (!value) return "Nome é obrigatório";
                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    Nome completo
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cpf"
              rules={{
                validate: (value) => {
                  if (!value) return "CPF é obrigatório";
                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    CPF
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-background h-10"
                      placeholder="000.000.000-00"
                      onChange={(e) => {
                        field.onChange(Formatter.cpf(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    RG
                    <span className="text-muted-foreground">
                      (Somente números)
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-background h-10"
                      // placeholder="000.000.000-00"
                      onChange={(e) => {
                        field.onChange(Formatter.number(e.target.value));
                      }}
                    />
                  </FormControl>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDate"
              rules={{
                validate: (value) => {
                  if (!value) return "Data de nascimento é obrigatório";
                  return true;
                },
              }}
              render={({ field }) => {
                const hasError = !!form.formState.errors[field.name];
                return (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Data de Nascimento
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <DateTimePicker
                        value={field.value}
                        onChange={field.onChange}
                        granularity="day"
                        displayFormat={{ hour24: "dd/MM/yyyy" }}
                        className={cn(hasError && "border-destructive")}
                        placeholder="Selecione uma data"
                      />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="category"
              rules={{
                validate: (value) => {
                  if (!value) return "Categoria é obrigatória";
                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    Categoria
                    <span className="text-destructive">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FOUNDER">Fundador</SelectItem>
                      <SelectItem value="SPONSOR">Patrocinador</SelectItem>
                      <SelectItem value="COLLABORATOR">Colaborador</SelectItem>
                      <SelectItem value="PARTICIPANT">Brincante</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="extras"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    Outras informações
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Informações adicionais" {...field} />
                  </FormControl>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <h3 className="text-md font-medium">Endereço</h3>

              <FormField
                control={form.control}
                name="address.street"
                rules={{
                  validate: (value) => {
                    if (!value) return "Rua é obrigatória";
                    return true;
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Rua
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Número
                      <span className="text-muted-foreground">
                        (deixe vazio caso não tenha)
                      </span>
                      {/* <span className="text-destructive">*</span> */}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="0000" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.neighborhood"
                rules={{
                  validate: (value) => {
                    if (!value) return "Bairro é obrigatório";
                    return true;
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Bairro
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address.complement"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Complemento
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Apartamento, bloco..." {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <h3 className="text-md font-medium">Filiação</h3>

              <FormField
                control={form.control}
                name="responsible.mother"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Nome da Mãe
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="responsible.father"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Nome do Pai
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-full" type="submit">
              Juntar-se
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
