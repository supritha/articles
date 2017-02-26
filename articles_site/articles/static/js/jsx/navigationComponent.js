var NavigationContainer = React.createClass({
	onClick: function () {
		this.props.onClick();
	},
	render: function() {
		var self = this;
		const navImages = this.props.data.map((singleData) =>
				(
					<p><a href="void:javascript(0)">
						<img src={singleData.imageUrl} className="img-thumbnail" onClick={self.onClick}/>
					</a></p>)
				)
		return (
			<div>
				{navImages}
			</div> 
		);
	}
});