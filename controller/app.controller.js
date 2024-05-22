angular.module('BookStoreApp', []).controller("BookStoreController", function ($scope) {
    $scope.searchValue = "";
    $scope.selectedImageIndex = null;
    $scope.images = [
        './assets/images/main-banner-1.jpg',
        './assets/images/main-banner-2.jpg',
        './assets/images/main-banner-3.jpg',
        './assets/images/main-banner-4.jpg',
        './assets/images/main-banner-5.jpg',
        './assets/images/main-banner-6.jpg',
    ];

    $scope.selectImage = function(index) {
        $scope.selectedImageIndex = index;
    };

    $scope.isSelected = function(index) {
        return $scope.selectedImageIndex === index;
    };
});
 