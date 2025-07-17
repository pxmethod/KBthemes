<a
  href={`/${lang}/categories/${slug}-${hash}`}
  className="category-block-item category-block-item-nested-categories"
>
  {icon && <img className="cat-block-icon" src={icon} alt={title} />}
  <div className="subcat-item-header-wrap">
    <h2 className="article-item-header subcat-item-header">{title}</h2>
  </div>
  {description && (
    <div className="article-item-body">{description.substring(0, 100)}</div>
  )}
</a>;
