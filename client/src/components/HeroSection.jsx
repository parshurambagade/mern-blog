import axios from "axios"
import BlogCard from "./BlogCard"
import { useEffect } from "react"
import { setAllPosts } from "../redux/postSlice";
import { useDispatch, useSelector } from 'react-redux';

// const posts = [
//     {
//       id: 1,
//       title: 'Boost your conversion rate',
//       thumbnail:"https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       href: '#',
//       description:
//         'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//       date: 'Mar 16, 2020',
//       datetime: '2020-03-16',
//       category: { title: 'Marketing', href: '#' },
//       author: {
//         name: 'Michael Foster',
//         role: 'Co-Founder / CTO',
//         href: '#',
//         imageUrl:
//           'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//       },
//     },
//     {
//         id: 2,
//         title: 'Boost your conversion rate',
//         thumbnail:"https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         href: '#',
//         description:
//           'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//           name: 'Michael Foster',
//           role: 'Co-Founder / CTO',
//           href: '#',
//           imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//       },
//       {
//         id: 3,
//         title: 'Boost your conversion rate',
//         thumbnail:"https://plus.unsplash.com/premium_photo-1710294627866-6914a34622c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         href: '#',
//         description:
//           'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//         date: 'Mar 16, 2020',
//         datetime: '2020-03-16',
//         category: { title: 'Marketing', href: '#' },
//         author: {
//           name: 'Michael Foster',
//           role: 'Co-Founder / CTO',
//           href: '#',
//           imageUrl:
//             'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//         },
//       },
//     // More posts...
//   ]
  
  export default function HeroSection() {

    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.post.allPosts);
    const accessToken = useSelector(state => state.user.token);
    // console.log(accessToken)
    useEffect(() => {
      getPosts();
    
    },[]);

    const getPosts = async () => {
      try{
        const response = await axios('/api/post/all-posts');
        dispatch(setAllPosts(response.data));
        console.log(response.data);

      }
      catch(err){
        console.error(err);
      }
    }
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {allPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
    )
  }
  