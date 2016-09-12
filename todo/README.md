# AngularJS Tutorials
Make To-Do Web-App with AngularJS

## Chapter 2.

### 1. directive: `ng-app`
Designate the body tag as 'ng-app'
```html
<body ng-app>
	<h1>Hello {{ name }}</h1>
</body>
```

### 2. directive: `ng-init`
Edit the body tag to add `name` variable
```html
<body ng-app ng-init="name = 'Chris'">
	<h1>Hello {{ name }}</h1>
</body>
```

### 3. directive: `ng-controller`
#### a.
```js
(function () {
	var app = angular.module('todo', []);
})();
```
```html
<body ng-app="todo" ng-init="name = 'Chris'">
	<h1>Hello {{ name }}</h1>
</body>
```

#### b.
```js
(function () {
	var app = angular.module('todo', []);

	app.controller('TodoCtrl',['$scope', function($scope) {
		$scope.name = 'Chris'
	}]);
})();
```
```html
<body ng-app ng-controller="TodoCtrl">
	<h1>Hello {{  name  }}</h1>
</body>
```

#### c.
```js
(function () {
	var app = angular.module('todo', []);

	app.controller('TodoCtrl',['$scope', function($scope) {
		$scope.todo = {
			title: 'yoga fire',
			completed: false,
			createdAt: Date.now()
		};
	}]);
})();
```
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	<h1>Todo</h1>

	{{ todo }}

</body>
```
or
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	<h1>Todo</h1>

	<!-- {{ todo }} -->
	<h3>{{ todo.title }}</h3>
	<p>{{ todo.completed }}</p>
	<date>{{ todo.createdAt }}</date>

</body>
```

### 4. directive: `ng-model`
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	<h1>Todo</h1>

	<!-- {{ todo }} -->
	<input type="text" ng-model="todo.title">
	<input type="checkbox" ng-model="todo.completed">
	<date>{{ todo.createdAt }}</date>

</body>
```