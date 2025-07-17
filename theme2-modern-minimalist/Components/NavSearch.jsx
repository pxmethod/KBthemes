<div
  className="nav-main-text searchBar-overlayColor"
  style={{ backgroundColor: _.get(data, "variables.overlayColor.value") }}
>
  <HeroImage
    heroImage={_.get(data, "variables.heroImage.value")}
    opacity={_.get(data, "variables.overlayOpacity.value")}
  />
  <div className="container">
    <span className="search-results-number">
      {results.length}
      &nbsp;
      <Snippet id="sn.kustomer.results_found" />
      &nbsp; '{term}'
    </span>
    <div className="nav-search">
      <form
        className="form-control-search-wrap"
        action={`${paths.search}?q=`}
        method="GET"
      >
        <label htmlFor="searchInput" hidden>
          <Snippet id="sn.kustomer.search" />
        </label>
        <i className="icon-search mdi mdi-magnify" aria-hidden="true"></i>
        <input
          className="form-control form-control-search"
          id="searchInput"
          name="q"
          placeholder={snippet("sn.kustomer.search_kb")}
          aria-label={snippet('sn.kustomer.search_kb')}
        />
      </form>
    </div>
  </div>
</div>;
