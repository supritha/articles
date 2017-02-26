var ArticleListView = React.createClass({
	onClick: function (data) {
		this.props.onClick(data);
	},
	render: function() {
		var self = this;
		var previewArticle = this.props.data[Math.floor(Math.random() * this.props.data.length)];

		const articles = this.props.data.map((singleData, index) =>
				<SingleArticle data={singleData} index={index + 1} onClick={self.onClick}/>
			)

		return (
			<div id="id1">
				<ArticleRandomPreview data={previewArticle} />
				<div className="row marketing" id="articles">
					<div className="col-12">
						{articles}
					</div>
				</div>
			</div>
		);
	}
});

var ArticleRandomPreview = React.createClass({
	render: function() {
		return (
			<div>
				<h3 className="text-muted">{this.props.data.title}</h3>
				<p>{this.props.data.published_date}  |  <a href="#">{this.props.data.author}</a></p>
				<img src={this.props.data.hero_image} className="img-fluid"/>
				<p/>
				<p> {this.props.data.content} </p>
			</div>
		);
	}
});

var SingleArticle = React.createClass({
	onClick: function () {
		this.props.onClick(this.props.data);
	},

	render: function() {
		return (
			<div onClick={this.onClick}>
				<h4>{this.props.index}. {this.props.data.title}</h4>
				<p>{this.props.data.content}</p>
			</div>
		);
	}
});