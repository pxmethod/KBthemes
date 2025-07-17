<main className="main-layout">
  <Announcement
    data={findSection(data.org.manifest, "announcement")}
    template={data.template}
  />
  <Nav
    data={findSection(data.org.manifest, "header")}
    settings={org.settings}
  />
  <section className="container-home">
    <SearchHeader
      left={
        <div>
          <h2 className="category-title">{category.title}</h2>
          <div className="category-description">{category.description}</div>
        </div>
      }
    />
    <div className="category-col-wrap">
      <div className="category-right">
        {category.children.length ? (
          <div className="subheader-label">
            <Snippet id="sn.kustomer.categories" />
          </div>
        ) : null}
        <div className="category-wrap-left-aligned">
          {category.children &&
            category.children.map((subcat) => (
              <SubcategoryItem key={subcat.id} {...subcat} />
            ))}
        </div>
        {!articles.length && !(category.children && category.children.length) && (
          <div className="no-categories-wrap">
            <Snippet id="sn.kustomer.no_categories" />
            <a href={paths.homepage} className="link-return">
              {" "}
              <Snippet id="sn.kustomer.home" />
            </a>
            .
          </div>
        )}
        {articles.length ? (
          <div>
            <div className="subheader-label">
              <Snippet id="sn.kustomer.articles" />
            </div>
            <ul className="article-wrap list-unstyled" role="menu">
              {articles
                .filter((art) => art.body && art.title)
                .map((article) => (
                  <ArticleItem key={article.id} category={null} {...article} />
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  </section>
  <ContactUs data={findSection(data.org.manifest, "contactUs")} />
  <Footer data={findSection(data.org.manifest, "footer")} />
</main>;
