<li className="article-item" role="listitem">
  <a href={`/${lang}/${slug}-${hash}`} className="article-item-header-wrap">
    <h2 className="article-item-header">
      {title}
      {scope === 'internal' && (
        <Tooltip content={<Snippet id="sn.kustomer.themebuilder.internal_article_icon_tooltip" />}>
          <i className="mdi mdi-lock article-item-header-icon" aria-hidden="true" />
        </Tooltip>
      )}
    </h2>
  </a>
  <div className="article-item-time">
    {data.plugins.moment(updatedAt).format("MMMM D YYYY h:mma")}
  </div>
  <div className="article-item-body">
    {body && (
      <div
        className="text-overflow"
        dangerouslySetInnerHTML={{
          __html: (body || "")
            .replace(/<(?:.|\n)*?>/gm, " ")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, 160)
            .concat("...")
        }}
      />
    )}
  </div>
  <hr className="hr" />
</li>;
