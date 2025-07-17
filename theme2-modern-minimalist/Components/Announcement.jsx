<React.Fragment>
  {(() => {
    class Announcement extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          showBar: true,
        };

        this.handleClose = this.handleClose.bind(this);
      }

      handleClose() {
        this.setState({ showBar: false });
      }

      renderCta() {
        const { data } = this.props;

        const ctaText = _.get(data, "variables.ctaText.value");
        const ctaLink = _.get(data, "variables.ctaLink.value");
        const ctaTextColor = _.get(data, "variables.ctaTextColor.value");

        return (
          <a
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: ctaTextColor }}
            className="mm-announcement-bar-cta mm-announcement-ctaText mm-announcement-ctaTextColor mm-announcement-ctaLink"
          >
            {eval(ctaText)}
          </a>
        );
      }

      renderCloseIcon() {
        const { data } = this.props;
        const ctaTextColor = _.get(data, "variables.ctaTextColor.value");

        return (
          <i
            className="mdi mdi-close mm-announcement-bar-close"
            onClick={this.handleClose}
            style={{
              color: ctaTextColor,
            }}
            aria-hidden="true"
          />
        );
      }

      renderAnnouncementText() {
        const { data } = this.props;
        const announcementText = _.get(
          data,
          "variables.announcementText.value"
        );
        return (
          <div className="mm-announcement-bar-text mm-announcement-announcementText mm-announcement-textColor">
            {eval(announcementText)}
          </div>
        );
      }

      render() {
        const { data, template } = this.props;
        const { showBar } = this.state;

        const isEnabled = _.get(data, "enabled");
        const backgroundColor = _.get(data, "variables.backgroundColor.value");
        const textColor = _.get(data, "variables.textColor.value", "#ffffff");
        const homepageOnly = _.get(data, "variables.homepageOnly.value");
        const showOnlyOnHomepage =
          (homepageOnly && template !== "homepage") || !showBar || !isEnabled
            ? "none"
            : "flex";

        return (
          <div
            id="announcement"
            className="mm-announcement-bar-container mm-announcement-backgroundColor mm-announcement-homepageOnly"
            style={{
              backgroundColor,
              color: textColor,
              display: showOnlyOnHomepage,
            }}
          >
            {this.renderAnnouncementText()}
            {this.renderCta()}
            {this.renderCloseIcon()}
          </div>
        );
      }
    }

    Announcement.defaultProps = {
      data: {},
      template: "",
    };

    return React.createElement(Announcement, { data, template });
  })()}
</React.Fragment>;
