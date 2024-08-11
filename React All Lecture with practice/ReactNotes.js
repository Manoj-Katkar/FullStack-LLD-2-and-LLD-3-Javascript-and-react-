//*Note Very Imp :   In React we can create the All the Html Dynamically but one key point that there is should always one root element should be present in the Html body for React also 

// React create its virtual DOM and it get attached with the root element of the html body it can div , (first element that wan present inside the body of the Html)


// !Where we can write the React Code 
// 1) In Javascript file
// 2) In TypeScript file
// 3) in Jsx file (We will prefer this one)



//! How to Inject the react in to our Code (Importing the react in our Applications)
//* 1)using CDN

/**
 * What is Content Delivery Network 
 *                          When we host some content on the server machine so that any other machines can also able to access that content it can be the some code also which is hosted on that server 
 *                          *Content can be the static content image , vedio , CSs file , Js file 
 */

//^Old CDN Links : https://legacy.reactjs.org/docs/cdn-links.html
//^New Latest documentation :  https://react.dev/blog/2023/03/16/introducing-react-dev    and https://react.dev/learn


// *CDN to create the web Applications using react : (React and React Dom is required  for web)
{/* <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> */}


// *And to create the app for Android and IOS using react  (React with react Native is required with its CDN)

// 
/**
 * ^What is Cross Origin Resource Sharing : 
 *                                      Means the Machine which is trying to access those resources and the Machine who Have hosted that resorces are differant that is cross origin resource sharing means the machine who is trying to access those resorcess are totally differant and that is not allowed by default 
 * So when I have to use those resorces i have to enable it hence we are writing in CDN crossorigin
 */




// !To check that react is available in my output in browser : Just Type React and hit enter (Then we will get object of the key and value pairs )  







//! Creating the elements using React 

//* let headingElement = React.createElement('h1' , props (Means Properties or attributes that you want to set for this created Element ) , content That I want In this element  // or we can pass the child element also   )

// !While creating the elements first is the mandatory but the second and the third argument is optional while creating the element using the React 



//! rendering the html elements in using react (means appending in React)
// To Attach the react code to the DOM we use ReactDOM.render()
//we can only able to attach the root of the virtul DOm to the actual DOM using the render()
// You cannot attach the multiple elements of the virtual Dom to the actual DOm directlly you have render those under one parent then you can attach that one parent of the virtual DOm to actual DOM

// * ReactDOM.render(new element that want to render , element on which you want to render new element);   // order is important 


// !What is the virtual DOM : Means All the code that React has To offer (to attach the react virtual Dom that it is offering to the actual dom we use render)



// !How to pass the props for the html element that we have created using the React 
// ^props is nothing but an one object only 

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
 * *Types of Componenets : (At the End Every Componenet will return Some html Back)
 * 
 *                      1)Class Based Componenets :
 *                                          this is deprcated means it is not now supported by meta 
 * 
 *                      2) Functional Components  : (We will Focus on this only )
 *                                          Means Some function which returns some Html Back 
 **                                          if a Function is returning a JSX that function is called 
 **                                          as Functional Componenets
 * 
 * 
 * !Note : We use Pascal case to write the Naming convention of the Functinal Componenents (Means first letter capital)
 * 
 */








//!What is JSX : (Javascript XML) (it will allow to write the html in React so it will automatically create the virtual DOM )

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






// Agile methodology 

// All this is done under the sprint planning 

// Product backlog is the priotirezed list of stories that must be develop inside the product 
// Product owner will maintain it .(product owner will set the acceptance criteria)
// Scrus master : he will drive the entire team he is a big supporter for entire project 
// product owner : is acting like a customer but he is not a customer

//Spring planning = 2 hours per week 
// Meeting time = if it is one week sprint then planning should happen in two hours 
// i sprint is 4 weeks then planning should happen in 4 hours 

// job of scrum master : to help everyone 

// In core team of the scrum total people count should be 7 + or - 2

// !Job of the Product owner 
// maintain the Product Backlog 
// manage the priprity 
// help them to understand the stories 
// set acceptance criteria 







// !=========================================== Day 2 ======================================

/**
 * ^ Agenda : 
    **  Build tools for React, 
    ** How to Create the Componenets 
    ** Props and State
    ** Conditional Rendering 
    ** Event Handling in React
    
 */


/**
 * !What is Boiler Plate Code :
 *                         1)Some default code on top of which I can Write my own Code 
 *                         2)own code I can write over here boiler plate code that is default structure on which I am wrting my code is known as boiler plate code
 * 
 * 
 * 
 * !What browser Understand :
 * *                       it will understand the plane vanila javascript it will not understand any framework or libraray like React so I have to bundle the all the files into the one javascriot file at end 
 * 
 * 
 * !So to solve the above browser issue to bind the all files into js one file Build tools for React, came into the picture 
 * 
 * 
 * ^Build tools for React : 
 *                      i)this tools provide the boiler platting for complex applications so developers life will get easy 
 *                       ii)and this also help to bundle the all files code into the one bundled file code in js format so the browser can render that code in UI
 * 
 * 
 * 
 * ^ Some Common Build tools for React : 
 * *              1)CRA (Create React App)   (it is heavily used)
 * *             2)Vite (but it is faster than CRA) //!so use this for now larger application (bundling process is faster in Vite Than CRA hence use Vite)
 *                         i)it is used to get the boiler plate code for the differant framework 
 * 
 * 
 * 
 * 
 * 
 * 
 * !How Can we use Vite to create the React larger Application : 
 * 
 * ^Steps : 
 * *       1)npm create vite@latest NameOF-Your-React-Project --template react   (you can get for other gramework also )
 * 
 *         2) we will get few options :  Vanilla
                                          Vue
                                          React    //!Select React
                                          Preact
                                          Lit
                                          Svelte
                                          Solid
                                          Qwik
                                          Others
 * 
 * 
 *          3) then further we will get few options : TypeScript
                                                      TypeScript + SWC
                                                      JavaScript   //! (select javascript)
                                                      JavaScript + SWC
                                                      Remix ↗
 * 
            4) then boiler plate code for your react app is get created using Build tool Vite


            **the I have to run the 3 commands one by one I have written in points also refer the points also 
            *! commands to run the react app is : 
                                *^  cd my-first-React-App  (changing the directory)
                                *^  npm install            (installing the all the dependencies)
                                *^  npm run dev             (then runing the react Application on browser)


            5) then I have to install the all the dependencies in my project for that change the directory 
                cd my-first-app
            
            6) then  use npm install (it will install the all the third party libraries that I need in the project by going into the package.json file )   (it will also install the nested dependency also )


            //^ npm run dev (dev means vite that will run the react App on My localHost)

// !Now how to run the React Application :
//^                           1)use (npm run dev)   // (it is command)
// &                          2) it will bundeled all your code html and js and react which will be taken care by Vite automatically







// !What is package.json : 

 * ^package.json : it is like Registry or folder 
                 ** it will maintain the list of all the dependencies    (means the all third party libraries)                              

         
                 
 * !npm : (NODE PACAKGE MANAGER) : it is used to manage and maintain the third party libraries 
 * 
 * 
 */

/**
 * //* here (^ it is carrot sign which will restrict the to change the major version of the react but it will allow to change the minor version under same major version so handle the our app should work with the compatibility what we have created )
 * 
 * !  "react": "^18.3.1",    
   *! "react-dom": "^18.3.1"
 */


   // !Why Not to upload the node_module folder to github 
   // &                                      1)_because it takes to much space 
   // &                                      ) so simply upload the package.json so the other developer will download the all the dependencies from npm by looking at the package.json file 



  //  !Differant files that vite toll boilerPlate provides for React Application 


  //  !main.jsx : 
  //                ^(in this file the attachment of the virtual DOM will be done to the actual dom that is id with root division in index.html)



  //! App.jsx : 
  // ^          here we will write the all the functinal componenets that are in js XML format 


  // !index.css : 
  // ^          this is the default CSS that built tool is provides that is global CSS 

  //! App.css : 
  // ^          this is functional Componenets level CSS it will get apply to them only 





// !What is fragement in html : 
// ^       <> Hello </>     (this <> brackets are the fragements when we do not want to create the any html tag then simply we will use that )




// ^ All About the Componenets 


/**
 * !Where to write the React code : 
 * *                          We will write the React Code for our react application under the src folder     
 * 
 * !if we want to create the componenets then that also we will create it inside the src folder make the one folder name it as componenets and inside that create the jsx file and there you can write the your custom componenets 
 * 
 * 
 * 
 * 
 * 
 * !shot-cut to create the componenet boiler plate code : 
 * *                                              i)type in jsx componenet file as = rafce + enter 
 * 
 * * rafce (meaning) = react Arrow Function Export Component
 * 
 * 
 * 
 * ?Note : Every Component in React must have a Atleast one return  
 */




// ! How to add the props to the custom componenets (so it will become the dynamic in nature):



