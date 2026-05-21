import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAdmin } from './todo-admin';

describe('TodoAdmin', () => {
  let component: TodoAdmin;
  let fixture: ComponentFixture<TodoAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
