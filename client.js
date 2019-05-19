$(document).ready(readyNow);

let totalSal = [80000, 58000, 48000];

function readyNow() {
    console.log('Hello World')
        //submit button 
    $('#submitButton').on('click', newInfo); //callback function
    $('#moneyTable').on('click', '.deleteMoney', deleteInfo);
}

function newInfo(event) {
    console.log('submit button is clicked')
    let employeeData = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: Number($('#annualSalary').val())
    }

    totalSal.push(employeeData.annualSalary);

    console.log(totalSal);

    //using stored data, calculate monthly costs 
    //append monthly costs to the DOM
    let sum = 0;
    for (let i = 0; i < totalSal.length; i++) {
        sum += totalSal[i];
    }
    let ave = sum / 12;
    console.log(ave);


    //submit button to calculate monthly costs
    //append information to the DOM
    $('#moneyTable').append(
            `<tr>
            <td>${employeeData.firstName}</td>
            <td>${employeeData.lastName}</td>
            <td>${employeeData.id}</td>
            <td>${employeeData.title}</td>
            <td>$${employeeData.annualSalary }</td>
            <td><button class="deleteMoney">Delete</button></td>
        </tr>`
        )
        //using stored data, calculate monthly costs 
        //append monthly costs to the DOM
    let el = $('.aveDisplay');
    el.empty();
    el.append(ave);

    $('#firstName').val('');
    $('#firstName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');


    event.preventDefault(); //Prevent the form submit default
}

function deleteInfo() {
    console.log('info is deleted');
    $(this).closest(`tr`).remove(); //jQuery selector
}

//if total monthly cost exceeds $20,000, add a red background