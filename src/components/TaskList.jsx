import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, label: "Task 1", dueDate: "2023-10-01" },
    { id: 2, label: "Task 2", dueDate: "2023-10-02" },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox />
            <span>{task.label}</span>
            {task.dueDate && <span className="text-muted-foreground">({task.dueDate})</span>}
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => handleDelete(task.id)}>
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;