"use strict";

var WhatNextContainer = React.createClass({
	displayName: "WhatNextContainer",

	onClick: function onClick(data) {
		this.props.onClick(data);
	},
	render: function render() {
		var self = this;
		var nextArticles = this.props.data.map(function (singleData, index) {
			return index < 4 ? React.createElement(SingleNext, { data: singleData, onClick: self.onClick }) : '';
		});

		return React.createElement(
			"div",
			null,
			React.createElement("hr", null),
			React.createElement(
				"h4",
				null,
				" What to read next?"
			),
			React.createElement("hr", null),
			React.createElement(
				"div",
				{ className: "row" },
				nextArticles
			)
		);
	}
});

var SingleNext = React.createClass({
	displayName: "SingleNext",

	onClick: function onClick() {
		this.props.onClick(this.props.data);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "col-3", onClick: this.onClick },
			React.createElement("img", { src: this.props.data.hero_image, className: "img-thumbnail" }),
			React.createElement(
				"a",
				{ href: "#" },
				React.createElement(
					"p",
					null,
					this.props.data.title
				)
			)
		);
	}
});