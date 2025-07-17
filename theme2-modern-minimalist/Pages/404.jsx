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
        <Snippet id="sn.kustomer.error" /> 404
      </h1>
      <h2 className="fourOhFour-subheader">
        <Snippet id="sn.kustomer.unexpected_error" />
      </h2>
      <div className="fourOhFour-body">
        <Snippet id="sn.kustomer.404_part1" />
        <br />
        <Snippet id="sn.kustomer.404_part2" />{" "}
        <a href="/">
          <Snippet id="sn.kustomer.home" />
        </a>
        , <Snippet id="sn.kustomer.404_part3" />
      </div>
      <form
        className="form-control-search-wrap fourOhFour-search"
        method="GET"
        action="/search?q="
      >
        <i className="icon-search mdi mdi-magnify mdi-dark" aria-hidden="true"></i>
        <input
          className="form-control form-control-search"
          name="q"
          placeholder={snippet("sn.kustomer.search_kb")}
          aria-label={snippet('sn.kustomer.search_kb')}
        />
      </form>
    </div>
  </section>
  <Footer data={findSection(data.org.manifest, "footer")} />
</main>;
