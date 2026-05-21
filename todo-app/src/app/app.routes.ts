import { Routes } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { TodoAdmin } from './todo-admin/todo-admin';
import { TodoDetail } from './todo-detail/todo-detail';


export const routes: Routes = [
    { path: 'todos', component: TodoList },
    { path: 'admin', component: TodoAdmin },
    { path: 'todos/:id', component: TodoDetail },
    { path: '', redirectTo: 'todos', pathMatch: 'full' }
];