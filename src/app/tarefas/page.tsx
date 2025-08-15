"use client";

import { useTarefas } from "@/context/TarefasContext";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function ListaTarefas() {
  const { tarefas } = useTarefas();

  return (
    <div>
      <Header />
      <Card className="h-screen w-200 mx-auto mt-10 mb-10">
        <CardHeader className="border-b border-gray-800">
          <CardTitle className="font-bold text-3xl text-center mt-5">Lista de Tarefas</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/tarefas/nova">
            <Button className="mb-4">Nova Tarefa</Button>
          </Link>
          <ul className="grid grid-cols-2 gap-4">
            {tarefas.map(tarefa => (
              <div key={tarefa.id} className="flex flex-col items-center gap-2 border rounded-lg p-4 bg-gray-100">
                <span className="font-semibold">{tarefa.titulo}</span>
                <div className="flex gap-2 w-full justify-center">
                  <Link href={`/tarefas/${tarefa.id}`}>
                    <Button variant="secondary" className="w-full">Editar</Button>
                  </Link>
                  <Link href={`/tarefas/${tarefa.id}/apagar`}>
                    <Button variant="destructive" className="w-full">Apagar</Button>
                  </Link>
                </div>
              </div>
            ))}
          </ul>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}