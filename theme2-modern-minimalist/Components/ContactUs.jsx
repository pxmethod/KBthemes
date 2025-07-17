<React.Fragment>
  {(() => {
    class ContactUs extends React.PureComponent {
      constructor(props) {
        super(props);
      }

      renderButton() {
        const { data } = this.props;
        const ctaText = _.get(data, "variables.ctaText.value");
        const ctaLink = _.get(data, "variables.ctaLink.value");

        return (
          <button className="contact-us-button-wrapper">
            <a
              href={ctaLink}
              className="contact-us-button contactUs-ctaText contactUs-ctaLink"
            >
              {eval(ctaText)}
            </a>
          </button>
        );
      }

      render() {
        const { data } = this.props;
        const isEnabled = _.get(data, "enabled");
        const primaryText = _.get(data, "variables.primaryText.value");
        const secondaryText = _.get(data, "variables.secondaryText.value");

        return (
          <section
            id="contactUs"
            className="contact-us-container"
            style={{ display: isEnabled ? "flex" : "none" }}
          >
            <div className="container-home contact-us-container">
              <div className="container-header">
                <h2 className="header-primaryMessage contactUs-primaryText">
                  {eval(primaryText)}
                </h2>
                <h3 className="header-secondaryMessage contactUs-secondaryText">
                  {eval(secondaryText)}
                </h3>
              </div>
              <div className="contact-us-button-section-container">
                {this.renderButton()}
              </div>
            </div>
          </section>
        );
      }
    }

    ContactUs.defaultProps = {
      data: {},
    };

    return React.createElement(ContactUs, { data });
  })()}
</React.Fragment>;
