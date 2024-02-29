import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Project, projectInfo } from "./ProjectInfo";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<Project>()


  useEffect(() => {
    if (projectId) {
      setProject(projectInfo[parseInt(projectId!, 10)]);
    }
  }, [projectId]);

  return (
    <div>{project?.name}</div>
  )
}
