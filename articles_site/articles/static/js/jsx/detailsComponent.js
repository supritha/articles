var ArticleDetailView = React.createClass({  
	render: function() {
		return (
			<div>
				<h3 className="text-muted">{this.props.data.title}</h3>
				<p>{this.props.data.published_date}  |  <a href="#">{this.props.data.author}</a></p>
				<img src={this.props.data.hero_image} className="img-fluid"/>
				<p/>
				<div className="row">
					<div className="col-9">
						<p>{this.props.data.content}</p>
					</div>
					<div className="col-3">
						<p><img src={this.props.data.support_image} className="img-fluid float-right"/></p>
					</div>
				</div>
			</div>
		);
	}
});