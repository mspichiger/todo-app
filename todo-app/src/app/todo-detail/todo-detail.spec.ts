import { TestBed } from '@angular/core/testing';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { TodoDetail } from './todo-detail';

describe('TodoDetail', () => {
  it('should display todo ID from route parameters', async () => {
    TestBed.configureTestingModule({
      imports: [TodoDetail],
      providers: [provideRouter([{ path: 'todos/:id', component: TodoDetail }])],
    });
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/todos/ABC', TodoDetail);
    expect(harness.routeNativeElement?.textContent).toContain('ABC');
  });
});
