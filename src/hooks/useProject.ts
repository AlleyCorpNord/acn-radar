import { useEffect, useState } from "react";
import Project from "../types/Project";
import { importContent } from "../helpers/DocumentFetching";

const projectsPath = "content/projects";

/**
 * This hook returns a list of all propjects
 
 * @returns {Project[]} - A list of all projects.
 */
const useProject = (): Project[] => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    importContent<Project>(projectsPath).then((projects) => {
      setProjects(Array.isArray(projects) ? projects : [projects]);
    });
  }, []);

  return projects;
};

export default useProject;
