import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
import { API } from "@/lib/api";
import { Formatter } from "@/lib/formatter";
import type { Member } from "@/lib/model";
import { useQuery } from "@tanstack/react-query";
import { EyeIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

export function ShowMemberSheet({ memberId }: { memberId: string }) {
  const [open, setOpen] = React.useState(false);
  const form = useForm();

  const response = useQuery({
    queryKey: ["MEMBER-GET-BY-ID", memberId],
    queryFn: async function () {
      const route = `/administrators/members/${memberId}`;
      const { data } = await API.get<Member>(route);
      return data;
    },
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <EyeIcon className="size-4" />
          <span>Visualizar</span>
        </DropdownMenuItem>
      </SheetTrigger>
      <SheetContent className="flex flex-col py-4 px-6 gap-5 w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader className="px-0">
          <SheetTitle className="text-lg font-medium">
            Visualizar detalhes membro
          </SheetTitle>
          <SheetDescription>Veja os detalhes do membro</SheetDescription>
        </SheetHeader>

        {/* {roles?.status === "error" && <Error />} */}

        {/* {roles?.status === "pending" && <Skeleton />} */}

        {response.status === "success" && (
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                defaultValue={response.data?.user?.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Nome completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder="Seu nome completo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                defaultValue={Formatter.cpf(response.data?.cpf)}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      CPF
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled
                        className="bg-background h-10"
                        placeholder="000.000.000-00"
                      />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rg"
                defaultValue={response.data?.rg}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      RG
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled
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
                defaultValue={response.data?.birthDate
                  ?.split("-")
                  .reverse()
                  .join("/")}
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Data de Nascimento
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled
                          className="bg-background h-10"
                          // placeholder="000.000.000-00"
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
                defaultValue={response.data?.category}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Categoria
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger disabled className="w-full">
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FOUNDER">Fundador</SelectItem>
                        <SelectItem value="SPONSOR">Patrocinador</SelectItem>
                        <SelectItem value="COLLABORATOR">
                          Colaborador
                        </SelectItem>
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
                defaultValue={response.data?.extras}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Outras informações
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        disabled
                        placeholder="Informações adicionais"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />

              <div className="space-y-2">
                <h3 className="text-md font-medium">Endereço</h3>

                <FormField
                  control={form.control}
                  defaultValue={response.data?.user?.address?.street}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Rua
                      </FormLabel>
                      <FormControl>
                        <Input disabled placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.number"
                  defaultValue={response.data?.user?.address?.number}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Número
                      </FormLabel>
                      <FormControl>
                        <Input disabled placeholder="0000" {...field} />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address.neighborhood"
                  defaultValue={response.data?.user?.address?.neighborhood}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Bairro
                      </FormLabel>
                      <FormControl>
                        <Input disabled placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  defaultValue={response.data?.user?.address?.complement}
                  name="address.complement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Complemento
                      </FormLabel>
                      <FormControl>
                        <Input
                          disabled
                          placeholder="Apartamento, bloco..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-md font-medium">Filiação</h3>

                <FormField
                  defaultValue={response.data?.user?.responsible?.mother}
                  control={form.control}
                  name="responsible.mother"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Nome da Mãe
                      </FormLabel>
                      <FormControl>
                        <Input disabled placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  defaultValue={response.data?.user?.responsible?.father}
                  name="responsible.father"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="data-[error=true]:text-destructive">
                        Nome do Pai
                      </FormLabel>
                      <FormControl>
                        <Input disabled placeholder="" {...field} />
                      </FormControl>
                      <FormMessage className="text-right text-destructive" />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        )}
      </SheetContent>
    </Sheet>
  );
}
