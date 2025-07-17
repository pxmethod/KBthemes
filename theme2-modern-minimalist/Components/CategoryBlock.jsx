<React.Fragment>
  {(() => {
    class CategoryBlock extends React.PureComponent {
      constructor(props) {
        super(props);
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
      }

      handleClick() {
        const { data } = this.props;
        const categoryUrl = _.get(data, "variables.categoryUrl.value", "#");
        const slug = _.get(data, "variables.categorySlug.value", "");
        const hash = _.get(data, "variables.categoryHash.value", "");
        const lang = _.get(data, "variables.lang.value", "en");
        
        if (categoryUrl) {
          window.location.href = categoryUrl;
        } else if (slug && hash) {
          window.location.href = `/${lang}/categories/${slug}-${hash}`;
        }
      }

      handleKeyDown(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleClick();
        }
      }

      render() {
        const { data } = this.props;
        
        const categoryTitle = _.get(data, "variables.categoryTitle.value", "Category");
        const categoryDescription = _.get(data, "variables.categoryDescription.value", "Category description");
        const categoryIcon = _.get(data, "variables.categoryIcon.value", "");
        const categoryUrl = _.get(data, "variables.categoryUrl.value", "#");
        const slug = _.get(data, "variables.categorySlug.value", "");
        const hash = _.get(data, "variables.categoryHash.value", "");
        const lang = _.get(data, "variables.lang.value", "en");
        
        const href = categoryUrl || `/${lang}/categories/${slug}-${hash}`;

        return (
          <a 
            href={href}
            className="mm-category-block"
            onClick={(e) => {
              e.preventDefault();
              this.handleClick();
            }}
            onKeyDown={this.handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`Browse ${categoryTitle} category`}
          >
            {categoryIcon && (
              <img 
                className="mm-category-icon" 
                src={categoryIcon} 
                alt={categoryTitle} 
              />
            )}
            <span className="mm-category-title">{eval(categoryTitle)}</span>
            <span className="mm-category-description">{eval(categoryDescription)}</span>
          </a>
        );
      }
    }

    CategoryBlock.defaultProps = {
      data: {},
      template: "",
    };

    return React.createElement(CategoryBlock, { data, template });
  })()}
</React.Fragment>;
