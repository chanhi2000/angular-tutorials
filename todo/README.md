# AngularJS Tutorials

## 1. Make To-Do Web-App with AngularJS

### directive: `ng-app`
Designate the body tag as 'ng-app'
```html
<body ng-app>
	<h1>Hello {{ name }}</h1>
</body>
```

### directive: `ng-init`
Edit the body tag to add `name` variable
```html
<body ng-app ng-init="name = 'Chris'">
	<h1>Hello {{ name }}</h1>
</body>
```

### directive: `ng-controller`
#### 1.
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

#### 2.
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

#### 3.
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

### directive: `ng-model`
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	<h1>Todo</h1>

	<!-- {{ todo }} -->
	<input type="text" ng-model="todo.title">
	<input type="checkbox" ng-model="todo.completed">
	<date>{{ todo.createdAt }}</date>

</body>
```

### directive: `ng-repeat`
```js
(function () {
	var app = angular.module('todo', []);

	app.controller('TodoCtrl',['$scope', function($scope) {
		$scope.todos = [
		{
			title: 'yoga fire'
		,	completed: false
		,	createdAt: Date.now()
		},
		{
			title: 'angular tutorial'
		,	completed: false
		,	createdAt: Date.now()
		},
		{
			title: 'exercise'
		,	completed: false
		,	createdAt: Date.now()
		}
		]
	}]);
})();
```
```html
<body ng-app="todo" ng-controller="TodoCtrl">

	<h1>Todo</h1>
	<div ng-repeat="todo in todos">
		<input type="text" ng-model="todo.title">
		<input type="checkbox" ng-model="todo.completed">
		<date>{{ todo.createdAt }}</date>
		<br>
	</div>

</body>
```
or
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>
	<ul>
		<li ng-repeat="todo in todos">
			<input type="text" ng-model="todo.title">
			<input type="checkbox" ng-model="todo.completed">
			<date>{{ todo.createdAt }}</date>
		</li>
	</ul>

</body>
```

### Bootstrap Layout
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>
	<ul class="list-unstyled">
		<li ng-repeat="todo in todos">
			<div class="input-group">
				<span class="input-group-addon">
					<input type="checkbox" ng-model="todo.completed">
				</span>
				<input type="text" class="form-control" ng-model="todo.title">
			</div><!-- input-group -->	
			<date>{{ todo.createdAt }}</date>
		</li>
	</ul>

</body>
```

