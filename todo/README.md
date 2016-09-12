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

## Chapter 4.

### 1. directive: `ng-submit`
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>

	<div class="container">
		<form name="todoForm" ng-submit="add(newTodoTitle)">
			<div class="input-group">
				<input type="text" class="form-control" ng-model="newTodoTitle">
				<span class="input-group-btn">
					<button class="btn btn-success" type="submit">
					Add
					</button>
				</span>
			</div>

		</form>

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
		,	completed: true
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
				return item.id == todo.id 
			})

			// remove from todos
			if (index > -1) {
				$scope.todos.splice(index, 1)
			}
		}

		$scope.add = function(newTodoTitle) {
			// create new todo
			var newTodo = 
			{
				title: newTodoTitle
			,	completed: false
			,	createdAt: Date.now()
			};

			// push into todos
			$scope.todos.push(newTodo)

			//  empty form
			$scope.newTodoTitle = "";
		}
	}]);
})();
```

### 2. `{{ todoForm | json}}`
```html
<body ng-app="todo" ng-controller="TodoCtrl">
	
	<h1>Todo</h1>

	<div class="container">
		<form name="todoForm" ng-submit="add(newTodoTitle)">
			<div class="input-group">
				<input type="text" class="form-control" ng-model="newTodoTitle" placeholder="Please type a new to-do" minlength="3">
				<span class="input-group-btn">
					<button class="btn btn-success" type="submit">
					Add
					</button>
				</span>
			</div>
			<div ng-show="todoForm.$dirty && todoForm.$invalid">
				<div class="alert alert-warning" role="alert">
				Please type more than 3 characters
				</div>
			</div>
		</form>

		

		<pre>{{todoForm | json}}</pre>

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

### 3. CSS: Highlight the inputText
- __red__: when the form is not valid
- __green__: otherwise

```css
.input-group .ng-valid.ng-dirty {
	border: solid 1px green;
}

.input-group .ng-invalid.ng-dirty {
	border: solid 1px red;
}
```
