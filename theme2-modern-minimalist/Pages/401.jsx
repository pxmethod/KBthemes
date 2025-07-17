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
    <div>
      <a href="javascript:history.back()">
        <i className="icon-search mdi mdi-arrow-left fourOhFour-icon" aria-hidden="true"></i>
      </a>
    </div>
    <div className="fourOhFour-wrap">
      <h1 className="fourOhFour-header">
        <Snippet id="sn.kustomer.error" /> 401
      </h1>
      <h2 className="fourOhFour-subheader">
        <Snippet id="sn.kustomer.themebuilder.401_message" />
      </h2>
      <div className="fourOhFour-body">
        <NotPermittedSvg className="fourOhFour-image" />
        <button className="btn" onClick={() => { location.href='/' }}>
          <Snippet id="sn.kustomer.themebuilder.back_to_home_button" />
        </button>
      </div>
    </div>
  </section>
  <Footer data={findSection(data.org.manifest, "footer")} />
</main>
