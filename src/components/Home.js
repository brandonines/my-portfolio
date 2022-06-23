import React from "react";
import image from "./images/brad-knight-huWlb1NP67w-unsplash.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Chicago" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-8xl text-neutral-50 lora leading-none lg:leading-snug">Hi, I'm Brandon.</h1>
            </section>
        </main>
    )
}