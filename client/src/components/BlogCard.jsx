import axios from 'axios';
import React, { useEffect } from 'react'
const defaultThumbnail = "https://images.unsplash.com/photo-1710595638861-a6f9680649b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const defaultAvatar = "https://th.bing.com/th/id/R.7ea4af7d8401d2b43ee841bfa2abe89d?rik=xidyUKdveUKULQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-download-icons-logos-emojis-users-2240.png&ehk=2%2bOqgdMZqFkKaBclc%2fPL9B86vLju3iBGiFmH64kXaTM%3d&risl=&pid=ImgRaw&r=0";

const BlogCard = ({post}) => {
  const [user, setUser] = React.useState({});

  useEffect(() => {
    getUser(post.author);
  },[]);

  const getUser = async (id) => {
    try {
      const response = await axios.get(`api/user/${id}`);
      setUser(response.data);
    } catch (error) {
      console.error(error);
      return error;
    }
    
  }
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <img src={post.thumbnail ? "http://localhost:5000/" + post.thumbnail : defaultThumbnail} className="rounded-lg" alt="blogThumbnail" />
        </div>
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.publishedAt}
                  </time>
                  {/* <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a> */}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.content}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={user.avatar ? user.avatar : defaultAvatar } alt="author" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="#">
                        <span className="absolute inset-0" />
                        {user.username}
                      </a>
                    </p>
                    {/* <p className="text-gray-600">{post.author.role}</p> */}
                  </div>
                </div>
              </article>
    </div>
  )
}

export default BlogCard