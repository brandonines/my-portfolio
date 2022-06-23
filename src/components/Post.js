import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                author,
                description,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return(
    <main className="bg-slate-50 min-h-screen p-12 lato">
      <section className="container mx-auto px-8 md:px32 lg:px-64">
        <h1 className="text-5xl flex justify-center lora mt-10 mb-20">Blog Posts</h1>
        <div className="grid grid-cols-1 gap-8">
            {postData && postData.map((post, index) => (
              <article key={index}>
                <div className="flex justify-between h-48 relative leading-snug mb-12">
                  <div className="mr-20">
                    <Link to={"/posts/" + post.slug.current} key={post.slug.current} className="hover:text-orange-300 font-semibold transition delay-85 duration-300 ease-in-out">
                      <h3 className="text-lg lora px-3 mb-3">
                          {post.title}
                      </h3>
                      <p className="lato font-light px-3 text-neutral-900 hover:text-neutral-900">
                        {post.description}
                      </p>
                    </Link>
                  </div>
                  <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-80 h-full rounded object-cover"
                  />
                </div>
                <div class="relative flex py-5 items-center">
                    <div class="flex-grow border-t border-gray-300"></div>
                </div>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
