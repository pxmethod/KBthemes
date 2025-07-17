<React.Fragment>
  {(() => {
    class Conversation extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          expandMenu: false,
          messages: [],
          links: {},
        };

        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        this.scrollToBottom = this.scrollToBottom.bind(this);
        this.renderConversationDetails = this.renderConversationDetails.bind(this);
        this.handleClickShowMore = this.handleClickShowMore.bind(this);
        this.handleClickSend = this.handleClickSend.bind(this);
      }

      componentDidMount() {
        const { data } = this.props;
        const conversation = _.get(data, "conversation");
        const conversationMessages = _.get(conversation, "messages.data");
        const conversationMessagesLinks = _.get(conversation, "messages.links");

        this.setState({
          messages: conversationMessages,
          links: conversationMessagesLinks
        });

        window.addEventListener("load", () => {
          this.scrollToBottom();
        });
      }

      scrollToBottom() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth", block: "end" });
      }

      handleToggleMenu() {
        this.setState((prevState) => ({
          expandMenu: !prevState.expandMenu,
        }));
      }

      handleClickSend(msg) {
        this.setState((prevState) => ({
          messages: prevState.messages.concat(msg),
        }), () => {
          setTimeout(() => {
            this.scrollToBottom();
          }, 300);
        });
      }

      handleClickShowMore({ prevMessages, links }) {
        this.setState((prevState) => ({
          messages: prevMessages.concat(prevState.messages),
          links
        }));
      }

      renderMoreButton() {
        const { links } = this.state;
        const { org } = this.props;
        const conversationMessagesLinkNext = _.get(links, "next");

        if (!conversationMessagesLinkNext) return null;

        return (
          <div className="messages-see-more-container">
            <ConversationShowMore 
              onClick={this.handleClickShowMore} 
              nextLink={conversationMessagesLinkNext}
              orgName={org.name}
            >
              <Snippet id="sn.kustomer.themebuilder.show_more_text"/>...
            </ConversationShowMore>
          </div>
        );
      }

      renderConversationDetails(className) {
        const { expandMenu } = this.state;
        const { data } = this.props;
        const conversationPage = _.get(data, "org.manifest.pages.conversation");
        const conversationVariables = _.get(conversationPage, "variables");

        const conversation = _.get(data, "conversation");

        return (
          <ConversationDetails
            conversation={conversation}
            expandMenu={expandMenu}
            onExpand={this.handleToggleMenu}
            className={className}
            data={conversationVariables}
          />
        );
      }

      renderHeader() {
        const { data } = this.props;
        const conversationsPage = _.get(data, "org.manifest.pages.conversations");
        const conversationsVariables = _.get(conversationsPage, "variables");

        const conversation = _.get(data, "conversation");
        const conversationName = _.get(conversation, "name");
        const conversationStatus = _.get(conversation, "status");

        return (
          <div className="container-header container-header-conversation">
            <h2 className="header-primaryMessage conversations-primaryText">
              {conversationName}
            </h2>
            <ConversationStatus
              status={conversationStatus}
              data={conversationsVariables}
            />
          </div>
        );
      }

      renderConversation() {
        const { org, data } = this.props;
        const { messages } = this.state;
        const conversationPage = _.get(data, "org.manifest.pages.conversation");
        const conversationVariables = _.get(conversationPage, "variables");
        const sendButtonText = _.get(conversationVariables, "sendButtonText.value", "Send");
        const messageFailedText = _.get(conversationVariables, "messageFailedText.value");
        const messagePendingText = _.get(conversationVariables, "messagePendingText.value");
        const replyBoxPlaceholderText = _.get(conversationVariables, "replyBoxPlaceholderText.value");

        const conversation = _.get(data, "conversation");
        const customer = _.get(org, "settings.customer");
        const snippetsText = {
          sendButtonText: eval(sendButtonText),
          messageFailedText: eval(messageFailedText),
          messagePendingText: eval(messagePendingText),
          replyBoxPlaceholderText: eval(replyBoxPlaceholderText),
        };

        return (
          <div className="thread-container">
            {this.renderHeader()}
            {this.renderConversationDetails("showInMobile")}
            <div className="thread-container-content">
              <div className="messages-container">
                {this.renderMoreButton()}
                <div className="messages">
                  {messages.map((msg, idx) => (
                    <ConversationMessage
                      key={`${msg.id}-${idx}`}
                      message={msg}
                      data={conversationVariables}
                      customer={customer}
                      snippetsText={snippetsText}
                    />
                  ))}
                </div>
                <div id="thread-bottom" ref={(el) => (this.messagesEnd = el)} />
              </div>
              <hr className="thread-divider" />
              <ConversationReply
                conversation={conversation}
                snippetsText={snippetsText}
                settings={org.settings}
                onClick={this.handleClickSend}
                orgName={org.name}
              />
            </div>
          </div>
        );
      }

      render() {
        const { data } = this.props;
        const conversation = _.get(data, "conversation");
        const conversationName = _.get(conversation, "name");
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
            <div className="conversation-detail-container">
              <div className="conversations-container">
                <ConversationBreadcrumbs
                  view="detail"
                  name={conversationName}
                  lang={lang}
                />
                <section className="container conversation-detail">
                  {this.renderConversation()}
                  {this.renderConversationDetails("hideInMobile")}
                </section>
              </div>
            </div>
            <ContactUs data={findSection(data.org.manifest, "contactUs")} />
            <Footer data={findSection(data.org.manifest, "footer")} />
          </main>
        );
      }
    }

    Conversation.defaultProps = {
      data: {},
      org: {},
      domain: ''
    };

    return React.createElement(Conversation, {
      data,
      org,
      domain
    });
  })()}
</React.Fragment>;
