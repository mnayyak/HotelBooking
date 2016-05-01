var mainController = angular.module('mainController', []);

mainController.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
	var i = 0,
		inputKey = "",
		oldKey = null,
		timer = 0;
		longKeyPress = false,
		longKeyPressedTimer = 0;
	$scope.counter;
	$scope.keyValue = "";
	$scope.keyElements = [['1', '.', ',', '!'],
						  ['2', 'a', 'b', 'c'],
						  ['3', 'd', 'e', 'f'], 
						  ['4', 'g', 'h', 'i'], 
						  ['5', 'j', 'k', 'l'],
						  ['6', 'm', 'n', 'o'], 
						  ['7', 'p', 'q', 'r', 's'],
						  ['8', 't', 'u', 'v'],
						  ['9', 'w', 'x', 'y', 'z'],
						  ['*'], ['0'], ['#']
						 ];

	$scope.longKeyPressed = function(key) {
		if(longKeyPressedTimer){
			$timeout.cancel(longKeyPressedTimer);
			longKeyPressedTimer = 0;
			longKeyPress = false;
		}
		longKeyPressedTimer = $timeout(function() {
			$scope.keyValue = $scope.keyValue.concat(key[0]);
			longKeyPress = true;
		}, 1000);
	}						

	$scope.keyPress = function(key, keyLength) {
		if(longKeyPressedTimer){
			console.log("killed longKeyPressedTimer");
			$timeout.cancel(longKeyPressedTimer);
		}
		
		if(longKeyPress){
			longKeyPress = false;
			return;
		} 
		if(timer){
			$timeout.cancel(timer); 
		}
		timer = $timeout(function() {
			/*Clear the keyPress*/
			console.log("Calling Clear timer function");
			i = 0;
			oldKey = "";
		}, 1000);
		console.log($scope.counter);
		console.log(key);
		console.log("key is"+key);
		//$scope.keyValue = $scope.keyValue.concat(key[i]);
		if(key === oldKey || oldKey === null){
			if(oldKey === null) {
				oldKey = key;
			}
			if(i < keyLength - 1){
				i++;
			} else {
				i = 1;
				oldKey = null;
			}
			inputKey = key[i];
			var length = $scope.keyValue.length;
			$scope.keyValue = $scope.keyValue.substr(0, length-1).concat(inputKey);
			//$scope.keyValue.push(inputKey);
		} else {
			oldKey = key;
			i = 1;
			inputKey = key[1];
			$scope.keyValue = $scope.keyValue.concat(inputKey);
			//$scope.keyValue($scope.keyValue.length - 1) = inputKey; 
		}
	}


}]);
