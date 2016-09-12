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