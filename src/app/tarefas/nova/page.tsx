"use client";

import { useState } from "react";
import { useTarefas } from "@/context/TarefasContext";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <div className="">
      <Header />
      <Card className=" flex flex-col w-150 h-100 justify-center mx-auto mt-35 mb-35">
        <CardHeader>
          <CardTitle className="text-2xl">Nova Tarefa</CardTitle>
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
              className="h-36"
            />
            <Button type="submit">Salvar</Button>
          </form>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}