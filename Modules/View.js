(function () {
	var View = function () {
		this.name = 'Hello';
	}

	View.prototype.hello = function () {
		console.log(this.name);
	}

	return {View: View};
}());