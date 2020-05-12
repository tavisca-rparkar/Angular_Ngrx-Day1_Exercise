var StringArrayOperations = /** @class */ (function () {
    function StringArrayOperations(names) {
        this.names = names;
    }
    StringArrayOperations.prototype.sortNamesByLength = function () {
        return this.names.sort(function (a, b) {
            return a.length - b.length;
        });
    };
    StringArrayOperations.prototype.reverseNames = function () {
        return this.names.reverse();
    };
    return StringArrayOperations;
}());
var obj = new StringArrayOperations(["Nicholas", "John", "Adam", "Rey"]);
console.log("Sorted Names : " + obj.sortNamesByLength());
console.log("Reverse Names : " + obj.reverseNames());
