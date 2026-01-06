import { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchWordPressPosts();
  }, []);

  const fetchWordPressPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://public-api.wordpress.com/rest/v1.1/sites/jasonmablog.wordpress.com/posts/"
      );
      const data = await response.json();
      setPosts(data.posts || []);

      // Extract unique categories from all posts
      const allCategories = new Map();
      (data.posts || []).forEach(post => {
        Object.values(post.categories || {}).forEach(cat => {
          if (!allCategories.has(cat.name)) {
            allCategories.set(cat.name, cat);
          }
        });
      });

      setCategories(Array.from(allCategories.values()));
      setLoading(false);
    } catch (err) {
      setError("Unable to load posts. Please try again later.");
      setLoading(false);
      console.error("Error fetching WordPress posts:", err);
    }
  };

  const getFilteredPosts = () => {
    if (filter === "all") return posts;
    // Filter by category name
    return posts.filter((post) => {
      const postCategories = Object.values(post.categories || {});
      return postCategories.some((cat) => cat.name === filter);
    });
  };

  return (
    <div className="blog-page">
      <div className="title-section">
        <Title title="blog" span="blog" />
      </div>
      <div className="content-section">
        <div className="blog-filter">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              className={filter === category.name ? "active" : ""}
              onClick={() => setFilter(category.name)}
              dangerouslySetInnerHTML={{ __html: category.name }}
            />
          ))}
        </div>

        {loading && (
          <div className="blog-loading">
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="blog-error">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="blog-grid">
            {getFilteredPosts().length > 0 ? (
              getFilteredPosts().map((post) => (
                <BlogCard key={post.ID} post={post} />
              ))
            ) : (
              <p className="no-posts">No posts available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
