"use strict";

var ArticleListView = React.createClass({
	displayName: "ArticleListView",

	onClick: function onClick(data) {
		this.props.onClick(data);
	},
	render: function render() {
		var self = this;
		var previewArticle = this.props.data[Math.floor(Math.random() * this.props.data.length)];

		var articles = this.props.data.map(function (singleData, index) {
			return React.createElement(SingleArticle, { data: singleData, index: index + 1, onClick: self.onClick });
		});

		return React.createElement(
			"div",
			{ id: "id1" },
			React.createElement(ArticleRandomPreview, { data: previewArticle }),
			React.createElement(
				"div",
				{ className: "row marketing", id: "articles" },
				React.createElement(
					"div",
					{ className: "col-12" },
					articles
				)
			)
		);
	}
});

var ArticleRandomPreview = React.createClass({
	displayName: "ArticleRandomPreview",

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
				"p",
				null,
				" ",
				this.props.data.content,
				" "
			)
		);
	}
});

var SingleArticle = React.createClass({
	displayName: "SingleArticle",

	onClick: function onClick() {
		this.props.onClick(this.props.data);
	},

	render: function render() {
		return React.createElement(
			"div",
			{ onClick: this.onClick },
			React.createElement(
				"h4",
				null,
				this.props.index,
				". ",
				this.props.data.title
			),
			React.createElement(
				"p",
				null,
				this.props.data.content
			)
		);
	}
});