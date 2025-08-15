"use client";

import { useTarefas } from "@/context/TarefasContext";
import { useRouter, useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ApagarTarefa() {
  const { tarefas, dispatch } = useTarefas();
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;
  const tarefa = tarefas.find(t => t.id === id);

  function handleDelete() {
    dispatch({ type: "remover", id });
    router.push("/tarefas");
  }

  if (!tarefa) return (
    <div>
      <Header />
      <Card>
        <CardHeader>
          <CardTitle>Tarefa não encontrada</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => router.push("/tarefas")}>Voltar</Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div>
      <Header />
      <Card className=" flex flex-col w-150 h-60 justify-center mx-auto mt-54 mb-54">
        <CardHeader>
          <CardTitle className="text-2xl">Apagar Tarefa</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Título:</strong> {tarefa.titulo}</p>
          <p><strong>Descrição:</strong> {tarefa.descricao}</p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Confirmar apagar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta ação não pode ser desfeita. Deseja realmente apagar esta tarefa?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant="destructive" onClick={handleDelete}>Apagar</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button variant="outline" onClick={() => router.push("/tarefas")} className="mt-2 ml-2">Voltar</Button>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
}