import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'
import { ProjectsType } from '../../../sanity/typings'

interface ProjectProps {
    project: ProjectsType
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="relative z-10 flex flex-col justify-between bg-black dark:bg-white text-white dark:text-black hover:-translate-y-2.5 transition ease-in-out duration:300 hover:transition hover:ease-in-out hover:duration-300 rounded-xl shadow-2xl w-[100%] max-w-[300px] min-h-[400px] animate-fadeUp">
        <div className="absolute -z-10 -left-[10px] -bottom-[10px] border-b-2 border-l-2 border-black dark:border-white rounded-2xl shadow-lg w-[100%] max-w-[300px] h-full"></div>        
        <div className='px-4'>
            <Link href={project.repository} target="_blank" className="flex justify-between items-center font-semibold hover:scale-[1.03] transition ease-in-out duration:300 hover:transition hover:ease-in-out hover:duration-300 cursor-pointer py-4">
                <p>View Repository</p>
                <BiLinkExternal className=''/>
            </Link>
            <h3 className="text-3xl">
                {project.name}
            </h3>
            <p className="text-xs py-2">
                {project.date}
            </p>
            <p className='text-secondary dark:text-black'>
                {project.details}
            </p>
                <ul className="flex flex-wrap py-4">
                {project.skills.map((skill, index) => (
                    <li key={index} className="bg-secondary text-black rounded-md w-max px-2 mr-2 mb-2">{skill}</li>
                ))}
            </ul>
        </div>

        <Link href={project.deployment} target="_blank" className='bg-accent-1 text-black font-semibold text-center border-2 border-accent-1 transition ease-in-out duration:300 hover:text-white hover:dark:text-primary hover:bg-white hover:transition hover:ease-in-out hover:duration-300 rounded-md cursor-pointer max-w-[90%] p-2 m-4'>View Deployment</Link>
    </div>
  )
}

export default ProjectCard