"use strict";

var NavigationContainer = React.createClass({
	displayName: "NavigationContainer",

	onClick: function onClick() {
		this.props.onClick();
	},
	render: function render() {
		var self = this;
		var navImages = this.props.data.map(function (singleData) {
			return React.createElement(
				"p",
				null,
				React.createElement(
					"a",
					{ href: "void:javascript(0)" },
					React.createElement("img", { src: singleData.imageUrl, className: "img-thumbnail", onClick: self.onClick })
				)
			);
		});
		return React.createElement(
			"div",
			null,
			navImages
		);
	}
});