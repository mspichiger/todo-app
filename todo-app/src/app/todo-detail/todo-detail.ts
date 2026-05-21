import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.scss',
})
export class TodoDetail {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
}