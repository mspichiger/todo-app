import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Todo, TodoStatus } from '../models/todo';
import { TodoService } from '../services/todo.service';
import { map, tap } from 'rxjs';

@Component({
    selector: 'app-todo-form',
    imports: [ReactiveFormsModule, RouterLink],
    templateUrl: './todo-form.html',
    styleUrl: './todo-form.css',
})
export class TodoForm implements OnInit {
    private fb = inject(FormBuilder);
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private todoService = inject(TodoService);

    // id aus der URL: null => neue Aufgabe , sonst bestehende Aufgabe bearbeiten
    id: number | null = null;

    readonly statusOptions: { value: TodoStatus; label: string }[] = [
        { value: 'OPEN', label: 'Offen' },
        { value: 'IN_PROGRESS', label: 'In Bearbeitung' },
        { value: 'DONE', label: 'Erledigt' },
    ];

    form = this.fb.nonNullable.group({
        title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
        description: ['', [Validators.maxLength(2000)]],
        assignTo: ['', [Validators.required, Validators.minLength(2)]],
        status: ['OPEN' as TodoStatus, [Validators.required]],
    });

    get isEditMode(): boolean {
        return this.id !== null;
    }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam !== null) {
            this.id = Number(idParam);
            // Bsp.
            const existing: Todo = {
                id: this.id,
                title: `Aufgabe ${this.id}`,
                description: '',
                assignTo: '',
                status: 'OPEN',
            };
            var x = this.todoService.getById(this.id).pipe(map(todo => todo.title), tap(console.log));
            this.todoService.getById(this.id).subscribe(todo => this.form.patchValue(todo))
            this.form.patchValue(existing);
        }
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const value = this.form.getRawValue();

        if (this.isEditMode) {
            // PUT /api/todos/{id} – Rolle UPDATE_TODO
            const updated: Todo = { id: this.id!, ...value };
            console.log('Update Todo', updated);
        } else {
            // POST /api/todos – Rolle UPDATE_TODO
            const created: Omit<Todo, 'id' | 'createdAt'> = value;
            console.log('Create Todo', created);
        }

        this.router.navigate(['/todos']);
    }
}
