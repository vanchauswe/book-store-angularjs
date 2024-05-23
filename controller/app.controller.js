angular.module('BookStoreApp', []).controller("BookStoreController", function ($scope, $interval) {
    $scope.searchValue = "";
    $scope.selectedImageIndex = 0;
    $scope.futureDate = new Date('2024-05-25');
    $scope.displayValueBookSale = 5;
    $scope.currentIndexBookSale = 0;
    $scope.images = [
        './assets/images/main-banner-1.jpg',
        './assets/images/main-banner-2.jpg',
        './assets/images/main-banner-3.jpg',
        './assets/images/main-banner-4.jpg',
        './assets/images/main-banner-5.jpg',
        './assets/images/main-banner-6.jpg',
    ];

    $scope.books = [
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
        {
            title: 'Dinh Dưỡng Học Bị Thất Truyền - Dinh Dưỡng Đẩy Lùi Bệnh Tật ',
            author: 'Vương Đào',
            price: 178000,
            salePercent: 33,
            img: './assets/images/books/160124-10.jpg',
        },
        {
            title: 'Lúc Biết Xuyên Không Thì Đã Muộn! - Tặng Kèm Card Bo Góc Random 1 Trong 3 Nhân Vật ',
            author: 'Mật Tiễn',
            price: 239000,
            salePercent: 55,
            img: './assets/images/books/231123.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/co-itsuya_bia_tap-1.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/t_nh-_u-nh_t-phai-3_b_a-1_1.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/nxbtre_full_05222023_032211-1.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
    ]

    $scope.currentBooks = [
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/050723-6.jpg',
        },
        {
            title: 'Dinh Dưỡng Học Bị Thất Truyền - Dinh Dưỡng Đẩy Lùi Bệnh Tật ',
            author: 'Vương Đào',
            price: 178000,
            salePercent: 33,
            img: './assets/images/books/160124-10.jpg',
        },
        {
            title: 'Lúc Biết Xuyên Không Thì Đã Muộn! - Tặng Kèm Card Bo Góc Random 1 Trong 3 Nhân Vật ',
            author: 'Mật Tiễn',
            price: 239000,
            salePercent: 55,
            img: './assets/images/books/231123.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/co-itsuya_bia_tap-1.jpg',
        },
        {
            title: 'Mùa Hè Không Tên - Bìa Cứng - Tặng Kèm Bookmark 2 Mặt + Poster Tranh + Lót Ly Ngẫu Nhiên + Chữ Ký Tác Giả Ngẫu Nhiên ',
            author: 'Nguyễn Nhật Ánh',
            price: 230000,
            salePercent: 30,
            img: './assets/images/books/t_nh-_u-nh_t-phai-3_b_a-1_1.jpg',
        },
    ]

    $scope.menuIcons = [
        {
            id: '1',
            icon: './assets/images/menu/menu1.png',
            title: 'Siêu Sale Hè',
        },
        {
            id: '2',
            icon: './assets/images/menu/menu2.png',
            title: 'Lê Mây',
        },
        {
            id: '3',
            icon: './assets/images/menu/menu3.png',
            title: 'Hot Wheels',
        },
        {
            id: '4',
            icon: './assets/images/menu/menu4.png',
            title: 'Sản Phẩm Được Trợ Giá',
        },
        {
            id: '5',
            icon: './assets/images/menu/menu5.png',
            title: 'Manga',
        },
        {
            id: '6',
            icon: './assets/images/menu/menu6.png',
            title: 'Flash Sale',
        },
        {
            id: '7',
            icon: './assets/images/menu/menu7.png',
            title: 'Mã Giảm Giá',
        },
        {
            id: '8',
            icon: './assets/images/menu/menu8.png',
            title: 'Đồ Chơi',
        },
        {
            id: '9',
            icon: './assets/images/menu/menu9.png',
            title: 'Phiên Chợ Sách Cũ',
        },
        {
            id: '10',
            icon: './assets/images/menu/menu10.png',
            title: 'Sản phẩm mới',
        },
    ]

    $scope.brands = [
        {
            img: './assets/images/brands/brand1.png',
        },
        {
            img: './assets/images/brands/brand2.png',
        },
        {
            img: './assets/images/brands/brand3.png',
        },
        {
            img: './assets/images/brands/brand4.png',
        },
        {
            img: './assets/images/brands/brand5.png',
        },
        {
            img: './assets/images/brands/brand6.png',
        },
        {
            img: './assets/images/brands/brand7.png',
        },
        {
            img: './assets/images/brands/brand8.png',
        },
        {
            img: './assets/images/brands/brand9.png',
        },
        {
            img: './assets/images/brands/brand10.png',
        },
        {
            img: './assets/images/brands/brand11.png',
        },
        {
            img: './assets/images/brands/brand12.png',
        },
        {
            img: './assets/images/brands/brand13.png',
        },
    ]

    $scope.contacts = [
        {
            img: './assets/icons/291720_social media_media_facebook_logo_internet_icon.svg',
        },
        {
            img: './assets/icons/294709_circle_twitter_icon.svg',
        },
        {
            img: './assets/icons/317714_video_youtube_icon.svg',
        },
        {
            img: './assets/icons/335921_printerest_social media_square_photosharing_red_icon.png',
        },
        {
            img: './assets/icons/335934_linkedin_social_social media_square_employee_icon.png',
        },
        {
            img: './assets/icons/3225191_app_instagram_logo_media_popular_icon.svg',
        },
    ]

    $scope.mainImage = $scope.images[$scope.selectedImageIndex];

    $scope.formatPrice = function(price) {
        if (price) {
          return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " VND";
        }
        return "";
    };

    $scope.changeImage = function(direction, imageIndex = null) {
        if (imageIndex !== null) {
            $scope.selectedImageIndex = imageIndex;
        } else {
            $scope.selectedImageIndex += direction;
            if ($scope.selectedImageIndex < 0) {
                $scope.selectedImageIndex = $scope.images.length - 1;
            } else if ($scope.selectedImageIndex >= $scope.images.length) {
                $scope.selectedImageIndex = 0;
            }
        }
        $scope.mainImage = $scope.images[$scope.selectedImageIndex];
    };

    $scope.changeBook = function(isIncrease) {
        var maxPage = Math.floor($scope.books.length / $scope.displayValueBookSale);
        if (isIncrease && $scope.currentIndexBookSale + 1 < maxPage) {
            $scope.currentBooks = $scope.books.slice($scope.displayValueBookSale * ($scope.currentIndexBookSale + 1), $scope.displayValueBookSale * ($scope.currentIndexBookSale + 2));
            $scope.currentIndexBookSale += 1;
            return;
        }
        if (!isIncrease && $scope.currentIndexBookSale - 1 >= 0) {
            $scope.currentBooks = $scope.books.slice($scope.displayValueBookSale * ($scope.currentIndexBookSale - 1), $scope.displayValueBookSale * $scope.currentIndexBookSale);
            $scope.currentIndexBookSale -= 1;
        }
    };

    var intervalPromise;
    $scope.startAutoChange = function() {
        intervalPromise = $interval(function() {
            $scope.changeImage(1);
        }, 2000);
    };

    $scope.stopAutoChange = function() {
        if (angular.isDefined(intervalPromise)) {
            $interval.cancel(intervalPromise);
            intervalPromise = undefined;
        }
    };

    $scope.countdownFlashsale = function() {
        var intervalPromise = $interval(function() {
            var currentDate = new Date();
            var timeDiff = $scope.futureDate.getTime() - currentDate.getTime();

            if (timeDiff <= 0) {
                $interval.cancel(intervalPromise);
                $scope.days = 0;
                $scope.hours = 0;
                $scope.minutes = 0;
                $scope.seconds = 0;
            } else {
                $scope.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                $scope.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                $scope.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                $scope.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
            }
        }, 1000);
    }

    $scope.startAutoChange();
    $scope.countdownFlashsale();

    $scope.$on('$destroy', function() {
        $scope.stopAutoChange();
    });

    $scope.$on('$destroy', function() {
        $interval.cancel(intervalPromise);
    });

    $scope.selectImage = function(index) {
        $scope.selectedImageIndex = index;
    };

    $scope.isSelected = function(index) {
        return $scope.selectedImageIndex === index;
    };
});
 