var Pattern = /** @class */ (function () {
    function Pattern() {
        this.result = function (height) {
            var rows = height;
            var s = "";
            // First half of the pattern
            for (var i = 0; i <= rows; i++) {
                var j = 0;
                while (j < i) {
                    s += '*';
                    j++;
                }
                s += '\n';
            }
            // Second half of the pattern
            for (i = rows - 1; i > 0; i--) {
                for (j = 0; j <= i - 1; j++) {
                    s += '*';
                }
                s += '\n';
            }
            return s;
        };
    }
    return Pattern;
}());
var pattern_obj = new Pattern();
console.log(pattern_obj.result(5));
