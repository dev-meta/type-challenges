var Type;
(function (Type) {
    Type[Type["a"] = 1] = "a";
    Type[Type["b"] = 2] = "b";
})(Type || (Type = {}));
var x = Type['a'];
var m = Type[1];
