$(document).ready(readyNow);

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
        lastName: $('#firstName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
    }

    //submit button to calculate monthly costs
    //append information to the DOM
    $('#moneyTable').append(
        `<tr>
            <td>${employeeData.firstName}</td>
            <td>${employeeData.lastName}</td>
            <td>${employeeData.id}</td>
            <td>${employeeData.title}</td>
            <td>${employeeData.annualSalary}</td>
            <td><button class="deleteMoney">Delete</button></td>
        </tr>`
    )

    $('#firstName').val('');
    $('#firstName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

    event.preventDefault(); //Prevent the form submit default

}

function deleteInfo() {
    console.log('info is deleted');
    $(this).closest(`tr`).remove();

    //using stored data, calculate monthly costs 
    //append monthly costs to the DOM

    let total = 0;
    let totalShmoney = ('.shmoney');
    for (let i = 0; i < totalShmoney.length; i++) {
        $('#monthlyShmoney').on('', totalShmoney[i]);

    }

    //if total monthly cost exceeds $20,000, add a red background
    if (totalShmoney > $20000) {
        ('#monthlyShmoney').css('background -color', 'red');
    }

}