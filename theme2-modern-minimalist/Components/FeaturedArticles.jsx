<React.Fragment>
  {(() => {
    class FeaturedArticles extends React.PureComponent {
      constructor(props) {
        super(props);
      }

      render() {
        const { data } = this.props;
        const isEnabled = _.get(data, "enabled");
        const primaryText = _.get(data, "variables.primaryText.value");
        const secondaryText = _.get(data, "variables.secondaryText.value");

        return (
          <section
            id="featuredArticles"
            className="featured-articles-container"
            style={{ display: isEnabled ? "flex" : "none" }}
          >
            <div className="container-home">
              <div className="container-header">
                <h2 className="header-primaryMessage featuredArticles-primaryText">
                  {eval(primaryText)}
                </h2>
                <h3 className="header-secondaryMessage featuredArticles-secondaryText">
                  {eval(secondaryText)}
                </h3>
              </div>
              <ul className="article-wrap list-unstyled" role="menu">
                {featuredArticles.map((article, i) => (
                  <ArticleItem
                    {...article}
                    key={`featured-article=${article.id}-${i}`}
                  />
                ))}
              </ul>
            </div>
          </section>
        );
      }
    }

    FeaturedArticles.defaultProps = {
      data: {},
      featuredArticles: [],
    };

    return React.createElement(FeaturedArticles, { data, featuredArticles });
  })()}
</React.Fragment>;
