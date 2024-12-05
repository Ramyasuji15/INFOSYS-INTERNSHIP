document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Password length check
        if (passwordInput.value.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        // If all checks pass, submit the form
        alert("Login successful!");
        loginForm.submit();
    });

    // Function to show the modal with custom message
    function showModal(message) {
    const modal = document.getElementById("successModal");
    const modalContent = modal.querySelector("p");
    modalContent.textContent = message;
    modal.style.display = "block";
}

    // Close the modal when the 'x' button is clicked
    document.querySelector(".close-button").onclick = function() {
    document.getElementById("successModal").style.display = "none";
}

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

    // Handle login form submission
    document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Validation logic for login (if needed)
    const password = document.querySelector('#loginForm input[type="password"]').value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    // Show the success modal for login
    showModal("Login Successful!");
});

    // Handle registration form submission
    document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Validation logic for registration (if needed)
    const password = document.querySelector('#registrationForm input[type="password"]').value;
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    // Show the success modal for registration
    showModal("Registration Successful!");
});

// Function to show the modal with custom message
function showModal(message) {
    const modal = document.getElementById("successModal");
    const modalContent = modal.querySelector("p");
    modalContent.textContent = message;
    modal.style.display = "block";
}

// Close the modal when the 'x' button is clicked
document.querySelector(".close-button").onclick = function() {
    document.getElementById("successModal").style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("successModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle registration form submission
    document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get password values
    const createPassword = document.getElementById("createPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check password length
    if (createPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    // Check if passwords match
    if (createPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Show the success modal for registration
    showModal("Registration Successful!");
});

});

// Function to check agent availability
async function checkAgentAvailability(agentId, date) {
    try {
        const response = await fetch(`http://localhost:3000/agentAvailability?agentId=${agentId}&date=${date}`);
        const data = await response.json();
        
        if (data.available) {
            alert("Agent is available.");
        } else {
            alert("Agent is not available.");
        }
    } catch (error) {
        console.error("Error checking agent availability:", error);
    }
}

// Function to book an agent
async function bookAgent(bookingData) {
    try {
        const response = await fetch('http://localhost:3000/bookAgent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert("Agent booking successful!");
        } else {
            alert("Failed to book agent. Please try again.");
        }
    } catch (error) {
        console.error("Error booking agent:", error);
    }
}

// Function to fetch admin dashboard data
async function fetchAdminDashboardData() {
    try {
        const response = await fetch('http://localhost:3000/adminDashboard');
        const data = await response.json();
        
        // Display data on the admin dashboard page (assuming there are elements for these)
        document.getElementById('totalUsers').textContent = data.totalUsers;
        document.getElementById('totalBookings').textContent = data.totalBookings;
        document.getElementById('totalAgents').textContent = data.totalAgents;
        
        // Populate recent bookings (assuming there's a table in HTML)
        const bookingTable = document.getElementById('recentBookingsTable');
        data.recentBookings.forEach(booking => {
            const row = bookingTable.insertRow();
            row.insertCell(0).textContent = booking.userName;
            row.insertCell(1).textContent = booking.agentName;
            row.insertCell(2).textContent = booking.date;
            row.insertCell(3).textContent = booking.status;
        });
        
    } catch (error) {
        console.error("Error fetching admin dashboard data:", error);
    }
}

// Example usage of each function

// Checking agent availability when the form is submitted
document.getElementById('availabilityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const agentId = document.getElementById('agentId').value;
    const date = document.getElementById('date').value;
    checkAgentAvailability(agentId, date);
});

// Booking an agent when the booking form is submitted
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const bookingData = {
        userId: document.getElementById('userId').value,
        agentId: document.getElementById('agentId').value,
        date: document.getElementById('bookingDate').value
    };
    bookAgent(bookingData);
});

// Loading admin dashboard data when the page loads
document.addEventListener('DOMContentLoaded', function () {
    fetchAdminDashboardData();
});

// script.js that girl

function checkAvailability(agentName, isAvailable, contactInfo = "") {
    if (isAvailable) {
        alert('Agent Details:\nName: ${agent-name}\nContact: ${contactInfo}');
    } else {
        alert('You will be notified when ${agent-name} isavailable.');
    }
  }
  
  
  
  
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Collect input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
  
    // Basic validation (for demonstration purposes)
    if (!name || !email || !phone || !date) {
        alert("Please fill out all fields.");
        return;
    }
  
    // Process the appointment booking (e.g., send to server, etc.)
    // Here we just log to the console
    console.log("Appointment Booked:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Appointment Date:", date);
  
    alert("Appointment booked successfully!");
  
    // Optionally, reset the form
    document.getElementById('appointmentForm').reset();
  });
  
  
  // Function to handle the form submission
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Capture the form data
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
  
    // Display the data in console (you can send it to a server if required)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  
    // Show an alert for the user to know their message was sent
    alert("Thank you for your message! We will get back to you soon.");
    
    // Clear the form fields
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMessage").value = "";
  });
  //that girl