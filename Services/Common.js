angular.module('App').service('Common', ['DataService', function (DataService) {

    var self = this;
    self.COVER_STRING = '#img_cover_gallery#';
    self.calcURL = function(path, filename){
        return DataService.WPURL + path + "/" + filename;
    };

    self.calcGalleries = function(images,galleries){
        images.forEach(function (image, indexImage) {
            var foundGallery = false;
            var cover = image.alttext === self.COVER_STRING;
            var img = {
                gallery: image.title,
                url: self.calcURL(image.path, image.filename),
                description: image.description,
                alttext: image.alttext
            }

            galleries.forEach(function (gallery, indexGallery) {
                if(gallery.name === image.title){
                    foundGallery = true;
                    if (cover){
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
                    cover: cover? img : null
                });

            }

        })

        console.log("$scope.galleries", galleries);
    };
}]);
