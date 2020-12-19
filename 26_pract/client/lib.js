function ajax({method, url, payLoad, success, error}) {
	let xhr = new XMLHttpRequest();

	xhr.addEventListener("load", () => success.call(xhr, xhr.response));

	xhr.addEventListener("error", error.bind(xhr));

	xhr.open(method, url);
	method.toUpperCase() === "GET" ? xhr.send() : xhr.send(payLoad);
}