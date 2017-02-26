var ArticleDetailJSONView = React.createClass({
	
	render: function() {
		var self = this;
		const jsonValue = Object.keys(this.props.data).map((key) =>
				<tr>
					  <td>{key}</td>
					  <td>{self.props.data[key]}</td>
				</tr>
			)

		return (
			<div>
				<h3> JSON View </h3>
				<p/>
				<table className="table">
				  <thead className="thead-default">
					<tr>
					  <th>Name</th>
					  <th>Value</th>
					</tr>
				  </thead>
				  <tbody>
					{jsonValue}
				  </tbody>
				</table>
			</div>
		);
	}
});