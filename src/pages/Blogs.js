import { allBlogs, NotFound } from "../components";

const Blogs = () => {
  const renderBlogs = () => {
    if (allBlogs.length === 0) {
      return (
        <>
          <NotFound />
        </>
      );
    }
  };

  return (
    <div className='page-wrapper project-page'>
      <h2>Blogs</h2>
      <div>{renderBlogs()}</div>
    </div>
  );
};

export default Blogs;
