<React.Fragment>
  {(() => {
    class Article extends React.Component {
      constructor(props) {
        super(props);

        this.state = {
          closedRequest: false,
          deflectionEnabled: false,
        };

        this.handleCloseRequest = this.handleCloseRequest.bind(this);
        this.handleCloseFormHookRequest = this.handleCloseFormHookRequest.bind(
          this
        );
        this.handleCloseProductizedFormRequest = this.handleCloseProductizedFormRequest.bind(
          this
        );
      }

      componentDidMount() {
        const closeOnLoad = _.get(data, "deflection.closeOnLoad");
        const articleVersionId = _.get(data, "deflection.articleVersionId");
        const conversationId = _.get(data, "deflection.conversationId");
        const source = _.get(data, "deflection.source");

        if (articleVersionId && conversationId && source === "email") {
          this.handleCloseRequest(articleVersionId, closeOnLoad);
        }

        if (this.hasDeflection()) {
          this.setState({
            deflectionEnabled: true,
          });
        }
      }

      hasDeflection() {
        const externalId = _.get(data, "deflection.externalId");
        const conversationId = _.get(data, "deflection.conversationId");
        const articleVersionId = _.get(data, "deflection.articleVersionId");

        return (externalId && articleVersionId) || (conversationId && articleVersionId);
      }

      handleCloseProductizedFormRequest(articleVersionId, closeOnLoad) {
        const { data, org, domain } = this.props;
        const formId = _.get(data, "deflection.formId");
        const externalId = _.get(data, "deflection.externalId");
        const queryTerm = _.get(data, "deflection.queryTerm");
        const emailValue = _.get(data, "deflection.emailValue");
        const emailLabel = _.get(data, "deflection.emailLabel");
        const url = `https://api.${domain}/p/v1/kb/forms/${formId}/submissions`;

        const formData = {
          externalId,
        };

        const deflectionData = {
          status: "accepted",
          messageSubject: queryTerm,
          articleVersionId,
        };

        const customerEmailData = {
          value: emailValue,
          label: emailLabel,
          attributeType: "customer",
          attributeProperty: "emails",
        };

        formData.deflectionTracking = JSON.stringify(deflectionData);
        formData.customerEmail = JSON.stringify(customerEmailData);

        return fetch(url, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json",
            "x-kustomer-kb-name": org.name,
          },
        })
          .then(() => {
            if (closeOnLoad) {
              this.setState({ closedRequest: true });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }

      handleCloseFormHookRequest(articleVersionId, closeOnLoad) {
        const { data, org, domain } = this.props;
        const externalId = _.get(data, "deflection.externalId");
        const conversationId = _.get(data, "deflection.conversationId");
        const signature = _.get(data, "deflection.signature");
        const source = _.get(data, "deflection.source");
        const orgId = _.get(org, "settings.org");

        let url = "";
        const patchData = {};

        if (externalId) {
          url = `https://${org.name}.api.${domain}/v1/hooks/form/deflection/${orgId}/${externalId}/${articleVersionId}`;
          patchData.status = "accepted";
        } else if (conversationId) {
          if (closeOnLoad) {
            url = `https://api.${domain}/p/v1/kb/conversations/${conversationId}/deflection`;
            patchData.status = "accepted";
          } else {
            url = `https://api.${domain}/p/v1/kb/conversations/${conversationId}/visit`;
          }
        }

        if (conversationId && source === "email") {
          patchData.org = orgId;
          patchData.articleVersionId = articleVersionId;
          patchData.signature = signature;
        }

        return fetch(url, {
          method: "PATCH",
          body: JSON.stringify(patchData),
          headers: {
            "Content-type": "application/json",
            "x-kustomer-kb-name": org.name,
          },
        })
          .then(() => {
            if (closeOnLoad) {
              this.setState({ closedRequest: true });
            }
          })
          .catch((err) => {
            console.error(err);
          });
      }

      handleCloseRequest(articleVersionId, closeOnLoad) {
        const { data } = this.props;
        const formHookEnabled = _.get(data, "deflection.formHookEnabled");

        if (formHookEnabled && formHookEnabled === "false") {
          return this.handleCloseProductizedFormRequest(
            articleVersionId,
            closeOnLoad
          );
        }

        return this.handleCloseFormHookRequest(articleVersionId, closeOnLoad);
      }

      renderDeflectionPrompt() {
        const { closedRequest } = this.state;
        const articleVersionId = _.get(data, "deflection.articleVersionId");
        const closeOnLoad = _.get(data, "deflection.closeOnLoad");

        if (this.hasDeflection()) {
          if (closedRequest || closeOnLoad) {
            return (
              <div className="form-deflection-prompt-container">
                <div className="form-deflection-prompt-text">
                  <Snippet id="sn.kustomer.survey.satisfaction_thank_you" />!
                </div>
                <div className="form-deflection-success-icon">
                  <i className="mdi icon mdi-check-circle-outline" aria-hidden="true" />
                </div>
              </div>
            );
          }

          return (
            <div className="form-deflection-prompt-container">
              <div className="form-deflection-prompt-text">
                <Snippet id="sn.kustomer.emaildeflection.does_this_article_answer_your_question" />
              </div>
              <button
                className="form-deflection-item-article-cta-button"
                onClick={() => this.handleCloseRequest(articleVersionId, true)}
              >
                <Snippet id="sn.kustomer.emaildeflection.yes_close_my_request" />
              </button>
            </div>
          );
        }

        return null;
      }

      render() {
        const { deflectionEnabled } = this.state;
        let mainClassName = "main-layout";
        if (deflectionEnabled) {
          mainClassName += " main-layout-deflection-padding";
        }

        return (
          <main className={mainClassName}>
            <Announcement
              data={findSection(data.org.manifest, "announcement")}
              template={data.template}
            />
            <Nav
              data={findSection(data.org.manifest, "header")}
              settings={org.settings}
            />
            <section className="container-home">
              <article>
                <SearchHeader
                  left={
                    <div className="article-header">
                      <ArticleBreadcrumbs breadcrumbs={data.breadcrumbs} />
                    </div>
                  }
                />
                <div className="fr-view article-body">
                  <div className="category-col-wrap">
                    <div className="article-left">
                      <h2 className="article-title">
                        {article.title}
                        {article.scope === 'internal' && (
                          <Tooltip content={<Snippet id="sn.kustomer.themebuilder.internal_article_icon_tooltip" />}>
                            <i className="mdi mdi-lock article-item-header-icon" aria-hidden="true" />
                          </Tooltip>
                        )}
                      </h2>
                      <span className="article-updated">
                        {article.publishedAt && (
                          <span>
                            {data.plugins
                              .moment(article.publishedAt)
                              .format("MMMM D YYYY h:mma")}{" "}
                            {article.publishedAt && readTime && " • "}{" "}
                            {readTime && (
                              <Snippet id="sn.kustomer.est_read_time" />
                            )}
                            {readTime && ` ${readTime}`}
                          </span>
                        )}
                      </span>
                      <div
                        className="article-body-content"
                        dangerouslySetInnerHTML={{ __html: article.body }}
                      />
                    </div>
                    {article.tags && article.tags.length > 0 && (
                      <div className="article-right">
                        <div className="tag-text">
                          <Snippet id="sn.kustomer.see_related" />
                        </div>
                        <div className="tag-wrap">
                          {article.tags.map((tag) => (
                            <a
                              href={`/tags/${tag.name}`}
                              key={tag.id}
                              className="tag-term"
                            >
                              {tag.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <ArticleSurveyForm articleId={article.articleId} lang={article.lang} orgName={org.name} settings={_.get(org, 'settings.articleSurvey')} />
              </article>
            </section>
            <ContactUs data={findSection(data.org.manifest, "contactUs")} />
            <Footer data={findSection(data.org.manifest, "footer")} />
            {this.renderDeflectionPrompt()}
          </main>
        );
      }
    }

    Article.defaultProps = {
      data: {},
      org: {},
      category: {},
      categories: [],
      article: {},
      domain: "",
    };

    return React.createElement(Article, {
      data,
      org,
      category,
      categories,
      article,
      domain,
    });
  })()}
</React.Fragment>;
