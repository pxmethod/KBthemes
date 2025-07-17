<React.Fragment>
  {(() => {
    class Conversations extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          query: _.get(props, 'data.query.q', '')
        }

        this.renderConversationListItem = this.renderConversationListItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
        const query = e.target.value;
        this.setState({
          query,
        });
      }

      renderHeader() {
        const { data } = this.props;
        const { query } = this.state;
        const conversationsPage = _.get(data, "org.manifest.pages.conversations");
        const primaryText = _.get(conversationsPage, "variables.primaryText.value");
        const secondaryText = _.get(conversationsPage, "variables.secondaryText.value");

        const lang = _.get(data, "org.settings.lang");
        const pageReset = replaceUrlParam(window.location.search, 'page', '1');
        const conversationsHref = `/${lang}/conversations${replaceUrlParam(pageReset, 'q', '')}`;

        return (
          <div className="container-header container-header-conversations">
            <h2 className="header-primaryMessage conversations-primaryText">
              {eval(primaryText)}
            </h2>
            <h3 className="header-secondaryMessage conversations-secondaryText">
              {eval(secondaryText)}
            </h3>
            <div className="nav-search nav-search-conversations">
              <form
                className="form-control-search-wrap form-control-search-wrap-conversations"
                action="/conversations?q="
                method="GET"
              >
                <label htmlFor="searchInput" hidden>
                  <Snippet id="sn.kustomer.search" />
                </label>
                <i className="icon-search mdi mdi-magnify" aria-hidden="true" />
                <input
                  className="form-control form-control-search"
                  id="searchInput"
                  name="q"
                  placeholder={snippet("sn.kustomer.themebuilder.search_bar_label")}
                  aria-label={snippet("sn.kustomer.themebuilder.search_bar_label")}
                  value={query}
                  onChange={this.handleChange}
                />
                {query && (
                  <a href={conversationsHref}>
                    <i className="conversations-icon-close mdi mdi-close" aria-hidden="true" />
                  </a>
                )}
              </form>
            </div>
          </div>
        );
      }

      renderStatusFilters() {
        const { data } = this.props;
        const conversationsPage = _.get(data, "org.manifest.pages.conversations");
        const statusFilterBackgroundColor = _.get(conversationsPage, "variables.statusFilterBackgroundColor.value");
        const statusFilterSelectedBackgroundColor = _.get(conversationsPage, "variables.statusFilterSelectedBackgroundColor.value");

        const conversationStatus = _.get(data, 'query.conversationStatus', undefined);
        const allSelected = !conversationStatus;
        const openSelected = conversationStatus === "open";
        const doneSelected = conversationStatus === "done";

        const lang = _.get(data, "org.settings.lang");
        const pageReset = replaceUrlParam(window.location.search, 'page', '1');

        return (
          <div className="container-status-filter">
            <a 
              href={`/${lang}/conversations${replaceUrlParam(pageReset, 'conversationStatus', '')}`} 
              className={`status-filter ${
                allSelected
                  ? "status-filter-active conversations-statusFilterSelectedBackgroundColor"
                  : "conversations-statusFilterBackgroundColor"
              }`}
              style={{
                backgroundColor: allSelected
                  ? statusFilterSelectedBackgroundColor
                  : statusFilterBackgroundColor,
              }}
            >
              <Snippet id="sn.kustomer.themebuilder.conversations_all_text" />
            </a>
            <a 
              href={`/${lang}/conversations${replaceUrlParam(pageReset, 'conversationStatus', 'open')}`}
              className={`status-filter ${
                openSelected
                  ? "status-filter-active conversations-statusFilterSelectedBackgroundColor"
                  : "conversations-statusFilterBackgroundColor"
              }`}
              style={{
                backgroundColor: openSelected
                  ? statusFilterSelectedBackgroundColor
                  : statusFilterBackgroundColor,
              }}
            >
              <Snippet id="sn.kustomer.themebuilder.conversations_open_status_text" />
            </a>
            <a 
             href={`/${lang}/conversations${replaceUrlParam(pageReset, 'conversationStatus', 'done')}`}
              className={`status-filter ${
                doneSelected
                  ? "status-filter-active conversations-statusFilterSelectedBackgroundColor"
                  : "conversations-statusFilterBackgroundColor"
              }`}
              style={{
                backgroundColor: doneSelected
                  ? statusFilterSelectedBackgroundColor
                  : statusFilterBackgroundColor,
              }}
            >
              <Snippet id="sn.kustomer.themebuilder.conversations_done_status_text" />
            </a>
          </div>
        );
      }

      renderConversationListItem(conversation) {
        const { data } = this.props;
        const conversationsPage = _.get(data,"org.manifest.pages.conversations");
        const conversationsVariables = _.get(conversationsPage, "variables");
        const lang = _.get(data, "org.settings.lang");

        return (
          <li key={conversation.id} className="conversations-list-item">
            <a
              href={`/${lang}/conversations/${conversation.id}`}
              className="conversations-list-item-link-wrapper"
            >
              <div className="conversations-list-item-left">
                {conversation.name}
              </div>
              <div className="conversations-list-item-right">
                <div className="conversations-list-item-date">
                  {data.plugins
                    .moment(conversation.lastActivityAt)
                    .format("M/D/YYYY")}
                </div>
                <ConversationStatus
                  status={conversation.status}
                  data={conversationsVariables}
                />
              </div>
            </a>
          </li>
        );
      }

      renderConversations() {
        const { data } = this.props;
        const conversations = _.get(data, "conversations.data", []);

        if (!conversations.length) {
          return (
            <div className="conversations-empty">
              <EmptyConversationsSvg />
              <p className="conversations-empty-text">
                <Snippet id="sn.kustomer.themebuilder.conversations_empty_text" />
              </p>
            </div>
          );
        }

        return (
          <ul className="conversations-list">
            {conversations.map(this.renderConversationListItem)}
          </ul>
        );
      }

      renderPagination() {
        const { data } = this.props;
        const conversations = _.get(data, "conversations.data", []);
        if (!conversations.length) return null;

        const links = _.get(data, "conversations.links");
        const currentPage = _.get(data, "conversations.meta.page");
        const lang = _.get(data, "org.settings.lang");

        return (
          <SimplePagination
            currentPage={currentPage}
            links={links}
            resource={`${lang}/conversations`}
          />
        );
      }

      render() {
        const { data } = this.props;
        const lang = _.get(data, "org.settings.lang");

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
            <div className="conversations-container">
              <ConversationBreadcrumbs view="list" lang={lang} />
              <section className="container-home conversations">
                {this.renderHeader()}
                {this.renderStatusFilters()}
                {this.renderConversations()}
                {this.renderPagination()}
              </section>
            </div>
            <ContactUs data={findSection(data.org.manifest, "contactUs")} />
            <Footer data={findSection(data.org.manifest, "footer")} />
          </main>
        );
      }
    }

    Conversations.defaultProps = {
      data: {},
      org: {},
    };

    return React.createElement(Conversations, {
      data,
      org,
    });
  })()}
</React.Fragment>;
