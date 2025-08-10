"use client"

import { createContext, useContext, useReducer, useEffect } from "react";
import { tarefasReducer } from "@/lib/TarefasReducer";
import { Tarefa } from "@/types/tarefa";

const STORAGE_KEY = "tarefas";
const TarefasContext = createContext<any>(null);

export function TarefasProvider({ children }: { children: React.ReactNode }) {
  const [tarefas, dispatch] = useReducer(tarefasReducer, [] as Tarefa[]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      dispatch({ type: "carregar", tarefas: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <TarefasContext.Provider value={{ tarefas, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}