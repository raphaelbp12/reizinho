angular.module('App').service('DataService', ['$http', function ($http) {

    var self = this;

    self.data = {};
    self.loadingData = false;

    self.WPURL = "http://34.229.92.175";

    self.getData = function () {
        //console.log("twitch called");
        self.loadingData = true;

        $http({
            method: "GET",
            url: self.WPURL+"/data/",
            headers: {'Content-Type': 'application/json;'}
        }).then(function(restsData) {
            self.loadingData = false;
            self.data = restsData.data.data;
            restsData.data.data.forEach(function (item) {
                console.log("response", item);
            });
        });
    };
}]);/**
 * Created by raphaelbp12 on 7/9/2017.
 */
