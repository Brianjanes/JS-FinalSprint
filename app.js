// This is going to be my main file for the application.
// I will be using the fetch API to make requests to the Sam.
// I will then use a forEach loop to display the key value pairs in the console.
// Then I will write 3 functions to display 


fetch("/sampleJson.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        // Creating a table to display our JSON information.
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");

        // Create table headers
        const headers = ["Name", "Age", "Email", "City", "Province", "Country", "Phone" ];
        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        // Populate table with data from our JSON object.
        data.forEach(element => {
            const row = document.createElement("tr");

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

            const countryCell = document.createElement("td");
            countryCell.textContent = element.country;
            row.appendChild(countryCell);

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
    })
    .catch(error => {
        console.error("ERROR: ", error);
    });
