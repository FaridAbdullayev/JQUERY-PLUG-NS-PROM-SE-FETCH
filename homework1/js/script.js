let ul1 = document.getElementById("ul1");

let tr = document.getElementById("listtr");

let tablelIst = document.getElementById("tableList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            let li = document.createElement("li");
            li.innerText = post.name
            li.style.cursor = "pointer"
           
            ul1.appendChild(li)
            li.addEventListener("click", function (e) {
                tablelIst.style.display = "inline-block";
                let row = document.createElement("tr");


                let idTd = document.createElement("td");
                idTd.innerText =post.id;
                row.appendChild(idTd);

                let nameTd = document.createElement("td");
                nameTd.innerText = post.name;
                row.appendChild(nameTd);

                let usernameTd = document.createElement("td");
                usernameTd.innerText =post.username;
                row.appendChild(usernameTd);

                let emailTd = document.createElement("td");
                emailTd.innerText = post.email;
                row.appendChild(emailTd)

                let addresTd = document.createElement("td");
                addresTd.innerText = post.address.city;
                row.appendChild(addresTd);

                let phoneTd = document.createElement("td");
                phoneTd.innerText = post.phone;
                row.appendChild(phoneTd);

                let websiteTd = document.createElement("td");
                websiteTd.innerText = post.website;
                row.appendChild(websiteTd);

                let companyTd = document.createElement("td");
                companyTd.innerText = post.company.name;
                row.appendChild(companyTd);


                tr.appendChild(row)

            })
        });

    })