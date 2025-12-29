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
      setError("無法載入文章，請稍後再試");
      setLoading(false);
      console.error("Error fetching WordPress posts:", err);
    }
  };

  const getFilteredPosts = () => {
    if (filter === "all") return posts;
    // 可以根據分類篩選，WordPress API 會提供 categories 資訊
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
            全部文章
          </button>
          <button
            className={filter === "tech" ? "active" : ""}
            onClick={() => setFilter("tech")}
          >
            技術文章
          </button>
          <button
            className={filter === "life" ? "active" : ""}
            onClick={() => setFilter("life")}
          >
            生活隨筆
          </button>
        </div>

        {loading && (
          <div className="blog-loading">
            <p>載入中...</p>
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
              <p className="no-posts">目前沒有文章</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
