"use strict";

var ArticlesContainer = React.createClass({
	displayName: "ArticlesContainer",

	getInitialState: function getInitialState() {
		return { showList: this.props.data.showList, showDetail: this.props.data.showDetail, article: this.props.data.article, showDetailJson: this.props.data.showDetailJson };
	},
	onClick: function onClick(data) {
		this.setState({ showList: false, showDetail: true, article: data });
	},
	onClickRefreshLocation: function onClickRefreshLocation(data) {
		window.location.href = '/detail?article_id=' + data.article_id;
	},
	onNavigationClick: function onNavigationClick() {
		this.setState({ showList: true, showDetail: false });
	},
	render: function render() {
		return React.createElement(
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
				this.state.showList ? React.createElement(ArticleListView, { data: this.props.data.articles, onClick: this.onClick }) : React.createElement(
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
		);
	}
});

function showArticles(data) {
	ReactDOM.render(React.createElement(ArticlesContainer, { data: data }), document.getElementById('container'));
}