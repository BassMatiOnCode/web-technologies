"use strict";
;
;
;
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.length ** 2;
        //	case "rectangle" :
        //		return shape.length * shape.width ;
        default:
            const n = shape;
            return 0;
    }
}
