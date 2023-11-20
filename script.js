// Your existing client-side JavaScript code with corrections and fetch requests

function submitUserForm(event) {
    event.preventDefault();
  
    var fName = document.querySelector('input[name="f_name"]').value;
    var iName = document.querySelector('input[name="i_name"]').value;
    var password = document.querySelector('input[name="password"]').value;
    var gender = document.querySelector('select[name="gender"]').value;
    var martial = document.querySelector('select[name="martial"]').value;
    var dob = document.querySelector('input[name="DOB"]').value;
    var ans = document.querySelector('input[name="ans"]').value;
    var mobile = document.querySelector('input[name="Mobile"]').value;
  
    if (!fName || !iName || !password || !gender || !martial || !dob || !ans || !mobile) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Send the user data to the server
    fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fName, iName, password, gender, martial, dob, ans, mobile }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response if needed
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    // Reset form values
    document.querySelector('input[name="f_name"]').value = '';
    document.querySelector('input[name="i_name"]').value = '';
    document.querySelector('input[name="password"]').value = '';
    document.querySelector('select[name="gender"]').value = 'male';
    document.querySelector('select[name="martial"]').value = 'single';
    document.querySelector('input[name="DOB"]').value = '';
    document.querySelector('input[name="ans"]').value = '';
    document.querySelector('input[name="Mobile"]').value = '';
  }
  
  function submitBookingForm(event) {
    event.preventDefault();
  
    var trainNo = document.querySelector('input[name="train_no"]').value;
    var trainName = document.querySelector('input[name="train_name"]').value;
    var doj = document.querySelector('input[name="doj"]').value;
    var trainClass = document.querySelector('select[name="Class"]').value;
    var tatkal = document.querySelector('input[name="tatkal"]').checked;
    var seatType = document.querySelector('select[name="seat_type"]').value;
  
    if (!trainNo || !trainName || !doj || !trainClass || !seatType) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Send the booking data to the server
    fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ trainNo, trainName, doj, trainClass, tatkal, seatType }),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response if needed
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
    // Reset form values
    document.querySelector('input[name="train_no"]').value = '';
    document.querySelector('input[name="train_name"]').value = '';
    document.querySelector('input[name="doj"]').value = '';
    document.querySelector('select[name="Class"]').value = '';
    document.querySelector('input[name="tatkal"]').checked = false;
    document.querySelector('select[name="seat_type"]').value = '';
  }
  