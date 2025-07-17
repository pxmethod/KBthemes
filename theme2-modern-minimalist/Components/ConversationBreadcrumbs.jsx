<div className="container conversations-breadcrumb-container">
  <div className="conversations-breadcrumb">
    <a href={`/lang/${lang}${replaceUrlParam(window.location.search, 'page', '')}`} className="conversations-breadcrumbs-link">
      <Snippet id="sn.kustomer.themebuilder.conversations_company_support_text" />
    </a>
    <i
      className="mdi mdi-chevron-right breadcrumb-chevron-right-icon"
      aria-hidden="true"
    />
    {view === "list" ? (
      <span className="conversations-breadcrumb-text">
        <Snippet id="sn.kustomer.themebuilder.conversations_primary_text_value" />
      </span>
    ) : (
      <a href={`/${lang}/conversations${window.location.search}`} className="conversations-breadcrumbs-link">
        <Snippet id="sn.kustomer.themebuilder.conversations_primary_text_value" />
      </a>
    )}
    {view === "detail" && name && (
      <React.Fragment>
        <i
          className="mdi mdi-chevron-right breadcrumb-chevron-right-icon"
          aria-hidden="true"
        />
        <span className="conversations-breadcrumb-text">{name}</span>
      </React.Fragment>
    )}
  </div>
</div>;
