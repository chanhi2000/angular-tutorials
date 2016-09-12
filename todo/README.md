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

## Chapter 3.

### 1(a). directive: `ng-repeat`
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

### 1(b). Bootstrap Layout
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

### 2. directive: `ng-filter`

#### `date` filter
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
			<date>{{ todo.createdAt | date }}</date>
		</li>
	</ul>
</body>
```
#### `date` filter with format
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
			<date>{{ todo.createdAt | date: 'yyyy-MM-dd HH:mm:ss' }}</date>
		</li>
	</ul>

</body>
```

### 3. directive: `ng-click`

#### 3(a). Create a bootstrap button layout
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>
	<ul class="list-unstyled">
		<li ng-repeat="todo in todos">
			<div class="input-group">
				...
				<span class="input-group-btn">
					<button class="btn btn-danger" type="button">
						delete
					</button>
				</span>
			</div><!-- input-group -->	
			<date>{{ todo.createdAt | date: 'yyyy-MM-dd HH:mm:ss' }}</date>
		</li>
	</ul>

</body>
```
#### 3(b). Add `ng-click` directive to it
```html
...
<span class="input-group-btn">
	<button class="btn btn-danger" type="button" ng-click="remove()">
	delete
	</button>
</span>
...
```
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
		];

		$scope.remove = function(todo) {
			
			// find todo index in todos
			var index = $scope.todos.findIndex(function (item) {
				return item.id === todo.id 
			})

			// remove from todos
			if (index > -1) {
				$scope.todos.splice(index, 1)
			}

		}
	}]);
})();
```

#### 3(c). more `ng-click`: Filter Buttons
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>

	<div class="container">
		<ul class="list-unstyled">
			<li ng-repeat="todo in todos | filter:statusFilter">
				<div class="input-group">
					<span class="input-group-addon">
						<input type="checkbox" ng-model="todo.completed">
					</span>
					<input type="text" class="form-control" ng-model="todo.title">
					<span class="input-group-btn">
						<button class="btn btn-danger" type="button" ng-click="remove(todo)">
						delete
						</button>
					</span>
				</div><!-- input-group -->	
				<date>{{ todo.createdAt | date: 'yyyy-MM-dd HH:mm:ss' }}</date>
			</li>
		</ul>

		<button class="btn btn-primary" ng-click="statusFilter={completed:true}">
			Completed
		</button>
		<button class="btn btn-primary" ng-click="statusFilter={completed:false}">
			Active
		</button>
		<button class="btn btn-primary" ng-click="statusFilter={}">
			All
		</button>
	</div><!-- container -->

</body>
```



