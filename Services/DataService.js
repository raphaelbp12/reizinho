angular.module('App').service('DataService', ['$http', function ($http) {

    var self = this;

    self.data = {};
    self.generalInfo = {};
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
            self.generalInfo = restsData.data.general_info;
            self.data = restsData.data.data;
            restsData.data.data.forEach(function (item) {
                console.log("response", item);
            });
        });
    };

    self.sendEmail = function (data) {
        $http({
            method: "POST",
            url: self.WPURL+"/email/",
            headers: {'Content-Type': 'application/json;'},
            data: data
        }).then(function(res) {
            console.log(res);
        });
    };
}]);
