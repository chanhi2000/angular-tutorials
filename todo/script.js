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