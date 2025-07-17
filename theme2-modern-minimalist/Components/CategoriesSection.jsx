<React.Fragment>
  {(() => {
    class CategoriesSection extends React.PureComponent {
      constructor(props) {
        super(props);
      }

      render() {
        const { data } = this.props;
        const isEnabled = _.get(data, "enabled");
        const primaryText = _.get(data, "variables.primaryText.value");
        const secondaryText = _.get(data, "variables.secondaryText.value");

        return (
          <section
            id="category"
            className="categories-container"
            style={{ display: isEnabled ? "flex" : "none" }}
          >
            <div className="container-home categories-container">
              <div className="container-header">
                <h2 className="header-primaryMessage category-primaryText">
                  {eval(primaryText)}
                </h2>
                <h3 className="header-secondaryMessage category-secondaryText">
                  {eval(secondaryText)}
                </h3>
              </div>
              <div className="category-wrap">
                {categories.map((cat, i) => (
                  <CategoryBlock {...cat} key={`${cat.id}-i`} />
                ))}
              </div>
            </div>
          </section>
        );
      }
    }

    CategoriesSection.defaultProps = {
      data: {},
      categories: [],
    };

    return React.createElement(CategoriesSection, { data, categories });
  })()}
</React.Fragment>;
