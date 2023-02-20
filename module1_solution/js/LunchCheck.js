/** @format */

(function () {
	'use strict';
	angular
		.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.hint = '';
		$scope.lunchMenu = '';
		$scope.lunchCheck = function () {
			if (!$scope.lunchMenu) {
				$scope.hint = 'Please enter data first';
				return;
			}
			let numberOflunchItems = $scope.lunchMenu.split(',').length;
			switch (numberOflunchItems) {
				case 1:
				case 2:
				case 3:
					$scope.hint = 'Enjoy';
					break;

				default:
					$scope.hint = 'Too Much!';
					break;
			}
		};
	}
})();
