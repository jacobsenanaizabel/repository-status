app.service('HomeService', function($http,$q, $log) {

    var self = this;
    var defer = $q.defer(); 
    var GITHUB_PATH = 'http://api.github.com/repos/jacobsenanaizabel/repository-status';
    
    var endpoints = {
        commits: GITHUB_PATH + "contributors",        
        contributors:GITHUB_PATH + "contributors",
        forks: GITHUB_PATH, 
        stars: GITHUB_PATH
    };

   self.getMessages = function() {
   
    };

    self.getCommits = function () {
    $http
        .get(endpoints.forks)
        .then(function(response) {
            return response;
        }).catch(function(e) {
            console.log('Try-catch mudinho  : ', e);
        });
    }

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
    }

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
    }

    
    self.getStars = function () {
    $http
        .get(endpoints.stars)
        .then(function(response) {
            return response.data.stargazers_count;
        }).catch(function(e) {
            console.log('Try-catch mudinho  : ', e);
        });
    }
});
