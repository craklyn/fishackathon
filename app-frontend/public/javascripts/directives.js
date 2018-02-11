var directives = angular.module('myapp.directives', []);
directives.directive('hello', function () {
    return {
        restrict: 'E',
        template: '<p>Hello from directive</p>'
    };
})
.directive('footer', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/footer.html"
    }
})
.directive('navbar', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: "directives/navbar.html"
    }
});