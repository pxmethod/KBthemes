<div className="search-sml-wrap">
  {left}
  <div className="search-wrap-right">
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
</div>;
