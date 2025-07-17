<React.Fragment>
  {(() => {
    class ConversationDetails extends React.PureComponent {
      renderAttribute(attr, index) {
        const attributeType = _.get(attr, 'attributeType');
        const attribute = _.get(attr, 'attribute');
        const displayName = _.get(attr, 'displayName');

        let value = _.get(attr, 'value');

        if (Array.isArray(value)) {
          value = value.join(', ');
        } else if (attributeType === 'date') {
           value = plugins.moment(value).format('L LT');
        } else if (attributeType === 'url' && value.startsWith('http')) {
          value = <a href={value} target="_blank" rel="noopener noreferrer">{value}</a>;
        }

        return (
          <div key={`${attribute}-${index}`} className="attribute-container">
            <span className="attribute-label">{displayName}</span>
            <span className="attribute-value">{value}</span>
          </div>
        );
      }

      render() {
        const { className, onExpand, expandMenu, data, conversation } = this.props;
        const detailsText = _.get(data, "detailsText.value");

        const status = _.get(conversation, 'attributes.status');

        const STANDARD_ATTRS = [
          {
            attribute: 'status',
            attributeType: 'string',
            type: 'conversation',
            displayName: <Snippet id="sn.kustomer.themebuilder.status" />,
            value: status === 'done' ? 'done' : 'open',
          },
          {
            attribute: "channels",
            attributeType: 'enum',
            type: "conversation",
            displayName: <Snippet id="sn.kustomer.themebuilder.channel" />,
            value: _.get(conversation, 'attributes.channels'),
          },
          {
            attribute: "createdAt",
            attributeType: 'date',
            type: "conversation",
            displayName: <Snippet id="sn.kustomer.themebuilder.created_at" />,
            value: _.get(conversation, 'attributes.createdAt'),
          },
        ];

        const allAttrs = STANDARD_ATTRS.concat(_.get(conversation, 'mappedAttributes') || []);

        return (
          <div className={`details-container ${className}`} onClick={onExpand}>
            <div className="details-header">
              <h2 className="header-primaryMessage details-title conversation-detailsText">
                {eval(detailsText)}
              </h2>
              <i
                className={`mdi mdi-chevron-${
                  expandMenu ? "up" : "down"
                } detail-expand-icon`}
                aria-hidden="true"
              />
            </div>
            <div
              className={`attributes-container ${
                expandMenu ? "open" : "close"
              }`}
            >
              {allAttrs.map((attr, index) => {
                return this.renderAttribute(attr, index);
              })}
            </div>
          </div>
        );
      }
    }

    ConversationDetails.defaultProps = {
      conversation: {},
      expandMenu: false,
      onExpand: () => {},
      className: "",
      data: {},
    };

    return React.createElement(ConversationDetails, {
      conversation,
      expandMenu,
      onExpand,
      className,
      data,
    });
  })()}
</React.Fragment>;
