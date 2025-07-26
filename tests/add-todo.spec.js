import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage.js';

test('should add a new todo item', async ({ page }) => {
  const todo = new TodoPage(page);
  await todo.goto();
  await todo.addTodo('Learn POM');
  const todos = await todo.getTodos();
  expect(todos).toContain('Learn POM');
  await todo.addTodo('Learn Playwright');
  const todos2 = await todo.getTodos();
  expect(todos2).toContain('Learn Playwright');
});
