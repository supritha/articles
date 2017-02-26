"use strict";

var SearchComponent = React.createClass({
	displayName: "SearchComponent",


	search: function search() {
		var self = this,
		    searchInput = $(this.refs.searchInput);
		$.ajax({
			url: '/api/articles/search',
			data: { q: searchInput.val() },
			success: function success(response) {
				self.props.onSearchResult(response);
			}

		});
	},
	onKeyDown: function onKeyDown() {
		setTimeout(this.search, 500);
	},
	render: function render() {
		return React.createElement(
			"div",
			{ className: "row" },
			React.createElement(
				"div",
				{ id: "custom-search-input" },
				React.createElement(
					"div",
					{ className: "input-group col-md-12" },
					React.createElement("input", { type: "text", className: "form-control input-lg", ref: "searchInput", placeholder: "Search", onKeyDown: this.onKeyDown })
				)
			)
		);
	}
});