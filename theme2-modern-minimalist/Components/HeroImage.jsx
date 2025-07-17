<React.Fragment>
  {(() => {
    class HeroImage extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          searchTerm: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
      }

      handleInputChange(e) {
        this.setState({ searchTerm: e.target.value });
      }

      handleSubmit(e) {
        e.preventDefault();
        const { searchTerm } = this.state;
        if (searchTerm.trim()) {
          window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
        }
      }

      handleKeyDown(e) {
        if (e.key === 'Enter') {
          this.handleSubmit(e);
        }
      }

      render() {
        const { data } = this.props;
        const { searchTerm } = this.state;
        
        const title = _.get(data, "variables.heroTitle.value", "How can we help you?");
        const subtitle = _.get(data, "variables.heroSubtitle.value", "Find answers to your questions quickly and easily");
        const searchPlaceholder = _.get(data, "variables.searchPlaceholder.value", "Search for articles...");
        const heroImage = _.get(data, "variables.heroImage.value", "");
        const opacity = _.get(data, "variables.overlayOpacity.value", 80);

        return (
          <section className="mm-hero-section">
            <div 
              className="mm-hero-background"
              style={{
                backgroundImage: heroImage ? `url(${heroImage})` : 'none',
                opacity: opacity / 100,
              }}
            />
            <div className="mm-container">
              <div className="mm-hero-content">
                <h2 className="mm-hero-title">{eval(title)}</h2>
                <p className="mm-hero-subtitle">{eval(subtitle)}</p>
                
                {/* Search Bar */}
                <div className="mm-search-container">
                  <form className="mm-search-form" onSubmit={this.handleSubmit}>
                    <div className="mm-search-input-wrapper">
                      <svg 
                        className="mm-search-icon" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="M21 21l-4.35-4.35"></path>
                      </svg>
                      <input 
                        type="search" 
                        name="q" 
                        className="mm-search-input" 
                        placeholder={searchPlaceholder}
                        value={searchTerm}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleKeyDown}
                        autoComplete="off"
                        aria-label="Search help articles"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );
      }
    }

    HeroImage.defaultProps = {
      data: {},
      template: "",
    };

    return React.createElement(HeroImage, { data, template });
  })()}
</React.Fragment>;
