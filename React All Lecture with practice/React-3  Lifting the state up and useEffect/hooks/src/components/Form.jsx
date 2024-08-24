import React, { useState } from 'react'

const Form = () => {

    //* Now here I have to imlement the form to understand the real useCase of the useState() hook

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        // I have to prevent the default behaviour of the form to not get submitted 
        event.preventDefault();

        //then I want to print the some message in the console 
        console.log(`Name is : ${name} 
                      Email is  ${email}`);

        //* and after submit of the form i have to make the input fields empty again 
        setName('');
        setEmail('');
        
    }


    return (
        <div>
            <form action="" onSubmit={handleSubmit}>    {/* here I have mensioned what should happen on the submit of the form how to handle the form  */}

            <div>
                <label>Name : </label>
                {/* adding tha value property because it should take the default value of the name in that input tag 
                  but to user should enter the text I have to add event on that */}
                <input type="text"
                    id='name'
                    value={name}       /*here this input tag is taking the value from the useState of the name that is currentlly empty   */
                    onChange={(event) => {              /*here I am adding the event on the input  */
                        setName(event.target.value);
                    }} />

            </div>

            <div>
                <label>Email : </label>
                {/* adding tha value property because it should take the default value of the name in that input tag 
                  but to user should enter the text I have to add event on that */}
                <input type="email"
                    id='email'
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }} />

            </div>
            {/* I can add onClick event either on button to form get submit 
                or I can use onSubmit event so that form should get submitted  */}
            <button type='submit'>Submit</button>

        </form>
        </div>
    )
}

export default Form