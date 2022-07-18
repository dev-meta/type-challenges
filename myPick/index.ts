interface Todo {
  title: string;
  description: string;
  readonly completed: boolean;
}

type MyPick<T, K extends keyof T> = {
    [p in K]: T[p]
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

export const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

