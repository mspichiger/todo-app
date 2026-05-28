export type TodoStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

export interface Todo {
    id: number;
    title: string;
    description?: string;
    assignTo: string;
    status: TodoStatus;
    createdAt?: string;
}
