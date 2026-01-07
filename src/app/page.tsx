"use client";

import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { api } from "../../convex/_generated/api";

const Page = () => {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.create);

  return (
    <div className="flex flex-col gap-2 p-4">
      <Button
        onClick={() =>
          createProject({
            name: "New Project 123",
          })
        }
      >
        Add new
      </Button>

      {projects?.map((project) => (
        <div key={project._id}>
          {project.name} - {project.ownerId}
        </div>
      ))}
    </div>
  );
};

export default Page;
