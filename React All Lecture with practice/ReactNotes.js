//*Note Very Imp :   In React we can create the All the Html Dynamically but one key point that there is should always one root element should be present in the Html body for React also 

// React create its virtual DOM and it get attached with the root element of the html body it can div , (first element that wan present inside the body of the Html)
//file modified

// !Where we can write the React Code 
// 1) In Javascript file
// 2) In TypeScript file
// 3) in Jsx file (We will prefer this one)



//! How to Inject the react in to our Code (Importing the react in our Applications)
//* 1)using CDN

/**
 * What is Content Delivery Network 
 *                          When we host some content on the server machine so that any other machines can also able to access that content it can be the some code also which is hosted on that server 
 *                          Content can be the static content image , vedio , CSs file , Js file 
 */

//^Old CDN Links : https://legacy.reactjs.org/docs/cdn-links.html
//^New Latest documentation :  https://react.dev/blog/2023/03/16/introducing-react-dev    and https://react.dev/learn


// !CDN to create the web Applications using react : (React and React Dom is required for web)
{/* <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> */}


// !And to create the app for Android and IOS using react  (React with react Native is required with its CDN)

// 
/**
 * ^What is Cross Origin Resource Sharing : 
 *                                      Means the Machine which is trying to access those resources and the Machine who Have hosted that resorces are differant that is cross origin resource sharing means the machine who is trying to access those resorcess are totally differant and that is not allowed by default 
 * So when I have to use those resorces i have to enable it hence we are writing in CDN crossorigin
 */




// !To check that react is available in my output in browser : Just Type React and hit enter (Then we will get object of the key and value pairs )  







//! Creating the elements using React 

//* let headingElement = React.createElement('h1' , props (Means Properties or attributes that you want to set for this created Element ) , content That I want In this element  // or we can pass the child element also   )



//! rendering the html elements in using react (means appending in React)
// To Attach the react code to the DOM we use ReactDOM.render()
//we can only able to attach the root of the virtul DOm to the actual DOM using the render()
// You cannot attach the multiple elements of the virtual Dom to the actual DOm directlly you have render those under one parent then you can attach that one parent of the virtual DOm to actual DOM

// * ReactDOM.render(new element that want to render , element on which you want to render new element);   // order is important 




// !How to pass the props for the html element that we have created using the React 

/**
 * * let headingElement = React.createElement('h1' , {
 * *        attr1 : "",
 * *        attr2: "",
 * *        attr3 : "",
 * *        attr4 : "",
 * *  } , "Hello From React");
 */

// ^or using the below way also I can give the props 

// let headingElement = React.createElement('h1' , {
//     style : {
//         color : "red"                                 //giving the style prop in the form of the object 
//     }
// } , "Hello From React");




//!Components and Functional Components In React (Means How diffrant part of the UI are going to talk to each other) :
/**
 * Componenets : breaking down the UI into smaller peaces that is nothing but an components 
 *                  we can break our application into the multiple smaller components 
 *                  and then I have to make sure that those all compnonents talk to each other so I can end up creating the interactive application
 * 
 * 
 * Types of Componenets : (At the End Every Componenet will return SSome html Back)
 * 
 *                      1)Class Based Componenets :
 *                                          this is deprcated means it is not now supported by meta 
 * 
 *                      2) Functional Components  : (We will Focus on this only )
 *                                          Means Some function which returns some Html Back 
 **                                         if a Function is returning a JSX that function is called 
 **                                          as Functional Componenets
 * 
 * 
 * !Note : We use Pascal case to write the Naming convention of the Functinal Componenents (Means first letter capital)
 * 
 */








//!What is JSX : (Javascript XML)

/**
 *  !JSX  : 
 * *        in the js file if we are creating  the elements using the React then this is not good approach for the optimization and also to scale the application because in the virtual DOM there will be thousands of Node so it will become very complex 
 * 
 * ^ So to solve this above issue JSX provide the one way so our application become the easily scalable and we can apply some optimization techniques over them 
 * 
 *! Example : 
 * 
 ** below we have added the html code inside the javascript code that is known as the JSX (Javascript XML) using Functional Componenets 

    function App(){

        return <h1>Hello From React Using Functional Componenets</h1>  //*which returns the HTML
    }


 *! How Javascript will identify the it is JSX : 
                                    
                                    * ^if any function is returning the html code then javascript will able to get to know that it is JSX 
                                    * ^ and That JSX will return the virtual DOM Where All the react elements are going to be there in it 

 * 

 *
 *  
 */




//!What is Babel : 
/**
 * * 1)our JSX code will not work directlly it should get convert to the ReactDOM for that we have to use Babel Libraray
 * 
 * !CDN for Babel Libraray : 
 * *<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
 */