import React from "react";
import SbEditable from "storyblok-react";

const FeaturedPosts = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="py-8 mb-6 container mx-auto text-left" key={blok._uid}>
        <div className="relative">
          <h2 className="relative font-serif text-4xl z-10 text-primary">
            {blok.title}
          </h2>
        </div>
        <ul>
          {blok.posts.map((post) => (
            <li className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white">
              <div className="flex justify-between items-center">
                <span className="font-light text-gray-600">
                  {`
            ${new Date(post.created_at).getDay()}.
            ${new Date(post.created_at).getMonth()}.
            ${new Date(post.created_at).getFullYear()}`}
                </span>
              </div>
              <div className="mt-2">
                <a
                  className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                  href={`/${post.full_slug}`}
                >
                  {post.content.title}
                </a>
                <p className="mt-2 text-gray-600">{post.content.intro}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <a
                  className="text-blue-600 hover:underline"
                  href={`/${post.full_slug}`}
                >
                  Read more
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SbEditable>
  );
};

export default FeaturedPosts;
