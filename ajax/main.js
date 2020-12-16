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
	// -async – если указать false, тогда запрос будет выполнен синхронно.
	// -user, password – логин и пароль для базовой HTTP-авторизации (если требуется).
	// вызов open не открывает соединение. Он лишь конфигурирует запрос
	// xhr.open("GET", "http://localhost:3000/");

	// xhr.onload = function() {
	// 	console.log(xhr.response);
	// }

	// const handler = () => {
		// ToDo 3.Этот метод устанавливает соединение и отсылает запрос к серверу
	// 	xhr.send();
	// }

	// payLoad - параметр для отправки POST запроса(хранит тело запроса)
	function ajax({method, url, payLoad, success, error}) {
		let xhr = new XMLHttpRequest();

		xhr.addEventListener("load", () => success.call(xhr, xhr.response));

		xhr.addEventListener("error", error.bind(xhr));

		xhr.open(method, url);
		// данные которые будут посылаться на сервер
		// если используется GET-запрос, то send() пустой,
		// если используем POST-запрос, то send(payLoad) с телом запроса
		method.toUpperCase() === "GET" ? xhr.send() : xhr.send(payLoad);
	}

	function registrationCheck(selector) {
		// объект конфигурации регистрации
		const config = {
			// данные для формы(то что будем отправлять)
			payLoad: null,
			// форма - откуда будут взяты данные для отправки на регистрацию
			form: document.querySelector(selector),
			// тот конфиг, который будет передаваться в функцию ajax
			// (каким методом, куда, обраблтчики ответов)
			config: null,
			// получаем конфигурацию и инициализируем событие submit
			init(config) {
				if(config) {
					this.config = config;
					this.bindEvent();
				}
			},
			// отправить запрос при нажатии на кнопку 
			sendRequest() {
				// если форма прошла валидацию (все поля заполнены), то шлем запрос
				if(this.prepare()) {
					const payLoad = JSON.stringify(this.prepare());
					ajax({
						// к тому, что есть в объекте конфиг, добавим данные объекта payLoad
						...this.config,
						payLoad
				});
				}
			},
			// к форме привязывает событие submit, которое генерируется кнопкой отправить
			bindEvent() {
				this.form.addEventListener("submit", event => {
					event.preventDefault();
					// отправляем данные на сервер
					this.sendRequest();
				});
			},
			// соберет данные с формы и запишет в payLoad
			prepare() {
				const inputs = document.querySelectorAll("input");
				const data = {};
				// флаг если поля не пустые
				let valid = true;
				// идем по инпутам и берем значения по атрибуту
				[].forEach.call(inputs, ({name, value}) => {
					// если значение не пустое, создать св-во
					if(value) {
						data[name] = value;
					} else {
						valid = false;
					}
				});
				// если флаг, то вернем данные, а иначе в sendRequest() уйдет false
				return (valid) ? data : false;
			}
		};
		// поскольку в registrationMod().init - это вызов функции у которой нет имени
		// поэтому тут мы даем ей имя init и привязываем контекст 
		// иначе при вызове registrationMod() пропадет наш контекст
		return {init: config.init.bind(config)};
	}

	registrationCheck("#reg").init({
		method: "POST",
		url: "http://localhost:3000/reg",
		success(response) {
			const data = JSON.parse(response);
			// получив ответ с сервера, отправляем новый запрос на получение данных
			// по id
			ajax({
				method: "POST",
				url: "http://localhost:3000/",
				// ложим в тело запроса данные, которые пришли
				payLoad: data,
				success(response) {
					// обрабатываем ответ
					const serverRes = JSON.parse(response)
					console.log(serverRes);
				},
				error(err) {
					console.log(err);
				}
			});
		},
		error(err) {
			console.log(err);
		}
	});
}