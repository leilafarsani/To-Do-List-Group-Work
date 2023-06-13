type Todo = {
  id: string;
  title: string;
  content: string;
  priority: "low" | "medium" | "high";
  complete: boolean;
  createdAt: Date;
  updatedAt: Date;
};
