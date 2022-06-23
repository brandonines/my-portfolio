import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            },
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-black min-h-screen p-12 lato">
            <section className="container mx-auto">
                <h1 className="text-neutral-50 text-6xl flex justify-center my-12 lora">My Projects</h1>
                <section className="grid grid-cols-2 gap-6">
                    {projectData && projectData.map((project,index) => (
                            <article className="relative rounded-lg bg-transparent p-16">
                                <a
                                href={project.link} 
                                rel="noopener noreferrer" 
                                target="_blank"
                                className="block w-full opacity-90 hover:opacity-100 grayscale-70 hover:grayscale-0 transition delay-85 duration-300 ease-in-out"
                                >
                                    <div>
                                        <img
                                            src={project.mainImage.asset.url}
                                            alt={project.mainImage.alt}
                                            className="rounded-lg"
                                        />
                                        <h2 className="my-6 text-lg text-stone-100 leading-relaxed">{project.title}</h2>
                                        <p className="text-stone-200 text-md font-light">
                                            {project.tags.map(tags => (
                                                tags + " "
                                            ))}
                                        </p>
                                    </div>
                                </a>    
                            </article>
                    ))}
                </section>
            </section>
        </main>
    )
}