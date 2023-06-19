import { client } from '../lib/client'
import { groq } from 'next-sanity'

export async function getProjects() {
    return client.fetch(
        groq`*[_type == "projects"]{
            _id,
            name,
            "slug": slug.current,
            repository,
            deployment,
            date,
            details,
            skills[]
        }`
    )
}
