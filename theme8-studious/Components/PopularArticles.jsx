const PopularArticles = () => {
  const articles = [
    {
      category: "Get Started",
      title: "Account Setup",
      author: "Jane Moore"
    },
    {
      category: "Accounts",
      title: "User Roles and Permissions",
      author: "Jane Moore"
    },
    {
      category: "Get Started",
      title: "Initial Configuration",
      author: "John Taylor"
    },
    {
      category: "Property Listings",
      title: "Managing Property Availability",
      author: "David Johnson"
    },
    {
      category: "Get Started",
      title: "Introduction",
      author: "David Johnson"
    },
    {
      category: "Get Started",
      title: "User Onboarding",
      author: "John Taylor"
    }
  ];

  return (
    <section className="articles-section">
      <div className="container">
        <h2 className="section-title">Popular articles</h2>
        <div className="articles-grid">
          {articles.map((article, index) => (
            <a key={index} href={`/article/${index + 1}`} className="article-card">
              <div className="article-category">{article.category}</div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-author">Written by {article.author}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArticles; 