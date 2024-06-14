import { createContext, useContext, useState } from 'react';

const Blog = createContext();

const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState();

  return (
    <Blog.Provider
      value={{
        posts,
        setPosts
      }}
    >
      {children}
    </Blog.Provider>
  );
};

export default BlogProvider;
