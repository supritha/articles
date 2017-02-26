"use strict";

var ArticleDetailView = React.createClass({
	displayName: "ArticleDetailView",

	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(
				"h3",
				{ className: "text-muted" },
				this.props.data.title
			),
			React.createElement(
				"p",
				null,
				this.props.data.published_date,
				"  |  ",
				React.createElement(
					"a",
					{ href: "#" },
					this.props.data.author
				)
			),
			React.createElement("img", { src: this.props.data.hero_image, className: "img-fluid" }),
			React.createElement("p", null),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-9" },
					React.createElement(
						"p",
						null,
						this.props.data.content
					)
				),
				React.createElement(
					"div",
					{ className: "col-3" },
					React.createElement(
						"p",
						null,
						React.createElement("img", { src: this.props.data.support_image, className: "img-fluid float-right" })
					)
				)
			)
		);
	}
});