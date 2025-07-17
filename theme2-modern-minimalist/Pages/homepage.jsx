<React.Fragment>
  {(() => {
    class Homepage extends React.PureComponent {
      constructor(props) {
        super(props);
      }

      render() {
        const manifest = data.org.manifest;

        return (
          <main className="main-layout">
            <Announcement
              key="announcement"
              data={findSection(manifest, "announcement")}
              template={data.template}
            />
            <Nav
              key="header"
              data={findSection(manifest, "header")}
              settings={org.settings}
            />
            <SearchHeaderWithSuggestions
              key="searchBar"
              data={findSection(manifest, "searchBar")}
              org={org}
              domain={data.domain}
              HeroImage={HeroImage}
            />
            <CategoriesSection
              key="category"
              data={findSection(manifest, "category")}
              categories={categories}
              CategoryBlock={CategoryBlock}
            />
            <FeaturedArticles
              key="featuredArticles"
              data={findSection(manifest, "featuredArticles")}
              featuredArticles={featuredArticles}
              ArticleItem={ArticleItem}
            />
            <ContactUs
              key="contactUs"
              data={findSection(manifest, "contactUs")}
            />
            <Footer key="footer" data={findSection(manifest, "footer")} />
          </main>
        );
      }
    }

    return React.createElement(Homepage);
  })()}
</React.Fragment>;
