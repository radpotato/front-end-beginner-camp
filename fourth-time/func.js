var x = function(args) {
	console.log(args);
	return args;
}

var z = function() {
	var o = "chicken";
	return o;
}

x(z());

x(function() {
	var z = "korea";
	return z;
}())

/* promise key */
