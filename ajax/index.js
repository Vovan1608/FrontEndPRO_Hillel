var fs = require("fs");

module.exports = {
	// чтение файла, который пришел с фронт-энд
	read(url, callback) {
		fs.readFile(url, "utf-8", callback);
	},
	// запись в url(куда) того, что пришло с фронт-энда
	write(url, data) {
		fs.writeFile(url, JSON.stringify(data), function(error) {
			console.log(error);
		});
	}
}