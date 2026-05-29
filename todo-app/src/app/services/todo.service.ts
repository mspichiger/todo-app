import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo, TodoStatus } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private http = inject(HttpClient);
    private readonly baseUrl = '/api/todos';

    /** GET /api/todos */
    getAll(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.baseUrl);
    }

    /** GET /api/todos/{id} */
    getById(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.baseUrl}/${id}`);
    }

    /** POST /api/todos */
    create(data: Omit<Todo, 'id' | 'createdAt'>): Observable<Todo> {
        return this.http.post<Todo>(this.baseUrl, data);
    }

    /** PUT /api/todos/{id} */
    update(id: number, data: Omit<Todo, 'id' | 'createdAt'>): Observable<Todo> {
        return this.http.put<Todo>(`${this.baseUrl}/${id}`, data);
    }

    /** DELETE /api/todos/{id} */
    remove(id: number): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }

    /** PATCH /api/todos/{id}/status */
    changeStatus(id: number, status: TodoStatus): Observable<Todo> {
        return this.http.patch<Todo>(`${this.baseUrl}/${id}/status`, { status });
    }

    /** PATCH /api/todos/{id}/accept */
    accept(id: number): Observable<Todo> {
        return this.http.patch<Todo>(`${this.baseUrl}/${id}/accept`, {});
    }
}
