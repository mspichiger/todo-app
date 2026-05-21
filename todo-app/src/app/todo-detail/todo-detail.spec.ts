import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { TodoDetail } from './todo-detail';

describe('TodoDetail', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([
          { path: 'todos/:id', component: TodoDetail },
        ]),
      ],
    }).compileComponents();
  });

  it('should create', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/todos/ABC', TodoDetail);
    expect(component).toBeTruthy();
  });

  it('should render the id from the route parameter in the DOM', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/todos/ABC', TodoDetail);

    expect(harness.routeNativeElement?.textContent).toContain('ABC');
  });
});
