### Перемещение элемента

#### Легенда

Вы решили развлечься и реализовать некое подобие игры, где гномы (или другие существа), выскакивают из "отверстий" и по ним нужно бить молотком:

![](./pic/GracefulMiniatureBustard-small.gif)

Copyright gfycat.com

#### Описание

Соберите инфраструктуру проекта на базе Webpack, ESLint, Babel, Jest, Webpack Dev Server.

Поскольку мы более гуманны, вам нужно реализовать лишь первую часть этой игры - перемещение объекта в DOM Tree.

Для этого самостоятельно разработайте игровое поле 4x4 и персонажа в виде картинки `img` (при загрузке страницы должен программно генерироваться и ставиться в рандомную позицию внутри игрового поля). С помощью функции `setInterval` запланируйте перемещение существующего объекта `img` в другое поле (алгоритм - рандомное перемещение, без перемещения в то же самое поле).
Важно: не используйте `removeChild`! Проверьте, что будет, если `Node` изменить родителя.


[![Build Status](https://ci.appveyor.com/api/projects/status/github/bel-lov/domA)](https://ci.appveyor.com/api/projects/status/github/mkpankov/hello)


[Ссылка на задание](https://github.com/bel-lov/domA)

![CI](https://github.com/bel-lov/domA/actions/workflows/web.yml/badge.svg)



