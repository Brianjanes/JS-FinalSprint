// This is going to be my main file for the application.
// I will be using the fetch API to make requests to the Sam.
// I will then use a forEach loop to display the key value pairs in the console.
// Then I will write 3 functions to display 

const headers = ["ID", "Name", "Age", "Email", "City", "Province", "Phone" ];

// Creating a table to display our JSON information.
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

// Function to display the headers of the table. This will be called later and accept 1 argument - which has to be an array of strings.
const displayHeaders = (headers) => {
    const headerRow = document.createElement("tr");
        // Looping through the headers array and creating a table header for each string in the array.
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        // Returning the headers in order as a row of headers!
        return thead.appendChild(headerRow);
};

// This function will take in a parameter, loop over the data for a key of age, and put the value in a new array. Then it will sum the values in the array and divide by the length of the array to get the average age, and print that to the console.
const displayAverageAge = (data) => {
    let ages = [];
    let ageSum = 0;
    let oldest = ""; // Variable to store the name of the person with the highest age
    let maxAge = 0; // Variable to store the highest age

    data.forEach(element => {
        ages.push(element.age);
        if (element.age > maxAge) {
            maxAge = element.age;
            oldest = element.name;
        }
    });

    for (let i = 0; i < ages.length; i++) {
        ageSum += ages[i];
    }

    let averageAge = ageSum / ages.length;
    console.log("The sum of all ages is: ", ageSum);
    console.log("The average age is: ", averageAge);
    console.log("The oldest person is: ", oldest);
};


// Fetch the JSON file and display the data in the console.
fetch("/sampleJson.json")
    // Converting the response to JSON
    .then(response => response.json())
    // Displaying the JSON object in the console though "data"
    .then(data => {
        console.log(data);

        displayHeaders(headers);

        // Populate table with data from our JSON object. Using the returned "data" from our fetch to display the values of the key value pairs.
        data.forEach(element => {
            // Making one row for each object in the JSON array.
            const row = document.createElement("tr");
            
            // Creating a cell for each key value pair in the object, in the same order as the headers.
            const idCell = document.createElement("td");
            idCell.textContent = element._id;
            row.appendChild(idCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = element.name;
            row.appendChild(nameCell);

            const ageCell = document.createElement("td");
            ageCell.textContent = element.age;
            row.appendChild(ageCell);

            const emailCell = document.createElement("td");
            emailCell.textContent = element.email;
            row.appendChild(emailCell);

            const cityCell = document.createElement("td");
            cityCell.textContent = element.city;
            row.appendChild(cityCell);

            const provinceCell = document.createElement("td");
            provinceCell.textContent = element.province;
            row.appendChild(provinceCell);

            const phoneCell = document.createElement("td");
            phoneCell.textContent = element.phone;
            row.appendChild(phoneCell);

            // Append row(s) to the table body
            tbody.appendChild(row);
        });

        // Append thead and tbody to the table
        table.appendChild(thead);
        table.appendChild(tbody);

        // Append table to the DOM, assuming there's a parent element to append it to
        document.body.appendChild(table);

        displayAverageAge(data);

        let clicks = 0

        const button = document.createElement("button")
        button.textContent = "Click me!";
        document.body.appendChild(button);
        button.addEventListener("click", () => {
            clicks +=1;
            if (clicks < 5) {
                console.log("Button clicked!");
            } else {
                console.error("Please stop the button does not like to be clicked")
                console.error(`Keylogger download complete. ${data[0].name}'s Keylogger enabled.`)
            }
        });
        
    })
    .catch(error => {
        console.error("ERROR -", error);
    });
