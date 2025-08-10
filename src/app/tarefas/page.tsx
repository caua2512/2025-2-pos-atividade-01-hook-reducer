"use client";

import { useTarefas } from "@/context/TarefasContext";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Tarefas</CardTitle>
      </CardHeader>
      <CardContent>
        <Link href="/tarefas/nova">
          <Button className="mb-4">Nova Tarefa</Button>
        </Link>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa.id} className="mb-2">
              <Link href={`/tarefas/${tarefa.id}`}>
                <Button variant="outline">{tarefa.titulo}</Button>
              </Link>
              {" "}
              <Link href={`/tarefas/${tarefa.id}/apagar`}>
                <Button variant="destructive">Apagar</Button>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}