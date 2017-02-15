app.controller('HomeController', function($scope,$http, HomeService) {

  var self = this;
  self.title = "Repository Status";
  self.footer = "Feito com ❤  por Ana Izabel Jacobsen";

  $scope.init = function(){

    HomeService.getForks().then(function(response) {
      $scope.forks = response.data;
    });

    HomeService.getStars().then(function(response) {
      $scope.stars = response.data;
    });
    
    HomeService.getCommits().then(function(response) {
      $scope.commits = response.data;
    });

    HomeService.getContributors().then(function(response) {
      $scope.contributors = response.data[0];
    });
  };  

});