import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddProjectModal = () => {
  const [projectName, setProjectName] = useState("");

  const handleSaveProject = () => {
    // Logic to save project
    console.log("Project saved:", projectName);
    setProjectName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <Input
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project name"
        />
        <DialogFooter>
          <Button variant="outline" onClick={() => setProjectName("")}>Cancel</Button>
          <Button onClick={handleSaveProject}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddProjectModal;