angular.module("FeedbacksApp")
	.controller("PrimeraPantallaCtrl", function($scope, $http){
		console.log("Primera pantalla controller initialized");
		
        $scope.addFeedbackResult = function (){
			console.log($scope.newFeedbackResult);
			//$scope.newPet.id = parseInt($scope.newPet.id);
			$http.post('/api/feedbacksResults', $scope.newFeedbackResult)
			.then(function(response) {
			  refresh();	
			})
			.catch(function(response) {
			  console.error('Feedbacks results error', response.status, response.data);
			})
			.finally(function() {
			  console.log("Feedbacks results showed");
			});
		}
	});
