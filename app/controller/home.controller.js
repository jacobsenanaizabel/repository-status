app.controller('HomeController', function($scope,$http, HomeService) {

  var self = this;
  self.title = "Repository Status";
  self.footer = "Feito com ❤  por Ana Izabel Jacobsen"

  $scope.init = function(){

    HomeService.getForks().then(function(response) {
      $scope.forks = response.data;
    });

    HomeService.getCommits().then(function(response) {
      $scope.commits = response.data;
    });

    HomeService.getContributors().then(function(response) {
      $scope.contributorsCount = response.data;
    });

    HomeService.getStars().then(function(response) {
      $scope.starsCount = response.data;
    });

  }
  

  //grafico 
   $scope.myJson = {
    title: {
      text: "Drag the bottom right corner to resize",
      fontSize: 16,
      fontColor: "#fff"
    },
    backgroundColor: "#2bbb9a",
    globals: {
      shadow: false,
      fontFamily: "Arial"
    },
    type: "line",
    scaleX: {
      maxItems: 8,
      lineColor: "white",
      lineWidth: "1px",
      tick: {
        lineColor: "white",
        lineWidth: "1px"
      },
      item: {
        fontColor: "white"
      },
      guide: {
        visible: false
      }
    },
    scaleY: {
      lineColor: "white",
      lineWidth: "1px",
      tick: {
        lineColor: "white",
        lineWidth: "1px"
      },
      guide: {
        lineStyle: "solid",
        lineColor: "#249178"
      },
      item: {
        fontColor: "white"
      },
    },
    tooltip: {
      visible: false
    },
    crosshairX: {
      lineColor: "#fff",
      scaleLabel: {
        backgroundColor: "#fff",
        fontColor: "#323232"
      },
      plotLabel: {
        backgroundColor: "#fff",
        fontColor: "#323232",
        text: "%v",
        borderColor: "transparent"
      }
    },
    plot: {
      lineWidth: "2px",
      lineColor: "#FFF",
      aspect: "spline",
      marker: {
        visible: false
      }
    },
    series: [{
      values: [989, 1364, 2161, 2644, 1754, 2015, 818, 77, 1260, 3912, 1671, 1836, 1901]
    }]
  }

});