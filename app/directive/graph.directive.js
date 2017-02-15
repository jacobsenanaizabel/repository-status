app.directive('myGraph', function() {
    return {
      restrict: 'EA',
      transclude: true,
      scope: {
          'data': '=data'
      },
      templateUrl:'app/directive/views/graph.directive.html',
      replace: true,
      
      controller: function($scope,HomeService) {

        HomeService.getCommits().then(function(response) {

            $scope.commits = response.data;
            $scope.week_map = _.map($scope.commits, function(response) { return _.pick(response, 'week'); });
      
            $scope.graphDraw = {       
            title: {
            text: "Commits das ultimas semanas",
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
            maxItems: 1456012800,
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
                values: [$scope.week_map[0].week, $scope.week_map[1].week, $scope.week_map[2].week, $scope.week_map[3].week, $scope.week_map[4].week, $scope.week_map[5].week, $scope.week_map[6].week]
            }]
        };

        });

      }
    };

  });
 