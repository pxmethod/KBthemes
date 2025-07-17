<main className="main-layout">
  <Announcement
    data={findSection(data.org.manifest, "announcement")}
    template={data.template}
  />
  <Nav
    data={findSection(data.org.manifest, "header")}
    settings={org.settings}
  />
  <NavSearch
    results={results}
    term={term}
    data={findSection(data.org.manifest, "searchBar")}
    HeroImage={HeroImage}
  />
  <section className="container-home container-max-width">
    {!results.length && (
      <div className="no-results-copy">
        <Snippet id="sn.kustomer.no_results" />
      </div>
    )}
    {!!results.length &&
      results.map((el) => (
        <SearchItem
          key={`${el.title}-${el.publishedAt}`}
          {...el}
          publishedAt={el.publishedAt}
          org={org}
          domain={domain}
        />
      ))}
  </section>
  <ContactUs data={findSection(data.org.manifest, "contactUs")} />
  <Footer data={findSection(data.org.manifest, "footer")} />
</main>;
