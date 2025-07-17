<div role="navigation" aria-label="Breadcrumbs" className="breadcrumbs-wrap">
  <a href={"/"} className="breadcrumb">
    <Snippet id="sn.kustomer.help_center" />
  </a>
  <i className="mdi mdi-chevron-right mdi-dark" aria-hidden="true" />
  {breadcrumbs &&
    breadcrumbs.length <= 1 &&
    breadcrumbs.map((bc) =>
      bc ? (
        <a
          href={`/${bc.lang}/categories/${bc.slug}-${bc.hash}`}
          key={bc.id}
          className="breadcrumb"
        >
          {bc.title}
        </a>
      ) : null
    )}
  {breadcrumbs &&
    breadcrumbs.length > 1 &&
    breadcrumbs
      .map((bc) =>
        bc ? (
          <a
            href={`/${bc.lang}/categories/${bc.slug}-${bc.hash}`}
            key={bc.id}
            className="breadcrumb"
          >
            {bc.title}
          </a>
        ) : null
      )
      .reduce((prev, curr) => [
        curr,
        <i className="mdi mdi-chevron-right mdi-dark" aria-hidden="true" />,
        prev,
      ])}
</div>;
