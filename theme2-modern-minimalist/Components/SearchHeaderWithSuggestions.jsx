<React.Fragment>
  {(() => {
    class SearchHeaderWithSuggestions extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          query: "",
          articles: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.debounce = this.debounce.bind(this);
        this.fetchQuery = this.debounce(this.fetchQuery, 500);
        this.getTransformedNavigatorLang = this.getTransformedNavigatorLang.bind(
          this
        );
      }

      debounce(func, wait, immediate) {
        var timeout;
        return function () {
          var context = this,
            args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

      getTransformedNavigatorLang() {
        let browserLang = "";
        if (navigator.languages && navigator.languages.length) {
          browserLang = navigator.languages[0];
        } else {
          browserLang =
            navigator.userLanguage ||
            navigator.language ||
            navigator.browserLanguage ||
            "en";
        }
        const langSplit = browserLang.toLowerCase().split("-");
        const result = langSplit.join("_");
        return result;
      }

      fetchQuery(query) {
        const { org, domain } = this.props;
        const navigatorLang = this.getTransformedNavigatorLang();
        const langQuery = navigatorLang ? `&lang=${navigatorLang}` : "";
        const url = `https://${
          org.name
        }.api.${domain}/p/v1/kb/deflection/search?term=${encodeURIComponent(
          query
        )}${langQuery}`;

        return fetch(url)
          .then((res) => res.json())
          .then((response) => {
            const results = response.data;

            if (results) {
              const firstFiveResults = results.slice(0, 5);
              this.setState({ articles: firstFiveResults });
            }
          })
          .catch((err) => {
            console.log("err", err);
            return err;
          });
      }

      handleChange(e) {
        const query = e.target.value;
        this.setState({
          query,
        });

        this.fetchQuery(query);
      }

      renderResults() {
        const { articles } = this.state;

        if (!articles.length) return null;

        return (
          <div className="form-suggestion">
            <div className="form-suggestion-label">
              <Snippet id="sn.kustomer.suggested_articles" />
            </div>
            {articles.map((article) => {
              const slug = _.get(article, "attributes.slug");
              const hash = _.get(article, "attributes.hash");
              const title = _.get(article, "attributes.title");
              const url = `/${slug}-${hash}`;

              return (
                <div className="form-suggestion-article" key={hash}>
                  <a href={url}>{title}</a>
                </div>
              );
            })}
          </div>
        );
      }

      renderHeroImage() {
        const { HeroImage } = this.props;
        const heroImage = _.get(data, "variables.heroImage.value");
        const overlayOpacity = _.get(data, "variables.overlayOpacity.value");

        if (!HeroImage) return null;
        
        return <HeroImage heroImage={heroImage} opacity={overlayOpacity} />;
      }

      renderPlaceholder() {
        const promptText = _.get(data, "variables.promptText.value");
        let placeholderClassName = "form-control-search-placeholder searchBar-promptText";
        if (this.state.query) {
          placeholderClassName += " hide";
        }

        return (
          <div className={placeholderClassName}>
            {eval(promptText) || snippet("sn.kustomer.search_kb")}
          </div>
        );
      }

      renderInput() {
        return (
          <input
            className="form-control form-control-search"
            id="searchInput"
            name="q"
            value={this.state.query}
            onChange={this.handleChange}
            aria-label={snippet('sn.kustomer.search_kb')}
          />
        );
      }

      render() {
        const primaryMessage = _.get(data, "variables.primaryMessage.value");
        const secondaryMessage = _.get(
          data,
          "variables.secondaryMessage.value"
        );
        const overlayTextColor = _.get(
          data,
          "variables.overlayTextColor.value"
        );
        const overlayColor = _.get(data, "variables.overlayColor.value");

        return (
          <header
            className="nav-main-text searchBar-overlayColor"
            style={{ backgroundColor: overlayColor }}
          >
            {this.renderHeroImage()}
            <div className="container">
              <div className="container-header">
                <h2
                  style={{ color: overlayTextColor }}
                  className="header-primaryMessage searchBar-primaryMessage searchBar-overlayTextColor"
                >
                  {eval(primaryMessage)}
                </h2>
                <h3
                  style={{ color: overlayTextColor }}
                  className="header-secondaryMessage searchBar-secondaryMessage searchBar-overlayTextColor"
                >
                  {eval(secondaryMessage)}
                </h3>
              </div>
              <form
                className="form-control-search-wrap"
                action={`${paths.search}?q=`}
                method="GET"
              >
                <label htmlFor="searchInput" hidden>
                  <Snippet id="sn.kustomer.search" />
                </label>
                <i className="icon-search mdi mdi-magnify" aria-hidden="true"></i>
                {this.renderInput()}
                {this.renderPlaceholder()}
                {this.renderResults()}
              </form>
            </div>
          </header>
        );
      }
    }

    SearchHeaderWithSuggestions.defaultProps = {
      paths: {},
      org: {},
      data: {},
      domain: "",
      HeroImage: undefined,
    };

    return React.createElement(SearchHeaderWithSuggestions, {
      paths,
      org,
      data,
      domain,
      HeroImage,
    });
  })()}
</React.Fragment>;
