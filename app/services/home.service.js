app.service('HomeService', function($http,$q, $log) {

    var self = this;
    var defer = $q.defer(); 
    var GITHUB_PATH = 'http://api.github.com/repos/jacobsenanaizabel/repository-status';
    
    var endpoints = {
        commits: GITHUB_PATH + "/stats/commit_activity",        
        contributors:GITHUB_PATH + "/contributors",
        forks: GITHUB_PATH, 
        stars: GITHUB_PATH
    };

    self.getCommits = function () {
        return $http
            .get(endpoints.commits)
            .success(function(response) {
                defer.resolve(response.data);
                return defer.promise;

            }).error(function(e) {
                defer.reject(e);
            });
        return defer.promise;
    };

    self.getContributors = function () {
        return $http
            .get(endpoints.contributors)
            .success(function(response) {
                defer.resolve(response.data);
                return defer.promise;

            }).error(function(e) {
                defer.reject(e);
            });
        return defer.promise;
    };

    self.getForks = function () {   
        return $http
            .get(endpoints.forks)
            .success(function(response) {
                defer.resolve(response.data);
                return defer.promise;

            }).error(function(e) {
                defer.reject(e);
            });
        return defer.promise;
    };

    
    self.getStars = function () {
        return $http
            .get(endpoints.stars)
            .success(function(response) {
                defer.resolve(response.data);
                return defer.promise;

            }).error(function(e) {
                defer.reject(e);
            });
        return defer.promise;
    };
});
