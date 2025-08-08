import { Tarefa } from "@/types/tarefa";

export type TarefasAction =
  | { type: "carregar"; tarefas: Tarefa[] }
  | { type: "adicionar"; tarefa: Tarefa }
  | { type: "editar"; tarefa: Tarefa }
  | { type: "remover"; id: string };

export function tarefasReducer(state: Tarefa[], action: TarefasAction): Tarefa[] {
  switch (action.type) {
    case "carregar":
      return action.tarefas;
    case "adicionar":
      return [...state, action.tarefa];
    case "editar":
      return state.map(t =>
        t.id === action.tarefa.id ? action.tarefa : t
      );
    case "remover":
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
}