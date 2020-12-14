"use strict";

/*
1.Создать форму с полями login, password и кнопку sign in. По нажатию на кнопку введенные данные с формы отправляются на сервер.

2.На стороне client валидация login и password(поля не должны быть пустыми)

3. Сервер должен проверить в файле users.json существует ли такой юзер с отправленными данными(login, password). Пример массива из файла users: [{"login":"admin", "password": "admin", "id": 1}]

4. Сервер должен отправить на client id пользователя, и в запрос указать status 200. Если такого пользователя не существует то ' 'Unauthorized' и status 401.

5. по id получить список товаров по юузеру. Логика работы следующая:

	5.1. Как только вы получили id на client-е (от сервера) - отпрвить его обратно на сервер. За получением списка товаров по юзеру.

	5.2. На сервере создать папку goods где будут файлики: 1.json, 2.json, 3.json ,...., n.json (создайте столько сколько у вас юзеров в файле users.json)

	5.3 Воспользоваться id полученой от client для того чтоб воспользоваться им для прочтения соответсвующего файлика n.json Например: при id = 1 - я могу создать строку такого вида let urlToJson = 'goods/' + id + '.json'; - получу 'goods/1.json - путь к товарам юзера. Товары могут выглядеть так [{..},{..}] на ваше усмотрение из чего будут состоять информация по товару. Отправить товары на client.

	5.4. Вывести на экрн товары юзера.
*/

window.onload = function() {
	// XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к
	// серверу без перезагрузки страницы.

	// ToDo1. создаем экземпляр XMLHttpRequest()
	// let xhr = new XMLHttpRequest();

	// ToDo2. инициализация xhr.open(method, URL, [async, user, password])
	// -method – HTTP-метод. Обычно это "GET" или "POST".
	// -URL – URL, куда отправляется запрос: строка, может быть и объект URL.
	// -async – если указать false, тогда запрос будет выполнен синхронно, это мы рассмотрим чуть позже.
	// -user, password – логин и пароль для базовой HTTP-авторизации (если требуется).
	// вызов open не открывает соединение. Он лишь конфигурирует запрос
	// xhr.open("GET", "http://localhost:3000/");

	// xhr.onload = function() {
	// 	console.log(xhr.response);
	// }

	// const sign = document.querySelector(".signin");

	// const handler = () => {
		// ToDo 3.Этот метод устанавливает соединение и отсылает запрос к серверу
	// 	xhr.send();
	// }

	function ajax({method, url, success, error}) {
		let xhr = new XMLHttpRequest();

		xhr.addEventListener("load", () => success.call(xhr, xhr.response));

		xhr.addEventListener("error", error.bind(xhr));

		xhr.open(method, url);
		xhr.send();
	}

	function registrationMod(selector) {

		const config = {
			payLoad: null,
			form: document.querySelector(selector),
			config: null,
			init(config) {
				this.config = config;
			},
			sendRequest() {
				ajax({
					method: "GET",
					url: "http://localhost:3000/users",
					success(response) {
						const data = JSON.parse(response);
		
						console.log(data);
					},
					error(err) {
						console.log(err);
					}
				});
			},
			prepare() {
				
			}
		};

		return config.init;
	}

	registrationMod("#reg").init({
		method: "GET",
		url: "http://localhost:3000/users",
		success(response) {
			const data = JSON.parse(response);

			console.log(data);
		},
		error(err) {
			console.log(err);
		}
	});
	const sign = document.querySelector(".signin");

	sign.addEventListener("click", function() {
		ajax({
			method: "GET",
			url: "http://localhost:3000/users",
			success(response) {
				const data = JSON.parse(response);

				console.log(data);
			},
			error(err) {
				console.log(err);
			}
		});
	});
}