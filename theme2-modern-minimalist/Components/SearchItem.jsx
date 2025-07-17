<React.Fragment>
  {(() => {
    class SearchItem extends React.Component {
      constructor(props) {
        super(props);

        this.handleClickSearchResult = this.handleClickSearchResult.bind(this);
      }

      handleClickSearchResult(e) {
        const { org, domain, searchBucketId, searchId, lang, articleId, href } =
          this.props;

        if (!e.metaKey) {
          e.preventDefault()
        }

        if (searchBucketId && searchId) {
          const url = `https://${org.name}.api.${domain}/p/v1/kb/article-search-buckets/${searchBucketId}/searches/${searchId}`;

          const articleSearchData = {
            lang,
            articleId,
          };

          return fetch(url, {
            method: "PATCH",
            body: JSON.stringify(articleSearchData),
            headers: {
              "Content-type": "application/json",
            },
          })
            .catch((err) => {
              console.error(err);
            })
            .finally(() => {
              if (!e.metaKey) {
                window.location.href = href;
              }
            })
        }

        if (!e.metaKey) {
          window.location.href = href;
        }
      }

      render() {
        const { href } = this.props

        return (
          <div className="article-item-search">
            <a
              href={href}
              onClick={this.handleClickSearchResult}
              className="article-item-header-wrap"
            >
              <h2 className="article-item-header bold">
                {title}
                {scope === 'internal' && (
                  <Tooltip content={<Snippet id="sn.kustomer.themebuilder.internal_article_icon_tooltip" />}>
                    <i className="mdi mdi-lock article-item-header-icon" aria-hidden="true" />
                  </Tooltip>
                )}
              </h2>
            </a>
            <div className="article-item-time">
              {publishedAt &&
                plugins.moment(publishedAt).format("MMMM D YYYY h:mma")}
            </div>
            <div className="article-item-body">
              <div
                dangerouslySetInnerHTML={{
                  __html: (body || "")
                    .replace(/<(?:.|\n)*?>/gm, "")
                    .slice(0, 160)
                    .concat("..."),
                }}
              />
            </div>
          </div>
        );
      }
    }

    SearchItem.defaultProps = {
      href: "",
      title: "",
      publishedAt: "",
      body: "",
      org: {},
      domain: "",
      searchBucketId: "",
      searchId: "",
      lang: "",
      articleId: "",
      scope: ""
    };

    return React.createElement(SearchItem, {
      href,
      title,
      publishedAt,
      body,
      org,
      domain,
      searchBucketId,
      searchId,
      lang,
      articleId,
      scope,
    });
  })()}
</React.Fragment>;
