<React.Fragment>
  {(() => {
    class Footer extends React.PureComponent {
      constructor(props) {
        super(props);
        this.renderNavListItem = this.renderNavListItem.bind(this);
        this.renderSocialListItem = this.renderSocialListItem.bind(this);
      }

      renderNavListItem(item, index) {
        const { data } = this.props;

        const navigationLink = _.get(item, "navigationLink.value");
        const navigationText = _.get(item, "navigationText.value");
        const footerPrimaryTextColor = _.get(
          data,
          "variables.footerPrimaryTextColor.value"
        );

        return (
          <li className="footer-list-item" key={`navLink-${index}`} role="listitem">
            <a
              href={getAbsoluteLink(navigationLink)}
              className="footer-links footer-footerPrimaryTextColor"
              style={{ color: footerPrimaryTextColor }}
            >
              {eval(navigationText)}
            </a>
          </li>
        );
      }

      renderSocialListItem(item, index) {
        const { data } = this.props;

        const socialIcon = _.get(item, "socialIcon.value");
        const socialLink = _.get(item, "socialLink.value");
        const footerPrimaryTextColor = _.get(
          data,
          "variables.footerPrimaryTextColor.value"
        );

        return (
          <li className="footer-list-item" key={`${socialIcon}-${index}`} role="listitem">
            <a
              href={getAbsoluteLink(socialLink)}
              className="footer-links footer-footerPrimaryTextColor"
              alt={socialIcon}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: footerPrimaryTextColor }}
            >
              <i className={`mdi mdi-${socialIcon} footer-social-item`} aria-hidden="true" />
            </a>
          </li>
        );
      }

      renderFooterSecondary() {
        const { data } = this.props;
        const copyrightInfo = _.get(data, "variables.copyrightInfo.value");
        const footerSecondaryTextColor = _.get(
          data,
          "variables.footerSecondaryTextColor.value"
        );

        return (
          <div className="footer-container footer-secondary">
            <div
              className="footer-copyright footer-copyrightInfo footer-footerSecondaryTextColor"
              style={{ color: footerSecondaryTextColor }}
            >
              {eval(copyrightInfo)}
            </div>
            <a
              className="footer-powered footer-footerSecondaryTextColor"
              href="https://www.kustomer.com"
              style={{ color: footerSecondaryTextColor }}
            >
              <Snippet id="sn.kustomer.powered_by_kustomer" />
            </a>
          </div>
        );
      }

      render() {
        const { data } = this.props;
        const navigationLinks = _.get(data, "variables.navigation.value", []);
        const socialLinks = _.get(data, "variables.social.value", []);

        const footerBackgroundColor = _.get(
          data,
          "variables.footerBackgroundColor.value"
        );
        const footerPrimaryTextColor = _.get(
          data,
          "variables.footerPrimaryTextColor.value"
        );

        return (
          <footer
            className="footer footer-footerBackgroundColor"
            style={{ backgroundColor: footerBackgroundColor }}
          >
            <div className="wrap">
              <div className="footer-back-top-container">
                <a
                  href="#top"
                  className="footer-back-to-top footer-footerPrimaryTextColor"
                  style={{ color: footerPrimaryTextColor }}
                >
                  <Snippet id="sn.kustomer.back_to_top" />
                  <i
                    className="mdi mdi-arrow-up footer-back-to-top-arrow footer-footerPrimaryTextColor"
                    style={{ color: footerPrimaryTextColor }}
                    aria-hidden="true"
                  />
                </a>
              </div>
              <ul className="list-unstyled" role="menu">
                {navigationLinks.map(this.renderNavListItem)}
              </ul>
              <ul className="list-unstyled footer-social-container" role="menu">
                {socialLinks.map(this.renderSocialListItem)}
              </ul>
              <hr className="hr" />
              {this.renderFooterSecondary()}
            </div>
          </footer>
        );
      }
    }

    Footer.defaultProps = {
      data: {},
    };

    return React.createElement(Footer, { data });
  })()}
</React.Fragment>;
