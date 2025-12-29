import { Link } from "react-router-dom";

function BlogCard({ post }) {
  // Extract excerpt from content (remove HTML tags)
  const getExcerpt = (content, length = 150) => {
    const stripped = content.replace(/<[^>]+>/g, "");
    return stripped.length > length
      ? stripped.substring(0, length) + "..."
      : stripped;
  };

  // Format date to Chinese locale
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get category tags
  const getCategories = () => {
    if (!post.categories) return [];
    return Object.values(post.categories).map((cat) => cat.name);
  };

  return (
    <div className="blog-card">
      {post.featured_image && (
        <div className="blog-card-image">
          <img src={post.featured_image} alt={post.title} />
        </div>
      )}
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-date">{formatDate(post.date)}</span>
          {getCategories().length > 0 && (
            <div className="blog-categories">
              {getCategories().map((cat, index) => (
                <span key={index} className="blog-category">
                  {cat}
                </span>
              ))}
            </div>
          )}
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">
          {getExcerpt(post.excerpt || post.content)}
        </p>
        <div className="blog-card-footer">
          <Link
            className="blog-card-link"
            to={{ pathname: post.URL }}
            target="_blank"
          >
            <button>閱讀更多</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
