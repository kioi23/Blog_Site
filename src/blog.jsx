// This file contains all the blog data
// Keeping data separate makes components reusable and clean

const blog = {
  name: "My Blog",

  // Image URL for the blog logo
  image: "https://via.placeholder.com/150",

  // Short description of the blog
  about: "Welcome to my blog!",

  // Array of blog posts
  posts: [
    {
      id: 1, // Unique ID (important for React keys)
      title: "First Post",
      date: "May 1, 2026",
      preview: "This is my first post..."
    },
    {
      id: 2,
      title: "Second Post",
      date: "May 2, 2026",
      preview: "Another interesting post..."
    }
  ]
};

export default blog;