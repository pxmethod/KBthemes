<main className="main-layout">
  <Announcement
    data={findSection(data.org.manifest, "announcement")}
    template={data.template}
  />
  <Nav
    data={findSection(data.org.manifest, "header")}
    settings={org.settings}
  />
  <div className="container-contact">
    <div className="container-home">
      <div className="contact-wrapper">{form || "Default Theme"}</div>
    </div>
  </div>
</main>;
