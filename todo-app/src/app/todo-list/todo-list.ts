import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Datenbankmigration durchführen',
      description: 'Schema auf PostgreSQL 17 aktualisieren.',
      assignTo: 'Anna',
      status: 'OPEN',
    },
    {
      id: 2,
      title: 'REST-Endpunkte dokumentieren',
      description: 'Swagger/OpenAPI Beschreibungen ergänzen.',
      assignTo: 'Ben',
      status: 'IN_PROGRESS',
    },
    {
      id: 3,
      title: 'JWT Auth testen',
      description: 'Integrationstests für geschützte Routen schreiben.',
      assignTo: 'Carla',
      status: 'DONE',
    },
  ];

  statusLabel(status: Todo['status']): string {
    switch (status) {
      case 'OPEN': return 'Offen';
      case 'IN_PROGRESS': return 'In Bearbeitung';
      case 'DONE': return 'Erledigt';
    }
  }
}
