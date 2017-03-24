angular.module('ContactsApp')
    .filter('Capitalize', function () {
        return function (input) {
            var re = /([_])/;
            input = input.replace(re, " ").toUpperCase();
            return input;
        }
    })
    .filter('LowerCasing', function () {
        return function (input) {
            return input.toLowerCase().replace(/ (\w)/g, function (match, letter) {
                return input.toLowerCase().replace(/( )/,"_");
            });

        }
    })
    .filter('KeyFilter', function () {
        return function (object, query) {
            var result = {};
            angular.forEach(object, function (val, key) {
                if(key !== query) {
                    result[key] = val;
                }
            });

            return result;
        };
    })
