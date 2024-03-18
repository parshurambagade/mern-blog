import axios from "axios"
import BlogCard from "../components/BlogCard"
import { useEffect } from "react"
import { setMyPosts } from "../redux/postSlice";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";

  export default function MyBlogs() {

    const dispatch = useDispatch();
    const myPosts = useSelector(state => state.post.myPosts);
    const accessToken = useSelector(state => state.user.token);
    console.log(accessToken);

    useEffect(() => {
      getPosts();  
    }, []);
    
    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/post/my-posts', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
    
        dispatch(setMyPosts(response.data));
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Here are your all posts
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {myPosts.length ? myPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            )) : <><h2 className="text-3xl">No posts found!</h2>
            <h2 className="text-2xl">Publish your first post <Link to={'/publish'} className="text-blue-700 underline">here</Link></h2></>}

          </div>
        </div>
      </div>
    )
  }
  