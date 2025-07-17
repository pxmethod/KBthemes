<React.Fragment>
  {(() => {
    class Nav extends React.PureComponent {
      constructor(props) {
        super(props);

        this.mql = window.matchMedia("screen and (min-width: 768px)");

        this.state = {
          showDesktopMenu: this.mql.matches,
          showMobileMenu: false,
          lockBody: false,
          showUserMenu: false,
        };

        this.handleMediaChange = this.handleMediaChange.bind(this);
        this.handleOpenMobileMenu = this.handleOpenMobileMenu.bind(this);
        this.handleCloseMobileMenu = this.handleCloseMobileMenu.bind(this);
        this.renderNavListItem = this.renderNavListItem.bind(this);
        this.handleLockBody = this.handleLockBody.bind(this);
        this.handleToggleAccountMenu = this.handleToggleAccountMenu.bind(this);
        this.handleOnClickUserMenu = this.handleOnClickUserMenu.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }

      componentDidMount() {
        try {
          // Chrome & Firefox
          this.mql.addEventListener(
            "change",
            _.throttle(this.handleMediaChange)
          );
        } catch (e) {
          try {
            // Safari
            this.mql.addListener(_.throttle(this.handleMediaChange));
          } catch (err) {
            console.error(err);
          }
        }

        document.addEventListener('mousedown', this.handleClickOutside);
      }

      componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }

      handleMediaChange(mediaQueryEvent) {
        const { showMobileMenu } = this.state;
        this.setState({ showDesktopMenu: mediaQueryEvent.matches });

        if (mediaQueryEvent.matches && showMobileMenu) {
          this.handleCloseMobileMenu();
        }
      }

      handleOpenMobileMenu() {
        document.body.classList.add("lock-body");
        this.setState({ showMobileMenu: true });
      }

      handleCloseMobileMenu() {
        document.body.classList.remove("lock-body");
        this.setState({ showMobileMenu: false });
      }

      handleLockBody() {
        this.setState(
          (prevState) => ({ lockBody: !prevState.lockBody }),
          () => {
            if (this.state.lockBody) {
              document.body.classList.add("lock-body");
            } else {
              document.body.classList.remove("lock-body");
            }
          }
        );
      }

      handleToggleAccountMenu() {
        this.setState((prevState) => {
          return {
            showUserMenu: !prevState.showUserMenu,
          };
        });
      }

      handleOnClickUserMenu(mode) {
        this.handleToggleAccountMenu();

        if (mode === "mobile") {
          this.handleLockBody();
        }
      }

      handleClickOutside(event) {
        if (this.userMenu && !this.userMenu.contains(event.target)) {
          this.setState({ showUserMenu: false });
        }
      }

      renderAccountList(mode) {
        const { settings } = this.props;
        const { showUserMenu } = this.state;

        if (!showUserMenu) return null;

        let listItemClassName = "mm-nav-account-list-item";
        if (mode === "mobile") {
          listItemClassName += " mm-nav-list-item mm-nav-list-item-mobile";
        }

        const lang = _.get(settings, 'lang');
        const pageReset = replaceUrlParam(window.location.search, 'page', '1');
        const conversationsHref = `/${lang}/conversations${replaceUrlParam(pageReset, 'q', '')}`;

        return (
          <ul className="mm-nav-account-list-container" role="menu">
            {
              _.get(settings, "customer") && (
                <li className={listItemClassName}>
                  <a href={conversationsHref} className="mm-nav-account-link mm-nav-account-link-conversations">
                    <Snippet id="sn.kustomer.themebuilder.conversations_primary_text_value" />
                  </a>
                </li>
              )
            }
            <li className={listItemClassName}>
              <a className="mm-nav-account-link mm-nav-account-link-logout" href={`/logout${window.location.search}`}>
                <Snippet id="sn.kustomer.themebuilder.logout_text" />
              </a>
            </li>
          </ul>
        );
      }

      renderLoginOrUserMenu(mode) {
        const { settings } = this.props;
        const { showUserMenu } = this.state;

        const direction = showUserMenu ? "up" : "down";
        const isPortalEnabled = _.get(settings, "portalSettings.enabled", false);
        const internalModeEnabled = _.get(settings, "portalSettings.internalModeEnabled", false);
        const customer = _.get(settings, "customer") || _.get(settings, "agent");

        if (!isPortalEnabled && !internalModeEnabled) return null;

        if (!customer && isPortalEnabled) {
          return (
            <div className={`nav-account-container ${mode}`}>
              <div className="nav-account">
                <a href="/login" className="nav-account-link nav-account-link-login">
                  <Snippet id="sn.kustomer.themebuilder.login_text" />
                </a>
              </div>
            </div>
          );
        }

        if (customer) {
          const avatarUrl = _.get(customer, "avatarUrl");
          const name = _.get(customer, "name");
          const email = _.get(customer, "email");

          return (
            <div
              key={`UserMenu-${mode}`}
              className={`nav-account-container ${mode}`}
              onClick={() => this.handleOnClickUserMenu(mode)}
              ref={(el) => {
                if (mode === "desktop") {
                  this.userMenu = el;
                }
              }}
            >
              <div className="nav-account">
                {avatarUrl && (
                  <img src={avatarUrl} className="nav-avatar" alt="avatar-icon" />
                )}
                <div className="nav-account-name">{name || email}</div>
                <i
                  className={`mdi mdi-menu-${direction} nav-menu-${direction}-icon nav-menu-icon`}
                  aria-hidden="true"
                />
              </div>
              {this.renderAccountList(mode)}
            </div>
          );
        }
        
        return null;
      }

      renderLogo() {
        const { settings } = this.props;
        const logo = _.get(settings, "logo");

        return (
          <div className="mm-nav-flex">
            {logo && (
              <a href="/" id="top">
                <img src={logo} className="mm-header-logo" alt="Homepage" />
              </a>
            )}
          </div>
        );
      }

      renderMobileNav() {
        const { showMobileMenu } = this.state;

        const iconType = showMobileMenu ? "mdi-close" : "mdi-menu";
        const iconOnClick = showMobileMenu
          ? this.handleCloseMobileMenu
          : this.handleOpenMobileMenu;

        return (
          <nav className="mm-nav">
            <div className="mm-container">
              {this.renderLogo()}
              <div className="mm-nav-flex">
                <i
                  className={`mdi ${iconType} mm-nav-mobile-menu-icon`}
                  onClick={iconOnClick}
                  aria-hidden="true"
                />
                {this.renderLoginOrUserMenu("mobile")}
              </div>
            </div>
            {showMobileMenu && this.renderNavList()}
          </nav>
        );
      }

      renderNavListItem(item, index) {
        const { showMobileMenu } = this.state;

        const navigationLink = _.get(item, "navigationLink.value");
        const navigationText = _.get(item, "navigationText.value");
        const navListItemClassname = showMobileMenu
          ? "mm-nav-list-item mm-nav-list-item-mobile"
          : "mm-nav-list-item";

        return (
          <li
            className={navListItemClassname}
            key={`navLink-${index}`}
            role="listitem"
          >
            <a href={getAbsoluteLink(navigationLink)} className="header-links">
              {eval(navigationText)}
            </a>
          </li>
        );
      }

      renderNavList() {
        const { data } = this.props;
        const { showMobileMenu } = this.state;

        const navigationLinks = _.get(data, "variables.navigation.value", []);
        const navListClassname = showMobileMenu
          ? "nav-list header-navigation nav-list-mobile"
          : "nav-list header-navigation";

        return (
          <ul
            id="header-navigation"
            className={navListClassname}
            data-header-navigation
            role="menu"
          >
            {navigationLinks.map(this.renderNavListItem)}
            <LanguageSelect className="language-select" />
            {this.renderLoginOrUserMenu("desktop")}
          </ul>
        );
      }

      renderDesktopNav() {
        return (
          <nav className="mm-nav">
            <div className="mm-container">
              {this.renderLogo()}
              <div className="mm-nav-flex">{this.renderNavList()}</div>
            </div>
          </nav>
        );
      }

      render() {
        const { showDesktopMenu } = this.state;

        return showDesktopMenu
          ? this.renderDesktopNav()
          : this.renderMobileNav();
      }
    }

    Nav.defaultProps = {
      data: {},
      settings: {},
    };

    return React.createElement(Nav, { data, settings });
  })()}
</React.Fragment>;
