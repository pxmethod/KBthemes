<React.Fragment>
  {(() => {
    class Login extends React.PureComponent {
      constructor(props) {
        super(props);
      }

      render() {
        const { data } = this.props;

        return (
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
              <div className="login-buttons-container">
                <div className="login-buttons-form">
                  <h1 className="login-header">
                    <Snippet id="sn.kustomer.themebuilder.login_welcome_text" />
                  </h1>
                  <LoginForm data={data} />
                </div>
              </div>
            </section>
            <ContactUs data={findSection(data.org.manifest, "contactUs")} />
            <Footer data={findSection(data.org.manifest, "footer")} />
          </main>
        );
      }
    }

    Login.defaultProps = {
      data: {},
      org: {},
    };

    return React.createElement(Login, {
      data,
      org,
    });
  })()}
</React.Fragment>;
