"use client";

import { useState, useEffect } from "react";
import { useTarefas } from "@/context/TarefasContext";
import { useRouter, useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EditarTarefa() {
  const { tarefas, dispatch } = useTarefas();
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const tarefa = tarefas.find(t => t.id === id);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (tarefa) {
      setTitulo(tarefa.titulo);
      setDescricao(tarefa.descricao);
    }
  }, [tarefa]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch({
      type: "editar",
      tarefa: {
        ...tarefa!,
        titulo,
        descricao,
      },
    });
    router.push("/tarefas");
  }

  if (!tarefa) return (
    <Card>
      <CardHeader>
        <CardTitle>Tarefa não encontrada</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => router.push("/tarefas")}>Voltar</Button>
      </CardContent>
    </Card>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Editar Tarefa</CardTitle>
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