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

    HomeService.getContributors().then(function(response) {
      $scope.contributors = response.data[0];
    });
  }; 

  $scope.allBranchs = function(){

    HomeService.getBranches().then(function(response) {
      $scope.branchs = _.map(response.data, function(response) { return _.pick(response, 'name'); });
    
    });

    $scope.steps = [
      {stepName: "companyName", isComplete: true},
      {stepName: "businessType", isComplete: true},
      {stepName: "physicalAddress", isComplete: true}
    ];

  };

});