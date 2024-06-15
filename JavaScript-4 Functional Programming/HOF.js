// ^ Given the Array that is representing the radius of the different circles 
let radius = [1 , 2 , 3 , 4];

/**
 * *get the list of the diameters 
 * *get the list of the areas 
 * *get the list of the circumferances 
 */

// ~ Here I have to write the code using the DRY principal that is do not repeat Yourself

// &first write the logic to get the diameter of the different radius 

let diameter = (radiusOfCircle) =>{
    return (radiusOfCircle * radiusOfCircle);
}

let areas = (radiusOfCircle) => {
    return (Math.PI * (radiusOfCircle * radiusOfCircle) );
}


let circumferances = (radiusOfCircle) => {
    return (2 * Math.PI * radiusOfCircle);
}




let getRadiusDetailsOfCircles = (radius , callBackEachTime) => {
    // ^now iterate over the radius Array 

    // ?also create the new Array that will store the each call back appropriate values for that particular callback 
    let callBackArray = [];

    for(let i = 0 ; i < radius.length ; i++){
        let ans = callBackEachTime(radius[i]);

        // push that into the callBackArray
        callBackArray.push(ans);

    }

    return callBackArray;
}

// now call the higher order function that is getRadiusDetailsOfCircles for the each time for the different use cases 
let diameterArray = getRadiusDetailsOfCircles(radius , diameter);

console.log(diameterArray);

let areasArray = getRadiusDetailsOfCircles(radius , areas);
console.log(areasArray);


let circumferancesArray = getRadiusDetailsOfCircles(radius , circumferances);
console.log(circumferancesArray);

// ^ note : in above code I have not iterated over the Array name it as radius to get the each time diameter , area and circumferances 
// ^ rather than I have I have created the one higher order function that will take the different - different callaback each time and give the differant output 
// ^ so hence In above program using the higher order function I reduced the code redundancy and also followed the DRY Principal 

