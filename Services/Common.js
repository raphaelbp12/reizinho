angular.module('App').service('Common', ['DataService','$window', function (DataService, $window) {

    var self = this;

    self.modalAlreadyOpened = false;
    self.modalSelectedGallery = {};
    self.modalImageIndex = 0;

    self.calcThumbURL = function(path, filename){
        return DataService.WPURL + path + "/thumbs/thumbs_" + filename;
    };

    self.calcYoutubeURL = function (URL) {
      return "https://www.youtube.com/embed/"+URL;
    }


    self.calcYoutubeThumbURL = function (URL) {
      return "https://img.youtube.com/vi/"+URL+"/0.jpg";
    }

    self.calcURL = function(path, filename){
        return DataService.WPURL + path + "/" + filename;
    };


    self.openLink = function(link) {
      $window.open(link);
    };

    self.calcGalleries = function(images,galleries){
        images.forEach(function (image, indexImage) {
            var foundGallery = false;
            var cover = !!parseInt(image.cover);
            var img = {
                gallery: image.title,
                url: self.calcURL(image.path, image.filename),
                url_thumb: self.calcThumbURL(image.path, image.filename),
                description: image.description,
                alttext: image.alttext
            }
            galleries.forEach(function (gallery, indexGallery) {
                if(gallery.name === image.title){
                    foundGallery = true;
                    if (cover){
                      galleries[indexGallery].description = img.description
                      galleries[indexGallery].cover = img;
                    } else {
                      galleries[indexGallery].images.push(img);
                    }
                }

            });
            if(!foundGallery){
                galleries.push({
                    id: galleries.length,
                    name: image.title,
                    images: cover ? [] : [img],
                    cover: cover? img : null,
                    description: cover ? image.description : ''
                });

            }

        });

        console.log("$scope.galleries", galleries);
    };
}]);
