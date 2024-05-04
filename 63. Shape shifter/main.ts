// Creating a custom type (type alias) for shapes that could be circles or rectangles
type shape = {
    kind: "circle" | "rectangle";
    radius?: number; //only for circles
    width?: number; //only for rectangles
    height?: number; //only for rectangles
};

//Describing a circle using our shape type 
let circle: shape = {
    kind: "circle",
    radius: 5
};

//Describing  a rectangle using our shape type
let rectangle: shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

//showing what we discribed 
console.log(circle); // Here's the circle
console.log(rectangle); //Here's the rectangle


