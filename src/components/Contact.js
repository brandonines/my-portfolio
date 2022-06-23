import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Contact() {
    const [contactData, setContact] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "contact"]{
                    heading,
                    message,
                    email,                  
                }`
        )
        .then((data) => setContact(data))
        .catch(console.error);
    }, []);

    return (
        <main>
            <section className="relative flex justify-center min-h-screen bg-black pt-12 lg:pt-64 lg:px-80 px-32">
                {contactData && contactData.map((contact, index) => (
                    <div className="text-center w-8/12 2xl:px-16" key={index}>
                    <h1 className="text-6xl text-neutral-50 lora leading-none lg:leading-snug">
                        {contact.heading}
                    </h1>
                    <p className="lato text-neutral-200 font-light my-3 text-lg 2xl:px-16">
                        {contact.message}
                    </p>
                    <a
                    href={contact.email}
                    rel="noopener noreferrer" 
                    >
                        <button className="bg-transparent hover:bg-orange-300 text-orange-300 lato hover:bg-opacity-20 py-2 px-4 border border-orange-300 transition delay-85 duration-300 ease-in-out rounded my-3">
                            Say Hello
                        </button>
                    </a>
                    </div>
                ))}
                
            </section>
        </main>
        
    )
}