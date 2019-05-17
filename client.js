$(document).ready(readyNow);

function readyNow() {
    console.log('Hello World')
    //submit button to collect the information
    $('#submitButton').on('click', newInfo);
}
function newInfo() {
    console.log('submit button is clicked')

    let firstName = $('#firstName').val();
    let lastName = $('#firstName').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();

    //submit button to calculate monthly costs
    //append information to the DOM

    $('#moneyTable').append(
       `<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${id}</td>
            <td>${title}</td>
            <td>${annualSalary}</td>
        </tr>`
    )

    firstName = $('#firstName').val('');
    lastName = $('#firstName').val('');
    id = $('#id').val('');
    title = $('#title').val('');
    annualSalary = $('#annualSalary').val('');



}


//using stored data, calculate monthly costs 
//append monthly costs to the DOM

//If total monthly cost exceeds $20,000, add a red background color 

//create a delete button that removes employees from DOM