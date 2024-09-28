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









// !=========================================== Day 3 ======================================

//^for in-detail information refer the Counter.jsx file from day 3 all src files 

/**
 * ^Agenda : 
 * *     1)use State hook 
 * *     2)use Effect hook
 * *     3)forms in React
 * *     4)Lifting of state in React
 * 
 * 
 * 
 * 
 * !Types of variables Any Functional Component Can Have : 
 * *                          i)props : that is someone else is sending varables by their value in my functional component as an argument
 * 
 * *                          ii)State : The variables that I have created within the function itself (Where the Scope of that variable is within the functional componenet itself ) and they store some state means as an value which is local to that functional component
 * 
 * 
 * 
 * 
 * ! What is State in React : 
 *                      The variables which is defined inside the function componenets which holds certain value that belongs to componenets itself (Means the variable which is local to mu functional component)
 *                      i)local to to the functional componenet
 *                      ii)defined and declared inside the functional component
 * 
 * 
 * !Props : 
 *          i)comming from outside 
 *           ii)defined outside 
 *           iii)passed from other componenet to your component 
 *  
 * 
 * !What is data Members : 
 *              the variables and the methods that is declared inside the class is all Data Members only 
 * 
 * !How to have the some states in the class based component : 
 * *                                        i)I have to create the data memebers for that class those will be treated as the states in the class based component 
 *        
 * 
//  ! Why we use Hook and What is Hook :
*  ^        1)to handle  the state in functional component React gave you the hook     
* ^         2) it is inbuilt method if we want to maintain the state in the functional component 
 * 
 * 
 * 
 * ^hooks using I can implement the state in the functional component are below : 
 * 
 * ! 1) useState hook : 
 **               1)it is inbuilt method 
 **               2)used to handle  the state in functional component React gave you the useState hook 
 **               3) useStae returs Array and that Array has two things = [actualVariable state, functionTo Mutaed that state];
 *~                             i)actual State 
 *~                             i)function to mutate that state 
 * 
 * 
 * !Note : all the hooks starts with use that is the convention that we follow 
 * 
 * 
 * 
 * ^Syntax of useState(): 
 * *            [actualVariable state with default value given by useState , functionTo Mutaed that state]=  useState(default value of state);
 * 
 * 
 * 
 * ^whenever we will use the useState() the the value of that variable will be retained after the refresh also means it will not get loosed (data loss will be not there)

 * 


every time we cnahe the jsx of the component then that jsx will get auto rendered again in the UI



 *!Differance between the State and Props : 
 *
 *^ i)State : 
 **      1)Every Time we change our state then jsx of that functional component will automatically get re-rendered again in UI  
 **      2)state is mutable using the function which useState() gives 
 **      3)when a state change then that component will get re-rendered in the UI
 **      4)
 * 
 * 
 * 
 * 
 * 
 * ^ii)Props : 
 **        1)props are immutable (after receving we cannot change the value of the props)
 **        2)if a differant value of the props is passed from the parent component then your that functional component not get re-rendered

 *
 * 
 * !Differance between the refreshing and re-rendering 
 * 
 * ^ 1) refreshing : 
 * *            here complete page will get refreshed
 * 
 * 
 * ^ 2)re-rendering : 
 * *         i) jsx that we are passing from the functional component that is getting refreshed and rendered in the UI without actual refreshing the page 
 * 
 * *          ii) re-rendering only happens when your state get updated not when a props get updated 
 * 
 * 
 * 
 * 
 * 
 * !How optimization In react works 
 *                  *it bunch the N no of the State changes and it re-renders only one or probably 2 or 3 state changes In the UI 
 * <>
 * 
 * 
 * 
 * 
 * !What is Lifting the State Up Concept : 
 *                    
 * ^first before understanding the lifting the state up lets understand why we do that what problem get occured that we so;ve using the lifting that state up 
 * 
 * !Problem we get : 
 *        when the two states are using the useState on the same variable then following problems do happen 
 *        i) I want the same state in the two componenets where initially we are keeping the diferant state amoung the two componenets 
 *          ^actual problems 
 *        ii) there is no way to transfer the state from the one component o other 
 *        iii) I am maintaining the two differant state that is making my code redundant writing the same lines of code again and again 
 *        iv) it can lead to inconsistency 
 *        v) so to solve the above problem we have to keep that state in the single common least nearest Ancestor inteligintelly so where it can be centrallly accesed by the both the component 
 *        
 *        *vi)so we will kepp that state in the App.jsx file that is only known as the lifting of the state 
 * 
 * 
 * 
 * !Lifting the State Up Defination : 
 *                        if two sibling component required a common state so we do not define that state in those siblings instead we will lift up that state and place it in the common Ancestor in our case it will be App.jsxv this is known as Lifting the State Up
 * 
 * 
 *^ Note :  do refer the code from the same day to understand it in better way 
 * 
 * 
 * !useEffect Hook : 
 * 
 * ^ Each component have the lifetime in below phases: 
 * *                         i)mounting
 * *                         ii)updating
 * *                         iii)un-mounting
 * 
 * ! When we had the class based component  we used to have this functions 
 *                    componentDidMount = () => {
 *                            //*it was getting executed when the class based component are getting rendered into the UI
 *                      }
 * 
 * ^Few Other methods also was there : 
 *                    componentDidUpdate = () => {
 *                            //*it was getting executed when the class based component are getting updated into the UI
 *                      }  
 * 
 * 
 *                    componentDidUnmount = () => {
 *                            //*it was getting executed when the class based component are getting unMounted into the UI
 *                      }  
 * 
 * !All the above was getting used for the class based component but now it is deprecated so there should be the way for the functional based component to so to handle the each phase of the lifetime of the component react gave the hook that is useEffect Hook
 * 
 * 
 * !useEffect Hook :
 * *              i)to handle the all the phases from the lifetime of the any component or state we use useEffect() hook 
 * *              ii) it takes two argument 
 *                          i)callback function 
 *                          ii)dependancy array  
 *              
 * 
 * !Now lets learn the multiple variations of the useEffect() hook  Total 3 Types are there :
 * *                              1) useEffect((callback function), [with empty dependancy array]) :
 *                                                      ^callback will get triggred on the 1st re-rendering
 *                                  
 * *                              2) useEffect((callback function), [with array having dependencies in it]) :
 *                                                       ^callback will get triggred on the basis on dependencies
 * 
 * *                              3) useEffect((callback function),  not passing dependancy array) :
 *                                                        ^callback will get triggred on every re-rendering 
 * 
 */















// !=========================================== Day 4 ======================================

/**
 * ^ Agenda : 
 * 
    ** Client Side routing
    ** React Router (to implement the client side routing we use React router)
    ** Talwind css  (it is third party css library)
    ** In depth Urls and routings 



    
*!Single Page Applications :
*~                        1)reloading will not happen with each click
*~                        2)In SPA performance is better comparatively
*~                        3)we can create using React Angular Viu
*~                        4)old requests are stored in browser cache 
*~                         5)example : linkedIn 
*~                         6) here only url gets changed means updated but loader will not get loaded 
*~                         7) it will be more faster because it will not make the network calls for the each that particular module it will make the first network call to the frequentlly accessed modules according to the user 




*!Muti Page Applications :
*~                        1) Reload will happen
*~                        2)we can create using JQuery
*~                        3)old requests are not stored, if same request is repeated then it will once again sent to the server.
*~                          4)problems in multipage application : because of the network calls each time and for redirecting to the differant web pages it taken time so here it increses the latency 

*~                        5) example : Amazon, flipcart
*~                         6) here both gets updated url gets changed means updated and also loader will get loaded because of the mutiple pages it is having 
*~                         7) here the frequentlly accesed component get load fast in the single page applications




/**
 * * Client Side routing :
 *                      which created the illusion that you are moving to the new page but actual not , actually the UI getting updated that is known as the client side routing 
 * 
 * 
 * 
 * !Note : if I will return the all the component in the single page applications then the total bundle size will be big so retriving that data from the backend will take more time hence we have to bundle only those components that can be frequentlly going to get accessed by the our users for that particular App 
 * 
 * 
 * 
 * 
 * 
 ** Benefits of Lazy Loading : (which are frequentlly used components only render that first later remaining based on the user request)
   Improved Performance: Only the necessary code is loaded at the start, which speeds up the initial load time.
   Reduced Bandwidth Usage: Less data is loaded initially, reducing the amount of bandwidth consumed.
   Scalability: As the application grows, lazy loading helps manage the increasing size of the codebase effectively.


 * ^When the disadvantage Lazy Loading will become of the approach accessing the all data related to the components which are getting accessed by user frequentlly 
 * !                    1) the disadvantage Lazy Loading will become when we will not acces the frequentlly used components because then I have to make the network calls to the component that is getting used by user again and again for each that will increse the time and user will not get the good experiance over there 
 * 
 * 
 * 
 * 
 * 
 * 
 * ^Approach to Install the any of the library : 
 *      go to chrome -> search library -> open the library -> see how many weekly downloads are there for that library -> then also watch last published means it is currentlly and updated with the time  -> then it is good use that library in your react project 
 * 
 * *         1) dependencies : means on which library that current library is depend on 
 * *         2) dependants :  menas how many other libraries are depend on the my current library
 * 
 * 
 * 
 * 
 * !library in react for router = react-router-dom
 *                               to install the above library use npm i react-router-dom
 * 
 * 
 * !Routes : inside the Routes only we have to write the Route components 
 * !Route : it expects the following two things 
 *             1)path='' (means urls where to go like '/home')
 *             2) element = {means which component I have to render for that path like <Home/>} 
 *             3) means when the user goes to home path then render the Home component in the web app
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * !Now lets Understand How to Read the URL's : 
 *                                     !(now all the urls are case - incensitive means uppercase and lowercase will be treated as the lowercase only )
 * 
 * ^Example : www.linkedIn.com/profile?userId=007    (how to read it)
 * 
 * *           1st part) www.linkedIn.com   (it is the base url which will be always present in any application)
 * *           2nd part) /profile        (it is path param)
 * *           3rd part) ?userId=007    (this is query param)
 * 
 * 
 * 
 * ! Now if the path param is not there then I have to show the 404 that the page you are looking for that is not present how to do that ? 
 * *           1)for this not fi=ound special case I have to pass the in the path of the route = '*' and in element display the component about the notFund with suitable message 
 * 
 * 
 * 
 * !Note : 
 * *     1)in the all the route it will get matched one by one so at the last we will keep the route for the not found path param
 * 
 * *      2) and path param are not case sensitive it will get converted into the lowercase BUT IF YOU WILL HAVE THE TWO ROUTES FOR THE same component but as the path uppercase and then lowercase then whichever the first route will be there that get rendered in the UI with its component 
 * 
 * 
 * 
 * 
 * 
 * 
 * !Link Tag (Comes with the React Router Dom Library): 
 * *                     1)when in the single page application we want to redirect to some other component then we have to use the Link tag that comes within the react-router-dom library
 *  *                     2) inside the <Link to={'/path where to redirect}></Link> there is the to attribute I have to use to re-direct to the any component using the route so only the new UI get rendered and the path  para in the domain name will get changed
 * 
 * 
 * !Differance between the Link tag and anchor tag in html :
 * 
 * ^1)<Link></Link> : 
 * *                1)it is present inside the react-router-dom
 * *                2)our application should not get load hence we have to use Link tag so that will follow the principle of the single page application
 * *                3)and it is the component that is there inside the react-router-dom library
 * *                4) link Component matches with the route component and then it rendred the match component in the UI
 * 
 * 
 * 
 * ^2)anchor tag(<a></a>) :
 * *                  1)when we use the anchor tag the page will get reload 
 * *                  2)it is mostlly used in server side routing  
 * 
 * 
 * 
 * 
 * !We have seen the below type of the urls also like : (Known as the dynamic url's or we can call it as template routes)
 * ^ ------------www.scaler.com.users/123     (means give the details of the user having the id as the 123)
 * ^  -------------So How we can extract that id data from the above url -----------------
 * 
 * !Using the useParams() hook we can able to extract that id details from the urls path params
 * 
 * !useParams() hook :  (implementation is there in Users.jsx)
 * *                1) with the help of the useParams() hook we can able to extract the id or any custom data from the url's itself 
 * *                2)it will return the params in the form of the object haviong the key as that ou have given in the psth params to route
 * *                 3) it is present inside the react router dom 
 * 
 *                    ^Example :  <Route path='/users/:id' element={<Users/>}></Route>
 *                    then : 
 * &                                    let paramsObject = useParams();
  *&                                      console.log(paramsObject.id); //*here i will get the id that user have manually entered in urls path params 

 * 

/**
 * !How to redirect using the routes : 
 * *                      1) we can achieve redirect to some other component using the Navigate component from the react-router-dom
 * 
 * ^Example : (how to use it)
 *^---------------<Route path='/abc' element={<Navigate to={'/settings'}></Navigate>}></Route>-----------
 * 
 *        *         1) when user manually types /abc as the path params then it will get navigate to /settings component
 * 
 * 
 * 
 * 
 * 
 * !Also go through the How to install the talwind css in React application :
 * 
 * !steps to install the talwind css in your react application : 
 * *    1)npm install -D tailwindcss postcss autoprefixer    (-D this defined it will go under the dev dependencies)
  **    2)  npx tailwindcss init     (it will create the configuration file for your talwind)

 * 
 * 
 * 
//  * * @type {import('tailwindcss').Config} */
// export default {
//    !here I have to mension for which files the talwind css should get applied in content: []
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/*
 !Post Css Library : 
 *          it converts the actual classes of the talwind css into the actual css code for that I have to use post css library 
 * 
 * ^if I want to get to know the more about the css library then simply search for that library name with npm 
 *    example : post css npm (Post Css Library)
 * 
 * 
 * 
 * 
 * 
 !Types of dependencies : 
 *              i)dependencies : are those dependencies which are actually required to run the your application  (it will also help to run the application in production)
 *                        Example : react , react-dom
 * 
 *                
 *              ii)devDependencies : are those dependencies which are required while building the application at the development purpose of that software app 
 *                        Example : vite ool CRA tool
 * 
 * 
 
 ! cheat-sheet for talwind css : https://nerdcave.com/tailwind-cheat-sheet



^How to give the css in react : 
                  using object we can give 
                  Example : 
                          & style = {{
                                   key : "value"   
                                   background-color : "red"
                                  
                                    }}



^IMBD 1 = just setup 
^IMDB 2 = movies page and pagination
^IMDB 3 =  TMDB API (The Movies database API), creating watch list and localstorage
^IMDB 4 =  searching,sorting,filteration and Context API
!Password and userName for TMDB API :
userName : Manoj_Code_React
password : IMDB@React 

!two imp links of the TMDB : 
https://developer.themoviedb.org/docs/getting-started
https://developer.themoviedb.org/docs/authentication-application

!API key : 39b6e395d9e668e23e0c51b81f844ad1
API Read Access Token
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWI2ZTM5NWQ5ZTY2OGUyM2UwYzUxYjgxZjg0NGFkMSIsIm5iZiI6MTcyNTQ1NDU4Ny4yMjc1NjYsInN1YiI6IjY2ZDg1NDk2YWU0NGViNjE5NjYwNDY3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IU3Y48J-RiI4xpc0kMgNl9CDD0tCX0lP6L4Og-OaAEk

!then to access the api go to the API referance page 


!Library to make the rest api calls : 
^ there is the one library that is used to make the rest api calls in React is (axios npm)



!axios : 
&Axios Response: The data from the server is automatically parsed as a JavaScript object by Axios, and it's available in the data property of the response object.


&What is Rest API : 
          ?rest API is act like the interface between the client and server and it is the one type of the API which will follow some rules will learn in up-comming classes
          to understand in details lets understand again the client server architecture 
          
          ^client : 1)where the user interacts with application (in websites it will be browser ,for mobile App it will be that app UI)
                     2) client will request for data 
          
          ^server : its an machine combination of hardware and software which serves the data to the client according to the clients request 





 
!How the localStorage will work in the react  : it works same as how it was working in the javascript methods getIteam(key) , setItem(key , value) , .clear() , removeItem(key)



^================-========================== Imdb-4: ========================================

!Agenda : 
      1)searching,
      2)sorting,
      3)filteration and 
      4)Context API , 
      5)Props drilling how to avoid it while designing the app
      6)useContext() hook in react
      7)what is the lazy loadinggo through it 

^What is props drilling : 

!🟢 Props Drilling in React:
  1️⃣ Passing data from a parent component to deeply nested child components.
🔵 Problem:
  2️⃣ Intermediate components receive props, even when they don't need them.
🟠 Example:

const Grandparent = () => {
  const message = "Hello from Grandparent!";
  
  return <Parent message={message} />; // Passing 'message' down through 'Parent'
};

const Parent = ({ message }) => {
  return <Child message={message} />; // Passing 'message' further down through 'Child'
};

const Child = ({ message }) => {
  return <p>{message}</p>; // 'Child' finally uses the 'message'
};

🟡 Why It’s a Problem:
  3️⃣ It makes code harder to maintain when components are deeply nested.
  4️⃣ Every time the data changes, each component in the hierarchy must pass it down.

! Solutions:
  🟢 5️⃣ Use Context API to pass data directly to deeply nested components.
  🔵 6️⃣ Use state management libraries like Redux, MobX, or Zustand to avoid passing props manually.




!Context API : Context is a global scope that can have any data (state or function) which devlopers want to tranfer from any component to any component it does not matter what the hirarchy is 

^using the context API : I can create the global state that will act as the central for the its all children component so wherever I needed i can get it using the hook 
!Syntax : 
*         useContext(Name of the context . jsx file ) hook 

          i) it will return the all the things that I am providing to the all the children components in the form of the object 
          ii)so to access that state , updater function or any other functions I have to do the object destructuring over there 
          iii) Note : I have to make that context component Wrapper to the parent of the every component inside the Appjsx file itself 

   benifits useContext() : so because of this I do not have to create the state at each component seperatlly and maintain it and its also resolve the issue of the props drilling     
   
   

   !Context API 
   !hooks are used to achieve the functionality hence we will not use the custom hooks 

/**
^     * ### React Context API - 

**    The **Context API** in React is a mechanism for managing and passing global state between components, eliminating the need for "prop drilling," where props are manually passed down through each layer of components. It allows components to share data without having to explicitly pass props through every intermediate level.

    #### Key Components of the Context API:

 **   1. **Context Creation (`createContext`)**:
      - `React.createContext()` is used to create a new context. This function returns a context object that will hold and manage the shared state.

 **   2. **Provider Component**:
      - The **Provider** is a component that wraps around parts of the app that need access to the context data.
      - It takes a `value` prop, which is the data you want to share with child components.

 **   3. **Consumer Components**:
      - **Consumers** are components that can access the shared context data. In function components, you can use the `useContext` hook to access the context value.

 **   4. **`useContext` Hook**:
      - In functional components, `useContext()` allows components to subscribe to context changes and retrieve the shared data more easily.

  **  #### When to Use Context API:
    - **Global State**: When you need to manage global application state like user authentication, themes, or application settings.
    - **Avoid Prop Drilling**: When state or data needs to be accessed by deeply nested components, Context API simplifies the process.

 **   #### Benefits:
    - Simplifies state management in medium to large-scale apps.
    - Reduces the need for passing props through multiple layers of components.





























^================-========================== Redux-1 ========================================

!Agenda : 
      1)redux and its advantages 
      2)how redux works 
      3)installing redux and redux toolkit 
      4)actual integrating redux in react applications //^see in the counter application 
      5) also create the (to do list app) to see how the redux works 
      6)
      7)
    
      
!What is redux : it is the javascript third party library which provides global state to your react application means we can                create the global state using the redux 
                  i)it also do manages the state and handle issue of the props drilling 


  ^To set up Redux and Redux Toolkit in a React application, follow these steps:
                  1)Install Redux, Redux Toolkit, and React-Redux.
                  2)Create feature slices using createSlice().
                  3)Create the Redux store using configureStore(). //store means the collection of the all slices
                  4)Provide the store to the React application using the Provider. = <Provider store={store}><App/></Provider>  
                              i)we can do this into the App.jsx or main.jsx because both are the parent of the all the componenets 
                              
                  5)Use useSelector to get the state and useDispatch to dispatch actions in your components (It will perform the consuming step).
                                i)const count = useSelector(store => {return store.counterState.count});
                                ii)const dispatch = useDispatch();

                 6)for that particular slice All the buissness Logic I have to put it inside the reducers of that Slice 
                 
                 7)action contains the 2 things : 
                              i)type      : it will be the name of the reducer that I want to invoke from that Slice 
                              ii)payload  :  this is the data that I am passing from the dispatch while inviking the reducer of that Slice that is type only (type and reducer refer to same that is functionality that we have added in the reducers with differant names )

                             iii)first To get the all the reducers of that particular Slice I have to import the all the actions because actions only denoting to my reducers via type property 
                                          ^so import the actions  
                                          ^ const actions = NameOfTheSlice.actions


                 7) folder structure I have to follow while creating the slices and the store : 
                        src/
                            ├── components/      // Your React components
                            ├── features/
                            │   └── sliceName/              //just another folder with proper slice Name inside that maintain the slice logic
                            │       ├── sliceNameSlice.js  // Define the slice
                            │       ├── sliceNameSelectors.js  // Optional: Selectors for the slice
                            ├── store/
                            │   └── store.js      // Main Redux store configuration
                            └── App.js            // Main React component



   !Understanding redux with Real-World Shop Example in Redux:
   
   ^Shop = Store:
              The shop represents the store in Redux. Just like a shop stores all the items (products, inventory), the Redux store holds all the application's state. This includes the data related to various sections like electronics, clothes, etc.

    ^Sections = Slices:
              The sections of the shop (like Electronics, Hardware, Clothes) are like slices in Redux. Each slice manages a part of the state. For example, the Electronics slice manages products like laptops and mobiles, while the Clothes slice handles shirts and pants.


    ^Owner = Dispatcher:
              The owner of the shop is the dispatcher. The owner controls how the shop works by giving orders. Similarly, the dispatcher in Redux sends instructions (actions) to the store to update the state (like adding/removing products).


    ^Order = Action:
              An order is what the user (customer) places in the shop. In Redux, this is called an action. Actions tell the store what to do (e.g., "Add product to cart," "Remove item from inventory").


    ^User = Component:
              The user is a React component in the Redux system. Just like the customer interacts with the shop (by browsing and placing orders), React components interact with the Redux store by dispatching actions and consuming data from the store.




   !Diagrammatic Representation :            

              +----------------------------------------------------+
              |                       SHOP (Store)                |
              |   +-----------------+  +------------------------+ |
              |   | Electronics      |  | Clothes                | |
              |   | (Slice)          |  | (Slice)                | |
              |   +-----------------+  +------------------------+ |
              +----------------------------------------------------+
                        ^                       ^
                        | (Dispatcher)           |
                  +------------+          +------------+
                  |  Owner     |  ----->  |  Action    | (Order)
                  +------------+          +------------+
                        ^                         |
                        (User / Component)          |
                  +----------------------------+   |
                  | Customer / React Component  |<--+
                  +----------------------------+






   !To use Redux in a React application, you can follow these basic steps:

   !================================installing the packages needed for redux =================================

            ^1). Install Redux and React-Redux
            First, you need to install the necessary libraries:
            bash
            code:
            npm install @reduxjs/toolkit  react-redux






 !================================ Create feature slices using createSlice()=================================== ===          


            ^2).Create feature slices using createSlice(). Create Reducers (Slices)   
            ^                         1)(for every global state that you want to maintain I have to create the new Slice for that and then put the all the Slices in the store )  (all slice are functionality only so it will be .js file )  

            ^                          2) All Slices are going to be the object only 



            Reducers manage specific parts of the state. Each reducer is like a section of the shop.
            javascript
            Copy code

            import {createSlice} from "@reduxjs/toolkit"

           !to create the Slice we have to use the createSlice method that is present inside the "@reduxjs/toolkit"

            const counterSlice = createSlice({
                name:"counterSlice",

                 ^initialState can be anything likle how we were creating the differant data type state in useState() hook like number , string , object , array anything we can give for the initialState but function is not allowed to pass as the initialState value 
                ^all the keys name should be same like name , initialState 

                initialState:{
                    count:0
                },

               ^reducers contain the all the buissness logic 
                reducers:{
                    increment:((state , action) => {
                        console.log("payload : " , action);

                         !here the actionis object inside that key is payload where the  data that is passed it is getting recived 
                        //https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow (refer this link to understand the flow in better way )
                        state.count = state.count + action.payload;
                    }),

                    decrement:((state , action) => {
                        state.count = state.count - action.payload;
                    })
                }


            });


            export default counterSlice;








!=================================== Create the Redux store using configureStore() ===========================================



            ^3). Create the Redux store using configureStore(). //store means the collection of the all slices
            The store holds your entire application's state. (1 app 1 store only)
            javascript
            code:


           !Note : For one app there will be only one store going to be there 

            ^first import the configureStore method from "@reduxjs/toolkit" which will help to create the store 

            import { configureStore } from "@reduxjs/toolkit";

            ^ Now I  have to import the all the SLices 

            import counterSlice from "../features/counter/counterSlice";

            ^Now I have to import the toDoSlice here 
            import ToDoSlice from "../features/toDo/ToDoSlice";


            !Now lets create the store using configureStore() method which takes argument as the object only 

            const store = configureStore({

                 !here I have to mension the all reducers for differant - differant Slices that I will import 
                 ^redcer is the place where we keep the all the business logic 

                reducer:{
                    
                    counterState:counterSlice.reducer ,   //*here I am importing the all the reducers from the counterSlice inside the one key counterState
                    
                    toDoState:ToDoSlice.reducer
                }
            });

            export default store;









!============================================= Provide the store to the React application using the Provide r=====================================


            ^4)Provide the store to the React application using the Provider. = <Provider store={store}><App/></Provider>  
                              i)we can do this into the App.jsx or main.jsx because both are the parent of the all the componenets 

            code: 

            import { StrictMode } from 'react'
            import { createRoot } from 'react-dom/client'
            import App from './App.jsx'
            import './index.css'
            import { Provider } from 'react-redux'
            import store from './store/store';

            createRoot(document.getElementById('root')).render(
              <StrictMode>
                <Provider store={store}>   //^here Provider is given with store 
                    <App />
                </Provider>
              </StrictMode>,
            )





            




!============================ Use useSelector to get the state and useDispatch to dispatch actions in your components ========================================



            ^5)Use useSelector to get the state and useDispatch to dispatch actions in your components (It will perform the consuming step).
                                i)const count = useSelector(store => {return store.counterState.count});
                                ii)const dispatch = useDispatch();

              code : 

                      import React, { useState } from 'react'
                      import { useDispatch, useSelector } from 'react-redux'
                      import store from '../store/store'
                      import counterSlice from '../features/counter/counterSlice'

                      ! importing the all the actions of that particular Slice 

                      const actions = counterSlice.actions;

                      const CounterRedux = () => {

                          //! I will take the state from the redux and also update the state and also give the functionality using the slices inside that mension the reducers 

                       ^using the useSelector(store) I will access the state value from the store that will go inside that Slice and provide me that value 

                        & useSelector(store) :  
                                                // i)it will take the argument store 
                                                // ii)now from that store I have to access the that Slice and from that Slice I will get the state value (redux internally will handle this things)

                        let count = useSelector(store => {return store.counterState.count});  //!this is how we can read the global state created for the counter 


                        // !now to pass the action then I have to use the dispatch function that I will get it from the useDispath() hook 

                        let dispatch = useDispatch();

                        console.log("dispatch function  ", dispatch);



                        

                          let IncrementCounter = (event) => {

                            // !Now I am dispatching with the help of the actions in function I can pass the parameters also that will be taken as the payload 
                            dispatch(actions.increment(10));


                          }

                          let DecrementCounter = (event) => {
                            
                            // !Now I am dispatching with the help of the actions in function I can pass the parameters also that will be taken as the payload 
                            dispatch(actions.decrement(10));
                          }



                        return (
                          <div>
                              <h1>Count : {count}</h1>
                              <button onClick={IncrementCounter}>Increment</button>
                            
                              <button onClick={DecrementCounter}>Decrement</button>
                          </div>
                        )
                      }

                      export default CounterRedux










!==========================================  Any Slice keep Buissness Logic  ========================================================

            ^6)for that particular slice All the buissness Logic I have to put it inside the reducers of that Slice 
              code : (Example of the Slice which keep Buissness Logic)
                  import {createSlice} from "@reduxjs/toolkit"

                  // !to create the Slice we have to use the createSlice method that is present inside the "@reduxjs/toolkit"

                  const counterSlice = createSlice({
                      name:"counterSlice",

                      // ^initialState can be anything likle how we were creating the differant data type state in useState() hook like number , string , object , array anything we can give for the initialState but function is not allowed to pass as the initialState value 
                      // ^all the keys name should be same like name , initialState 

                      initialState:{
                          count:0
                      },

                      // ^reducers contain the all the buissness logic 
                      reducers:{
                          increment:((state , action) => {
                              console.log("payload : " , action);

                              // !here the actionis object inside that key is payload where the  data that is passed it is getting recived 
                              // https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow (refer this link to understand the flow in better way )
                              state.count = state.count + action.payload;
                          }),

                          decrement:((state , action) => {
                              state.count = state.count - action.payload;
                          })
                      }


                  });


                  export default counterSlice;



            ^7)action contains the 2 things : 
                              i)type      : it will be the name of the reducer that I want to invoke from that Slice 
                              ii)payload  :  this is the data that I am passing from the dispatch while invoking the reducer of that Slice that is type only (type and reducer refer to same that is functionality that we have added in the reducers with differant names )

                             iii)first To get the all the reducers of that particular Slice I have to import the all the actions because actions only denoting to my reducers via type property 
                                          ^so import the actions  
                                          ^ const actions = NameOfTheSlice.actions





    !diagram of the data flow in redux ? : 


        +-----------------------+           +---------------------------+
        |    React Component     |           |         Action            |
        |  (UI/User Interaction) |           | (e.g., { type: 'ADD_ITEM',|
        +-----------+------------+           |           payload })       |
                    |                            +---------------------------+
                    |                             |
                    v                             v
        +-----------+----------------------------+-------------------------+
        |                       Dispatcher (dispatch)                      |
        |    (Sends Action to Reducer when user interacts with UI)          |
        +-------------------------------------------------------------------+
                                        |
                                        v
        +-------------------------------------------------------------------+
        |                              Reducer                              |
        |  (A function that receives the current state and the action,      |
        |   then returns the new state based on the action type)            |
        +-------------------------------------------------------------------+
                                        |
                                        v
        +-------------------------------------------------------------------+
        |                              Store                                |
        |   (Holds the entire application state and updates it with the     |
        |    new state received from the reducer)                           |
        +-------------------------------------------------------------------+
                                        |
                                        v
        +---------------------+                          +--------------------+
        |     React Component |<-------------------------|  Updated State     |
        |     (Renders new UI |      (Subscribes to the   | (From Redux Store) |
        |      based on state)|       store and updates) |                    |
        +---------------------+                          +--------------------+



  !Note : I have the lifecyle of redux image in the images folder do refer that for better understanding of the redux   
  
  ^learned abou the redux tookit how to implement it while creating the large scale applications , learned about how to configure store , create the slice . Provide the store , and also add the reducers in any Slice , also learned useSelector() hook used to access the state and useDispatch() whcih return the function so I can change the state using the dispatch(actions.reducerName(pass payload here)) 

 */

