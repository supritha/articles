"use strict";

var ArticleDetailJSONView = React.createClass({
	displayName: "ArticleDetailJSONView",


	render: function render() {
		var self = this;
		var jsonValue = Object.keys(this.props.data).map(function (key) {
			return React.createElement(
				"tr",
				null,
				React.createElement(
					"td",
					null,
					key
				),
				React.createElement(
					"td",
					null,
					self.props.data[key]
				)
			);
		});

		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				null,
				" JSON View "
			),
			React.createElement("p", null),
			React.createElement(
				"table",
				{ className: "table" },
				React.createElement(
					"thead",
					{ className: "thead-default" },
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							null,
							"Name"
						),
						React.createElement(
							"th",
							null,
							"Value"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					jsonValue
				)
			)
		);
	}
});