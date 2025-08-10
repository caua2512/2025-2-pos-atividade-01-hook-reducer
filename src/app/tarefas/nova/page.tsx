"use client";

import { useState } from "react";
import { useTarefas } from "@/context/TarefasContext";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function NovaTarefa() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const { dispatch } = useTarefas();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: "adicionar",
      tarefa: {
        id: Date.now().toString(),
        titulo,
        descricao,
        concluida: false,
      },
    });
    router.push("/tarefas");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Nova Tarefa</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            placeholder="Título"
            required
          />
          <Textarea
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
            placeholder="Descrição"
            required
          />
          <Button type="submit">Salvar</Button>
        </form>
      </CardContent>
    </Card>
  );
}