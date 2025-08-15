import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="h-screen flex flex-col items-center justify-center">
        <Card className="text-center w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Bem-vindo ao Gerenciador de Tarefas</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/tarefas">
              <Button className="mb-4 bg-gray-800">Click aqui para começar a administração.</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
