import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpIcon, DatabaseIcon, TableIcon, UserIcon } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/_private/dashboard/")({
  component: RouteComponent,
});

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function RouteComponent() {
  const databaseActivity = [
    { name: "Seg", queries: 400 },
    { name: "Ter", queries: 300 },
    { name: "Qua", queries: 500 },
    { name: "Qui", queries: 280 },
    { name: "Sex", queries: 590 },
    { name: "Sab", queries: 190 },
    { name: "Dom", queries: 90 },
  ];

  const tableDistribution = [
    { name: "Produtos", value: 35 },
    { name: "Usuários", value: 25 },
    { name: "Vendas", value: 20 },
    { name: "Relatórios", value: 20 },
  ];

  return (
    <div className="flex-1 w-full p-10 flex flex-col gap-4 overflow-y-auto h-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Bancos de Dados
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                12
              </CardDescription>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <DatabaseIcon className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">12%</span> do mês
              passado
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Tabelas
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                342
              </CardDescription>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <TableIcon className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">8%</span> do mês
              passado
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Usuários Ativos
              </CardTitle>
              <CardDescription className="text-2xl font-bold">
                56
              </CardDescription>
            </div>
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
              <UserIcon className="h-6 w-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground flex items-center">
              <ArrowUpIcon className="h-3 w-3 mr-1 text-green-500" />
              <span className="text-green-500 font-medium">24%</span> do mês
              passado
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Atividade do Banco de Dados</CardTitle>
            <CardDescription>
              Número de queries por dia na última semana
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={databaseActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="queries" fill="#0284c7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Distribuição de Tabelas</CardTitle>
            <CardDescription>Por tipo de dados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tableDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tableDistribution.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
