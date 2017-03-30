angular.module("FeedbacksApp", ["ngRoute"])
	//El código de configuración se ejecuta antes de empezar la app
	.config(function ($routeProvider){
		$routeProvider
			.when("/", {
				controller: "PrimeraPantallaCtrl",
				templateUrl: "primeraPantalla.html"
		
    	})
	});