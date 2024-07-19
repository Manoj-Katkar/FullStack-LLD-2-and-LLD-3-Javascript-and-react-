// now lets create the function which will take the city name and it will give back the API response 
// this is going to be the heavy task so I have to make it as the async 




const getWeatherInfo = async (cityName) => {


    // !now I have to handle the errors properlly for that I will use try and catch block
    // *I will get the errors in this function so implement the try and catch for this function only 


    try{
        // *like below I have to make the API call each time only city will change I will achieve it using the String interpolation bactics
            // https://api.weatherapi.com/v1/current.json?key=f862b7c16bcc4a2cb37182113242506&q=Mumbai&aqi=no

            // ^ I have to make sure that I am handling the errors properlly 

            const url = `https://api.weatherapi.com/v1/current.json?key=f862b7c16bcc4a2cb37182113242506&q=${cityName}&aqi=no`;  //*get request 

            console.log(url);

            // !now to make an the API call there is the function called as the fetch(url) that I have to use 
            // *that respose is noting but an the promise in the pending state I have to resolve it using the await 
            
            const resposeFromWeatherApi  = await fetch(url);    //this is respose object which got rapper not in the JSON actual format 

            // printing the respose that I am getting from the weather API 
            console.log(resposeFromWeatherApi);

            // !now resposeFromWeatherApi is not in the actual data in  JSON format so I have to convert it into the JSON format 

            const weatherData = await resposeFromWeatherApi.json();

            console.log(weatherData);


            // !now list down the what tha data I needed that I want to display it on the My Weather App 
            /**
             * *temperature
             * *name of the city 
             * *date and time means timeStamp
             * *condition 
             * *icon image url 
             */

            const temperature = weatherData.current.temp_c;
            
            const city = weatherData.location.name;

            const dateAndTime = weatherData.current.last_updated;

            const conditionMessage = weatherData.current.condition.text;

            const imageUrl = weatherData.current.condition.icon;

            console.log(temperature);
            console.log(city);
            console.log(dateAndTime);
            console.log(conditionMessage);
            console.log(imageUrl);



            //! now I have to add this above data to the my html elements 
            // ^so first I have to target the all the elements in which I have to feed the data 

            // *first to add the temperature target that div with class temp

            let temperatureDiv = document.querySelector(".temp");

            temperatureDiv.innerText = temperature;


            // *now lets target the <p>Location name</p> by giving the one id to it 

            let locationNameDiv = document.querySelector("#location-name");

            locationNameDiv.innerText = city;


            // *now lets target the span by giving the one id to it 

            let dateAndTimeSpan = document.querySelector("#date");

            // console.log(dateAndTimeSpan.innerText);

            dateAndTimeSpan.innerText = dateAndTime;

            // *now lets target the weather condition div 

            // *first targetting the icon that is in image format 

            let weatherIconImage = document.querySelector("#weather-icon");

            // ^ Now I have to access the attribute that is src and alt 

            weatherIconImage.src = imageUrl;
            weatherIconImage.alt = "please wait it is loading ";

            // * now target the condition message 
            let conditionSpan = document.querySelector("#condition");

            conditionSpan.innerText = conditionMessage;
    }
    catch(error){
            console.log("Error occurred" , error);


            // select the container 
            const errorH1 = document.querySelector(".for-error-display");

            errorH1.innerText = `No matching location found.
                                Please Enter Valid City Name`;   //!for better visibility to user 


            console.log("falling back to the default city");
            getWeatherInfo("Mumbai");


    }

 
}



    //! now lets target the form from the nav 

    let submitForm = document.querySelector("form");


    //* inside nav lets target the input tag 

    let inputCityName = document.querySelector(".searchField");

    // console.log(inputCityName.value);

    // !Now I have to add the event listner on the form 

    submitForm.addEventListener("submit" , (event) => {

        // !here event it is getting triggred but the page is getting refreshed hence again the form is becomming empty because reload means HTML , js code will again execute 
        // !to prevent the default nature of the form use below 

        event.preventDefault();


            //^ take the text from the search field 
            //^ and then call the getWeatherInfo() function with that text 

            let cityNameFromInput = inputCityName.value;

            // then call the function with above value 
            getWeatherInfo(cityNameFromInput);
    })


// !call for the default city 
getWeatherInfo("Mumbai");
