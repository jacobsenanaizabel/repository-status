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
            $scope.week_map = _.map($scope.commits, function(response) { return _.pick(response, 'total'); });
            
            var config = {
            "type": "area",
            "scale-x":{
                "labels":["Semana 1","Semana 2","Semana 3","Semana 4","Semana 5","Semana 6","Semana 7"]
            },
            "scale-y": {
                "values":"0:200:50",
                "short":true,
                "short-unit":"commit",
                "thousands-separator":","
            },
            "plot":{
                "aspect":"spline"
            },
            "plotarea":{
                "margin-left":"dynamic"
            },
            "series": [
                {
                "values":[$scope.week_map[45].total,$scope.week_map[46].total,$scope.week_map[47].total,$scope.week_map[48].total,$scope.week_map[49].total,$scope.week_map[50].total,$scope.week_map[51].total]
                }
            ]
            };
            
            zingchart.render({ 
                id : 'drawGraph', 
                data : config, 
                height: 400, 
                width: "100%"
            });
          
        });

      }
    };

  });
 