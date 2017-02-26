
var SearchComponent = React.createClass({

	search: function () {
		var self = this,
			searchInput = $(this.refs.searchInput);
		$.ajax({
			url: '/api/articles/search',
			data: {q: searchInput.val()},
			success: function (response) {
				self.props.onSearchResult(response);
			}

		})
	},
	onKeyDown: function () {
		setTimeout(this.search, 500);
	},
	render: function() {
		return (
			<div className="row">
				<div id="custom-search-input">
					<div className="input-group col-md-12">
						<input type="text" className="form-control input-lg" ref="searchInput" placeholder="Search" onKeyDown={this.onKeyDown}/>
					</div>
				</div>
			</div>

		);
	}
});