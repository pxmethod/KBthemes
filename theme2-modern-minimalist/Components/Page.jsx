<React.Fragment>
  {(() => {
    class Page extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = {};
      }

      render() {
        const { data, template } = this.props;
        
        const siteTitle = _.get(data, "variables.siteTitle.value", "Help Center");
        const homeUrl = _.get(data, "variables.homeUrl.value", "/");
        const showLanguageSelector = _.get(data, "variables.showLanguageSelector.value", true);
        const languages = _.get(data, "variables.languages.value", [
          { code: 'en', label: 'English' },
          { code: 'es', label: 'Español' },
          { code: 'fr', label: 'Français' },
          { code: 'de', label: 'Deutsch' }
        ]);

        return (
          <div className="mm-page">
            {/* Header */}
            <header className="mm-header">
              <div className="mm-container">
                <div className="mm-header-content">
                  <div className="mm-header-left">
                    <h1 className="mm-site-title">{eval(siteTitle)}</h1>
                  </div>
                  <div className="mm-header-right">
                    <nav className="mm-nav">
                      <a href={homeUrl} className="mm-nav-link">
                        {eval(_.get(data, "variables.homeText.value", "Home"))}
                      </a>
                      {showLanguageSelector && (
                        <div className="mm-language-selector">
                          <select 
                            className="mm-language-select"
                            onChange={(e) => {
                              if (e.target.value) {
                                window.location.href = e.target.value;
                              }
                            }}
                          >
                            {languages.map((lang, index) => (
                              <option key={index} value={lang.code}>
                                {lang.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </nav>
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <main className="mm-main">
              {eval(template)}
            </main>

            {/* Footer */}
            <footer className="mm-footer">
              <div className="mm-container">
                <div className="mm-footer-content">
                  <div className="mm-footer-left">
                    <p className="mm-footer-text">
                      {eval(_.get(data, "variables.footerText.value", "© 2024 Your Company. All rights reserved."))}
                    </p>
                  </div>
                  <div className="mm-footer-right">
                    <a href={homeUrl} className="mm-footer-link">
                      {eval(_.get(data, "variables.homeText.value", "Home"))}
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        );
      }
    }

    Page.defaultProps = {
      data: {},
      template: "",
    };

    return React.createElement(Page, { data, template });
  })()}
</React.Fragment>;
