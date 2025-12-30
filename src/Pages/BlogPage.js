import { useState, useEffect } from "react";
import BlogCard from "../Components/BlogCard";
import Title from "../Components/Title";

function BlogPage() {
  const [posts, setPosts] = useState([]);
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
      setLoading(false);
    } catch (err) {
      setError("Unable to load posts. Please try again later.");
      setLoading(false);
      console.error("Error fetching WordPress posts:", err);
    }
  };

  const getFilteredPosts = () => {
    if (filter === "all") return posts;
    // Filter by category - WordPress API provides category information
    return posts.filter((post) => {
      const categories = Object.values(post.categories || {});
      return categories.some((cat) => cat.slug === filter);
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
          <button
            className={filter === "tech" ? "active" : ""}
            onClick={() => setFilter("tech")}
          >
            Tech Articles
          </button>
          <button
            className={filter === "life" ? "active" : ""}
            onClick={() => setFilter("life")}
          >
            Life & Thoughts
          </button>
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
