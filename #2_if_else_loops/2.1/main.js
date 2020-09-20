var user = prompt("Кто пришел?", "Ваня");
if(user === "Админ"){
	var password = prompt("Пароль?", "Напиши");
	if(password === "Черный Властелин"){
		console.log("Добро пожаловать!");
	}else if(password === null){
		console.log("Вход отменен");
	}else{
		console.log("Пароль не верен");
	}
}else if(user === null){
	console.log("Вход отменен");
}else{
	console.log("Я вас не знаю");
}