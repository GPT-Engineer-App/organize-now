import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTaskInput = () => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    // Logic to add task
    console.log("Task added:", task);
    setTask("");
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a task"
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;