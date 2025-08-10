import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo ao Gerenciador de Tarefas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Aplicativo para gerenciar tarefas usando React, hook reducer e Shadcn UI.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
