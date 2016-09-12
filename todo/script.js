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