import { getProjects } from '../../../sanity/utils/fetchData'
import ProjectCard from "./ProjectCard"
import { ProjectsType } from '../../../sanity/typings'

const Project = async () => {
  const projectsData = await getProjects();
  return (
    <div id="projects" className="mb-4">
      <section className="flex flex-col">
        <div className="text-2xl text-white font-semibold text-center underline underline-offset-3 decoration-accent-1 mb-5 mt-16 animate-fadeDown">Projects</div>
        <section className="grid xl:grid-cols-2 lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 auto-rows-auto xl:gap-16 gap-8 mx-auto mt-4">
          {
            projectsData.map((projectData: ProjectsType, index: number) => (
              <ProjectCard key={index} project={projectData}/>
            ))
          }
        </section>
      </section>
    </div>
  )
}

export default Project