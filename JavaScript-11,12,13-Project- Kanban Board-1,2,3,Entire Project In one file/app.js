//! kaban borad is the terminalogy that is used for the used for software development lifecycle
//! and jira is used for project tool planning 

// ^givinh the functionality to the plus button that will help to create the new Task 

let addBtn = document.querySelector("#add-btn");
let modalCont = document.querySelector(".main-task-area-create");
let addFlag = false;
let removeTicketFlag = false;
let deleteIcon = document.querySelector('.fa-trash');

// adding the functionality to select the status of the task 

let statusList = document.querySelectorAll(".colors");

// *Now I have to get the color that is got clicked for ths task status while creating the task 

let priorityColorOfDiv = 'lightpink';

// I have to select the text area container 
let textAreaCont = document.querySelector("#text-Area-Cont");

// I have to target the main container of the ticket 
let ticketMainContainer = document.querySelector("#main-container");


// to display the default color div after creation of the ticket for second time 

let resetColorDivBorder = document.querySelector(".color-border");

// target the delete button 

let deleteButton = document.querySelector('#delete-btn');

// Write code here.

modalCont.style.display = 'none';  //firs making not to visible

addBtn.addEventListener("click" , (event) => {
    addFlag = !addFlag;

    console.log(addFlag);
    


    if(addFlag) {
        // show the modal
        modalCont.style.display = 'flex';
    } else {
        // hide the modal
        modalCont.style.display = 'none';
    }
});



// lecture 2 that is about the creating the tickets dynamically 
// edit the state and the content of the ticket 



// now I have to iterate ove rthe above list and add the functionality of the status of the task 

statusList.forEach((element , index , originalList) => {

    element.addEventListener('click' , (event) => {

        // first I have to remove the class color-border if any of the statusList elements is having that class 

        statusList.forEach(singleDiv => {
            singleDiv.classList.remove("color-border");
        })


        // get the div which got clicked 
        let targettedDiv = event.target;

        // giving the some styling to it 
        targettedDiv.classList.add("color-border");

        console.log(targettedDiv);

        // !Now I have to update the color for the task status is got created 
        priorityColorOfDiv = element.classList[0];

        console.log(priorityColorOfDiv);



    });
})



        // !now I have to create the ticket with its text and its status 
        // so I have to add the event Listner on main-task-area-create
        // keypress event I have to add 

        modalCont.addEventListener('keydown' , (event) => {
            const keyPressed = event.key;

            // console.log(keyPressed);

            if(keyPressed === 'Shift'){    //*or shift I have use keydown event keypress will not work because it is not having any number or any value because it get used with the other key hence 
                // get the ticket description 
                const ticketText = textAreaCont.value;
                const ticketUniqueId = shortid();
                
                // console.log(ticketText , ticketUniqueId);
                // !issue I am getting that I am clicking on the Shift within the entire div but is not getting triggred but inside the text crea it is getting triggred 

                // !now lets create the ticket dynamically with  the function 
                createTicket(priorityColorOfDiv , ticketText , ticketUniqueId);
            }
        });


        // function to create the ticket 
        const createTicket = (colorStatus , ticketText , ticketUniqueId) => {
            const individualTicketContainer = document.createElement('div');

            // now I have to add the class ticket-container to the above div 
            individualTicketContainer.classList.add('ticket-container');

            // *now I have to create the 3 nested div as the child of the ticketContainer I will do it using the innerHtml with bactics

            individualTicketContainer.innerHTML = `<div class="${colorStatus} ticket-color"></div>
                                        <div class="ticket-id">${ticketUniqueId}</div>
                                        <div class="task-area">${ticketText}</div>
                                        <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>`


            // now I have to add the ticket container inside the main container using it appenChild()

            ticketMainContainer.appendChild(individualTicketContainer);

            

            modalCont.style.display = 'none';
            // rechange the value to false because when I will click on the plus button it will get toggled
            addFlag = !addFlag;



            // I have to also clear the text area then the default color was selected while creating the previous task 

            textAreaCont.value = "";

            // and the border should display on the first div 
            // access it 

            // first iterate over the all the div and remove the border 

            statusList.forEach(singleDiv => {
                singleDiv.classList.remove("color-border");
            })

            resetColorDivBorder.classList.add('color-border');


            //!here only at creation I will add the delete event listner for the all the tickets using the one function 

            handleDelete(individualTicketContainer);

            // to change the state of the task using the color div in each task container 
            handleColor(individualTicketContainer);
          






        }




        // to delete this is the one way by iterating over the all the child and then remove but we will not preper this because it is not good design and takes more time complexity 



// deleteButton.addEventListener('click' , (event) => {
//     // the I have to iterate over all the childs of the main-container id div 
// // Now I have to add the event listner on the delete button 

// let allTicketsParent = document.querySelector("#main-container");


// let allTickets = document.querySelectorAll(".ticket-container");



//     allTickets.forEach((ticket , index , list) => {
//         // console.log(ticket);
//         ticket.addEventListener('click' , (event) => {
//             // now I have to get the ticket which go clicked 
//             let removeTicket = event.target;

//             // console.log(removeTicket);

//             console.log(ticket);
    
//             // removeTicket.remove();
//             allTicketsParent.removeChild(ticket);

//             // console.log(ticket);
//         })
//     })



//     console.log("delete button is working");


// })

// !good design approach to delete the ticket 

deleteButton.addEventListener('click' , (event) => {
    // toggle the flag 
    removeTicketFlag = !removeTicketFlag;

    console.log(removeTicketFlag);

    if(removeTicketFlag){
        //if it is true then delete the tickets 
        // alert the user 
        alert("Delete Mode is Activated Click on  the tickets that you want to delete ");
        // change  the color to red 
        deleteIcon.style.color = 'red';


        // now I have to add the event listner on  the all the tickets that got created in main-container 
        // Approach I will use I will add the event Listner on the tickets when it is created 
        // and I will create the one function that will delete the ticket 

        

    }
    else{
        // default color to white 
        deleteIcon.style.color = 'white';
    }
})




// function to delete the ticket to add the event Listner 

const handleDelete = (individualTicketContainer) => {

    individualTicketContainer.addEventListener('click' , (event) => {

        // now here I will check if the delete mode is on then delete that ticket 
        if(removeTicketFlag == true){
            // then remove that entire ticket from the main-container parent 
            ticketMainContainer.removeChild(individualTicketContainer);
        }
    })
};


// now to change the state of the ticket when its color is clicked should get change for that Now I have to add the event listner 
// *I will have the two option 
// 1st either add the event listner on the each ticket while creating on the color child div 
// or 2nd iterate over the all tickets that are there in the ticket container that might be little bit heavy for Time complexity  


// so I will choose the first option 

const handleColor = (individualTicketContainer) => {

    // now I have to add the event listner on the first div that is holding the color having class ticket-color
};


