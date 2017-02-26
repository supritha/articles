var WhatNextContainer = React.createClass({
	onClick: function (data) {
		this.props.onClick(data);
	},
	render: function() {
		var self = this;
		const nextArticles = this.props.data.map((singleData, index) =>
				index < 4 ? <SingleNext data={singleData} onClick={self.onClick}/>: ''
			)

		return (
			<div>
			 	<hr/>
				<h4> What to read next?</h4>
				<hr/>
				<div className="row">
					{nextArticles}
				</div>
			</div>
		);
	}
});

var SingleNext = React.createClass({
	onClick: function () {
		this.props.onClick(this.props.data);
	},
	render: function() {
		return (
			<div className="col-3" onClick={this.onClick}>
				<img src={this.props.data.hero_image} className="img-thumbnail"/>
				<a href="#"><p>{this.props.data.title}</p></a>
			</div>
		);
	}
});