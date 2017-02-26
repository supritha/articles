var ArticlesContainer = React.createClass({  
	getInitialState: function () {
		return {showList: this.props.data.showList, showDetail: this.props.data.showDetail, article: this.props.data.article, showDetailJson: this.props.data.showDetailJson};
	},
	onClick: function (data) {
		this.setState({showList: false, showDetail: true, article: data});
	},
	onClickRefreshLocation: function (data) {
		window.location.href = '/detail?article_id=' + data.article_id;
	},
	onNavigationClick: function () {
		this.setState({showList: true, showDetail: false});
	},
	render: function() {
		return (
			<div className="row" >
			<div className="col-2" id="leftNavigation">
				<NavigationContainer data={this.props.data.navigationData} onClick={this.onNavigationClick}/>
			</div>
			<div className="col-10" >
				{ this.state.showList ?
					<ArticleListView data={this.props.data.articles} onClick={this.onClick}/>
				 	: 
					<div id="detail">
						{this.props.data.showDetailJson ?
							<ArticleDetailJSONView data={this.state.article}/> :
							<ArticleDetailView data={this.state.article}/>
						}
					</div>
				}
				<div className="col-12">
					<WhatNextContainer data={this.props.data.randomArticles} onClick={this.onClickRefreshLocation}/>
				</div>
			  
			</div>

		</div>
		);
	}
});

function showArticles(data) {
	ReactDOM.render(<ArticlesContainer data={data}/>, document.getElementById('container'));
}

