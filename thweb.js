var thApp = angular.module('thApp', [])
    
thApp.controller('GlobalController', function GlobalController($scope, $rootScope, $controller) {
	$scope.page = {
		contact: false,
		resume: false,
		home: true
	}
	$scope.title = "";
	$scope.show = function(div){
		console.log(div);
		if(div=="home"){
			$scope.title = "";
			//dataWord();
		}else if(div=="resume"){
			$scope.title = "Resume";
		}else if(div=="contact"){
			$scope.title = "Contact";
		}
		$scope.page.contact = false;
		$scope.page.resume = false;
		$scope.page.home = false;
		$scope.page[div] = true;
	}
});
function dataWord () {

  $("[data-words]").attr("data-words", function(i, d){
    var $self  = $(this),
        $words = d.split("|"),
        tot    = $words.length,
        c      = 0; 

    // CREATE SPANS INSIDE SPAN
    for(var i=0; i<tot; i++) $self.append($('<span/>',{text:$words[i]}));

    // COLLECT WORDS AND HIDE
    $words = $self.find("span").hide();

    // ANIMATE AND LOOP
    (function loop(){
      $self.animate({ width: $words.eq( c ).width() });
      $words.stop().fadeOut().eq(c).fadeIn().delay(1000).show(0, loop);
      c = ++c % tot;
    }());
    
  });

}

// dataWord(); // If you don't use external fonts use this on DOM ready; otherwise use:
$(window).on("load", dataWord);
