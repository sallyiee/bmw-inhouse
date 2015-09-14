
/* jshint white:false */

(function() {
  'use strict';


		//CARS
		var cars = [{
			"name": "6 Series",
			"modelUrl": "6-series",
			"colour":[
				{"name": "crystal-white-pearl",
				"longname": "Crystal White Pearl"},
		  		{"name":"protonic-blue-metallic",
		  		"longname": "Patonic Blue Metallic"},
		  		{"name": "sophisto-grey",
		  		"longname": "Sophisto Grey"},
		  		{"name":"iconic-silver-metallic",
		  		"longname": "Iconic Silver Metallic"}
			],
			"interior":[
				{"name":"black-nappa-leather",
				"longname":"Black Nappa Leather"},
				{"name":"saddle-nappa-leather",
				"longname": "Saddle Nappa Leather"},
				{"name":"silver-nappa-leather",
				"longname": "Silver Nappa Leather"},
				{"name":"grey-nappa-leather", 
				"longname": "Grey Nappa Leather"}
			],
			"price": "100,000",
			"accessories":[
				{"name": "tyre"},
				{"name":"exhaust"},
				{"name": "iphone"},
				{"name": "break"},
				{"name": "mug"},
				{"name": "light"}
			]
		},
		{
			"name": "7 Series",
			"modelUrl": "7-series",
			"colour":[
				{"name": "crystal-white-pearl",
				"longname": "Crystal White Pearl"},
		  		{"name":"protonic-blue-metallic",
		  		"longname": "Patonic Blue Metallic"},
		  		{"name": "sophisto-grey",
		  		"longname": "Sophisto Grey"},
		  		{"name":"iconic-silver-metallic",
		  		"longname": "Iconic Silver Metallic"}
			],
			"interior":[
				{"name":"black-nappa-leather",
				"longname":"Black Nappa Leather"},
				{"name":"saddle-nappa-leather",
				"longname": "Saddle Nappa Leather"},
				{"name":"silver-nappa-leather",
				"longname": "Silver Nappa Leather"},
				{"name":"grey-nappa-leather",
				"longname": "Grey Nappa Leather"}
			],
			"price": "120,000",
			"accessories":[
				{"name": "tyre"},
				{"name":"exhaust"},
				{"name": "iphone"},
				{"name": "break"},
				{"name": "mug"},
				{"name": "light"}
			]
		},
		{
			"name": "Z4",
			"modelUrl": "z4",
			"colour":[
				{"name": "crystal-white-pearl",
				"longname": "Crystal White Pearl"},
		  		{"name":"protonic-blue-metallic",
		  		"longname": "Patonic Blue Metallic"},
		  		{"name": "sophisto-grey",
		  		"longname": "Sophisto Grey"},
		  		{"name":"iconic-silver-metallic",
		  		"longname": "Iconic Silver Metallic"}
			],
			"interior":[
				{"name":"black-nappa-leather",
				"longname":"Black Nappa Leather"},
				{"name":"saddle-nappa-leather",
				"longname": "Saddle Nappa Leather"},
				{"name":"silver-nappa-leather",
				"longname": "Silver Nappa Leather"},
				{"name":"grey-nappa-leather",
				"longname": "Grey Nappa Leather"}
			],
			"price" : "130,000",
			"accessories":[
				{"name": "tyre"},
				{"name":"exhaust"},
				{"name": "iphone"},
				{"name": "break"},
				{"name": "mug"},
				{"name": "light"}
			]
		},
		{
			"name": "i8",
			"modelUrl": "i8",
			"colour":[
				{"name": "crystal-white-pearl",
				"longname": "Crystal White Pearl"},
		  		{"name":"protonic-blue-metallic",
		  		"longname": "Patonic Blue Metallic"},
		  		{"name": "sophisto-grey",
		  		"longname": "Sophisto Grey"},
		  		{"name":"iconic-silver-metallic",
		  		"longname": "Iconic Silver Metallic"}
			],
			"interior":[
				{"name":"black-nappa-leather",
				"longname":"Black Nappa Leather"},
				{"name":"saddle-nappa-leather",
				"longname": "Saddle Nappa Leather"},
				{"name":"silver-nappa-leather",
				"longname": "Silver Nappa Leather"},
				{"name":"grey-nappa-leather",
				"longname": "Grey Nappa Leather"}
			],
			"price": "182,000",
			"accessories":[
				{"name": "tyre"},
				{"name":"exhaust"},
				{"name": "iphone"},
				{"name": "break"},
				{"name": "mug"},
				{"name": "light"}
			]
		}];

		var selectedCar;
		var addClass;
		//Angular Config
		var app = angular.module('bmw',[]);

		app.controller('mainController', ['$scope', function($scope){
			$scope.cars = cars;
			angular.forEach($scope.cars, function(item){
				// console.log(item.colour)
			})
			$scope.selectCar = function(car){
				$scope.selectedCar = car;
				console.log(selectedCar);
			}

			$scope.addClass = function() {
                var element = angular.addClass('.item');
                console.log('Clicked');
 };


		}]);

}).call(this);
