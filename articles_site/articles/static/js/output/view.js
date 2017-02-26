"use strict";

var ArticlesContainer = React.createClass({
	displayName: "ArticlesContainer",

	getInitialState: function getInitialState() {
		return { showList: this.props.data.showList, showDetail: this.props.data.showDetail, article: this.props.data.article, showDetailJson: this.props.data.showDetailJson, articles: this.props.data.articles, beforeSearchArticles: this.props.data.articles };
	},
	onClick: function onClick(data) {
		this.setState({ showList: false, showDetail: true, article: data });
	},
	onClickRefreshLocation: function onClickRefreshLocation(data) {
		window.location.href = '/detail?article_id=' + data.article_id;
	},
	onNavigationClick: function onNavigationClick() {
		this.setState({ showList: true, showDetail: false, articles: this.state.beforeSearchArticles });
	},
	onSearchResult: function onSearchResult(data) {
		this.setState({ showList: true, articles: data });
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(SearchComponent, { onSearchResult: this.onSearchResult }),
			React.createElement("p", null),
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-2", id: "leftNavigation" },
					React.createElement(NavigationContainer, { data: this.props.data.navigationData, onClick: this.onNavigationClick })
				),
				React.createElement(
					"div",
					{ className: "col-10" },
					this.state.showList ? React.createElement(ArticleListView, { data: this.state.articles, onClick: this.onClick }) : React.createElement(
						"div",
						{ id: "detail" },
						this.props.data.showDetailJson ? React.createElement(ArticleDetailJSONView, { data: this.state.article }) : React.createElement(ArticleDetailView, { data: this.state.article })
					),
					React.createElement(
						"div",
						{ className: "col-12" },
						React.createElement(WhatNextContainer, { data: this.props.data.randomArticles, onClick: this.onClickRefreshLocation })
					)
				)
			)
		);
	}
});

function showArticles(data) {
	ReactDOM.render(React.createElement(ArticlesContainer, { data: data }), document.getElementById('container'));
}