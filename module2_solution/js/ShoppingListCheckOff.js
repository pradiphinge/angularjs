/** @format */

(function () {
	'use Strict';
	angular
		.module('ShoppingListCheckOff', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListService', ShoppingListService);

	function ShoppingListService() {
		let service = this,
			toBuyItems = [
				{ name: 'cookies', quantity: 10 },
				{ name: 'chocolates', quantity: 5 },
				{ name: 'sugary drinks', quantity: 3 },
				{ name: 'milk', quantity: 5 },
				{ name: 'biscuits', quantity: 5 },
			],
			boughtItems = [];

		service.buyItem = function (index) {
			//remove item from toBuyItems
			const toBuy = toBuyItems.splice(index, 1);
			console.log(toBuyItems);
			//add item to boughtItems
			boughtItems.push(toBuy[0]);
			console.log(boughtItems);
		};

		service.getBoughtItems = function () {
			return boughtItems;
		};

		service.getToBuyItems = function () {
			return toBuyItems;
		};
	}

	ToBuyController.$inject = ['ShoppingListService'];

	function ToBuyController(ShoppingListService) {
		let toBuy = this;
		toBuy.items = ShoppingListService.getToBuyItems();
		toBuy.buyItem = function (itemIndex) {
			ShoppingListService.buyItem(itemIndex);
		};
	}

	AlreadyBoughtController.$inject = ['ShoppingListService'];
	function AlreadyBoughtController(ShoppingListService) {
		let alreadyBought = this;
		alreadyBought.items = ShoppingListService.getBoughtItems();
	}
})();
