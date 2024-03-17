import React, { useState } from 'react';

const AddBlog = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation and submission logic
    const postData = {
      title,
      content,
      thumbnail
    };
    // Call the onSubmit function passed as a prop
    onSubmit(postData);
    // Reset form fields
    setTitle('');
    setContent('');
    setThumbnail('');
  };

  return (
    <div className="px-4 max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Publish Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
          <textarea
            id="content"
            className="border border-gray-300 rounded px-3 py-2 w-full h-48"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-gray-700 font-bold mb-2">Thumbnail</label>
          <input
            type="file"
            id="thumbnail"
            className="border border-gray-300 rounded px-3 py-2 w-full"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
