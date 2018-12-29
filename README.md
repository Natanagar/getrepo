# Тестовое задание Frontend -  jDev

###### Разработать одностраничное веб-приложение для мобильных устройств, которое будет работать c API GitHub
нужно использовать один из фреймворков: Angular 2.0, React, VueJS

Функционал:
1. При старте загружается splashscreen в котором будет написано GitHub App, а ниже фамилия и имя разработчика
2. После 3 секунд экран меняется
3. Приложение делает запрос по API и получает список репозиториев. Сделать возможность фильтрации по названию репозиториев
4. Реализовать возможность лайков репозиториев на экране списка. Лайки хранить в локальной базе данных, авторизаций/регмстрация не нужна
5. При клике на репозиторий переходим на новый экран где будет показываться детальная информация. Также реализовать возможность лайка и на экране

дизайн произвольный, на ваш вкус. Реализация дизайна будет влиять на оценку

Будет огромным плюсом при оценке результата, если вы разработаете мобильное приложение для андроида на базе [фреймворка]:
(https://ionicframework.com)
(https://cordova.apache.org)

Приложение разработано с помощью React, в качестве зависимостей использованы: внутренние библиотеки, как
1. axios,
2. moment (formatting data)

[Здесь можно посмотреть демо-версию](https://getrepo.herokuapp.com/)

При разработке приложения использован в качестве роутера использован react-router-dom (^4.0)

Чтобы установить приложение локально, склонируйте репозиторий git clone -b dev --single-branch https://github.com/Natanagar/getrepo.git
перейдите в папку с репозиторием,
далее установите зависимости с помощью package-manager
yarn install or 
npm install
и запустите программу с помощью yarn start or npm start
после этого приложение запустится на вашем компьютере [под адресом] (http://localhost:3000/)

## Pull-request
Проект был разработан как тестовое задание, но если у вас есть замечания или вы увидели ошибку, you're welcome!

## Замечания и дополнения разработчика
Хранение рейтинга с помощью  обьекта localStorage
Поиск репозитория по API Github происходит только с главной страницы
Императивный рендеринг реализован с помощью react-router
К сожалению не получилось времени уделить дизайну и поиску не только репо, но и коммитов итд, но Github API позволяет искать вышеуказанные данные и парсить их на страницу. К сожалению API Github не позволяет искать репозиторий по уникальному ID, в связи с чем реализованный алгоритм влияет на перфоманс апликации (необходимость проведения дополнительных перерасчетов в виртуальном доме)
Не реализована респонсивность и доступность(а также совместимость с браузерами)
Дизайн минималистичен


