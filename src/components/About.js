import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "./images/julian-myles-2YGrbLlbz6Y-unsplash.jpg"
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react"

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function About() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`
        )
        .then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>

    return (
        <main className="relative">
            <img src={image} alt="Palm Trees" className="absolute w-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-orange-200 bg-opacity-95 rounded-lg shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()} className="grounded w-32 h-32 lg:w-64 lg:h-64 mr-8 object-cover" alt={author.name}/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="lora text-6xl text-stone-800 mb-4">
                            Brandon Ines
                        </h1>
                        <div className="prose lato font-light lg:prose-xl text-stone-500">
                            <BlockContent blocks={author.bio} projectId="5btmzis4" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}