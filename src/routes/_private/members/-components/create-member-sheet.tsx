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
import { API } from "@/lib/api";
import { Formatter } from "@/lib/formatter";
import type { Address, Member, Responsible } from "@/lib/model";
import { cn } from "@/lib/utils";
import { QueryClient } from "@/query-client";
import { useMutation } from "@tanstack/react-query";
import { useSearch } from "@tanstack/react-router";
import { format } from "date-fns";
import { CircleIcon, PlusIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Payload {
  name: string;
  cpf: string | null;
  rg: string;
  birthDate: string;
  role: string;
  extras: string | null;
  address: Pick<
    Address,
    "street" | "number" | "complement" | "neighborhood"
  > | null;
  responsible: Pick<Responsible, "mother" | "father">;
}

export function CreateMemberSheet() {
  const { search, page, perPage } = useSearch({
    from: "/_private/members/",
  });

  const [open, setOpen] = React.useState(false);
  const form = useForm();

  const create = useMutation({
    mutationFn: async function (payload: Partial<Payload>) {
      const route = "/administrator/members";
      const { data } = await API.post<Member>(route, payload);
      return data;
    },
    onSuccess() {
      QueryClient.invalidateQueries({
        queryKey: [
          "MEMBERS-LIST-PAGINATED",
          {
            page,
            perPage,
            ...(search && { search }),
          },
        ],
      });

      setOpen(false);
      form.reset();
      toast("Membro cadastrado com sucesso!", {
        className: "!bg-primary !text-primary-foreground !border-primary",
        description: "Os dados do membro foram salvos!",
        descriptionClassName: "!text-primary-foreground",
        closeButton: true,
      });
    },
  });

  const onSubmit = form.handleSubmit(function (payload) {
    create.mutateAsync({
      ...payload,
      cpf: payload.cpf ? Formatter.number(payload.cpf) : null,
      rg: Formatter.number(payload.rg),
      birthDate: format(payload.birthDate, "yyyy-MM-dd"),
      extras: payload.extras || null,
      // address: {
      //   ...payload.address,
      //   number: payload.address.number || null,
      //   complement: payload.address.complement || null,
      // },
      address: null,
      responsible: {
        ...payload.responsible,
        father: payload.responsible.father || null,
      },
    });
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="cursor-pointer">
          <PlusIcon className="size-5" />
          <span>Novo membro</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col py-4 px-6 gap-5 w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader className="px-0">
          <SheetTitle className="text-lg font-medium">
            Adicionar membro
          </SheetTitle>
          <SheetDescription>Adicione um novo membro</SheetDescription>
        </SheetHeader>

        {/* {roles?.status === "error" && <Error />} */}

        {/* {roles?.status === "pending" && <Skeleton />} */}

        <Form {...form}>
          <form className="space-y-4" onSubmit={onSubmit}>
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
                    <span className="text-destructive/80">(obrigatório)</span>
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
              name="rg"
              rules={{
                validate: (value) => {
                  if (!value) return "RG é obrigatório";
                  return true;
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="data-[error=true]:text-destructive">
                    RG
                    <span className="text-destructive/80">
                      (obrigatório, somente números)
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
                      <span className="text-destructive/80">(obrigatório)</span>
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
              name="role"
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
                    <span className="text-destructive/80">(obrigatório)</span>
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
                    <span className="text-muted-foreground/80">(opcional)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea placeholder="Informações adicionais" {...field} />
                  </FormControl>
                  <FormMessage className="text-right text-destructive" />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <h3 className="text-md font-medium">Filiação</h3>

              <FormField
                control={form.control}
                name="responsible.mother"
                rules={{
                  validate: (value) => {
                    if (!value) return "Nome da mãe é obrigatório";
                    return true;
                  },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="data-[error=true]:text-destructive">
                      Nome da Mãe
                      <span className="text-destructive/80">(obrigatório)</span>
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
                      <span className="text-muted-foreground/80">
                        (opcional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage className="text-right text-destructive" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              disabled={create.status === "pending"}
            >
              {create.status === "pending" && (
                <CircleIcon className="mr-2 animate-spin" />
              )}
              <span className="font-semibold">Cadastrar</span>
            </Button>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
