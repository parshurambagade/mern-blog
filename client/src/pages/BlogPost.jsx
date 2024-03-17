import React from 'react';

const BlogPost = () => {
    const post = {
        title: "Example Blog Post",
        thumbnail: "https://plus.unsplash.com/premium_photo-1707988182167-f1aa7e648d95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "John Doe",
        publishDate: "March 17, 2024",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at blandit sem. Vivamus pulvinar lacus non lacus suscipit bibendum. Nunc vitae lectus facilisis diam efficitur feugiat non in felis. Phasellus lorem nisl, iaculis et porta et, viverra eget elit. Phasellus sodales interdum sem vitae rhoncus. Integer ac lectus vitae lorem sodales viverra ut id ante. Nam aliquet dapibus auctor. Maecenas dictum malesuada leo, ac fringilla elit laoreet ac. Donec semper pulvinar dui, vitae ultrices felis ullamcorper quiLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at blandit sem. Vivamus pulvinar lacus non lacus suscipit bibendum. Nunc vitae lectus facilisis diam efficitur feugiat non in felis. Phasellus lorem nisl, iaculis et porta et, viverra eget elit. Phasellus sodales interdum sem vitae rhoncus. Integer ac lectus vitae lorem sodales viverra ut id ante. Nam aliquet dapibus auctor. Maecenas dictum malesuada leo, ac fringilla elit laoreet ac. Donec semper pulvinar dui, vitae ultrices felis ullamcorper quiLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at blandit sem. Vivamus pulvinar lacus non lacus suscipit bibendum. Nunc vitae lectus facilisis diam efficitur feugiat non in felis. Phasellus lorem nisl, iaculis et porta et, viverra eget elit. Phasellus sodales interdum sem vitae rhoncus. Integer ac lectus vitae lorem sodales viverra ut id ante. Nam aliquet dapibus auctor. Maecenas dictum malesuada leo, ac fringilla elit laoreet ac. Donec semper pulvinar dui, vitae ultrices felis ullamcorper qui",
        likesCount: 25,
        comments: [
            {
                author: "Alice",
                content: "Great post! Thanks for sharing."
            },
            {
                author: "Bob",
                content: "I agree with Alice. This is really helpful information."
            }
        ]
    };
      
    const { title, thumbnail, author, publishDate, content, likesCount, comments } = post;
  return (
    <div className="max-w-4xl mx-auto mt-8">
      {/* Blog Heading */}
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>
      
      {/* Thumbnail */}
      <img src={thumbnail} alt="Thumbnail" className="mb-4" />

      {/* Author and Publish Date */}
      <div className="flex items-center text-gray-600 mb-4">
        <span className="mr-2">By {author}</span>
        <span>&bull;</span>
        <span className="ml-2">{publishDate}</span>
      </div>

      {/* Content */}
      <p className="mb-4">{content}</p>

      {/* Likes Count and Comments */}
      <div className="flex items-center text-gray-600 mb-4">
        <span className="mr-2">{likesCount} Likes</span>
        <span>&bull;</span>
        <span className="ml-2">{comments.length} Comments</span>
      </div>

      {/* Comments Section */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Comments</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">
              <div className="font-semibold">{comment.author}</div>
              <div>{comment.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPost;
