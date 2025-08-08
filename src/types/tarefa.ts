export type Tarefa = {
    id: string;
    titulo: string;
    descricao: string;
    concluida: boolean;
    dataCriacao: Date;
    dataConclusao?: Date;
}