# aqualizer

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### TASK

1. Создаем приложение, в котором существует компонент Diagrams задающий кол-во столбцов-диаграмы(7 вертикальных блоков, высотой 100-300px).
   1.2)Поведение конкретного столбца: Каждый обладает уникальным цветом, именем, значением(задает высоту блоку).

1.3) Под каждым есть регулятор (input type="range") при перемещении которого - меняется высота соответствующего блока.

2. Измененные значения сохраняются в локальном хранилище. При перезагрузке страницы - выбранные настройки сохраняются.
   3 \*) Создать кнопку, которая отфильтрует столбцы по возрастанию.

4 \*) При перезагрузке страницы отфильтрованный ряд остается.
