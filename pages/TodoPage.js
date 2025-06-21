export class TodoPage {
    constructor(page) {
      this.page = page;
      this.newTodoInput = page.locator('.new-todo');
      this.todoItems = page.locator('.todo-list li');
    }
  
    async goto() {
      await this.page.goto('https://todomvc.com/examples/react/dist/');
    }
  
    async addTodo(text) {
      await this.newTodoInput.fill(text);
      await this.newTodoInput.press('Enter');
    }
  
    async getTodos() {
      return this.todoItems.allTextContents();
    }
  }
  