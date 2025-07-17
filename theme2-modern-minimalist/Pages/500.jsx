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
    <div className="fourOhFour-wrap">
      <h1 className="fourOhFour-header">
        <Snippet id="sn.kustomer.error" /> 500
      </h1>
      <h2 className="fourOhFour-subheader">
        <Snippet id="sn.kustomer.whoops" />
      </h2>
      <div className="fourOhFour-body">
        <Snippet id="sn.kustomer.page_unavailable" />
        <br />
        <Snippet id="sn.kustomer.try_again" />
      </div>
    </div>
  </section>
  <Footer data={findSection(data.org.manifest, "footer")} />
</main>;
