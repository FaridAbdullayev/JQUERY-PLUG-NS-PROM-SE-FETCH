let ul = document.querySelector("ul");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            let li = document.createElement("li");
            li.setAttribute("data-id", user.id);
            li.innerText = user.name;
            ul.appendChild(li);

            li.addEventListener("click", function () {
                let userId = user.id;
                let userHeader = document.createElement("h1");
                userHeader.innerText = `username:  ${user.username}`;
                ul.appendChild(userHeader);

                fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        let ul2 = document.createElement("ul");
                        posts.forEach(post => {
                            let li2 = document.createElement("li");
                            let link = document.createElement("a");
                            link.setAttribute("href", `details.html?postId=${post.id}`);
                            link.innerText = post.title;
                            li2.appendChild(link);
                            ul2.appendChild(li2);
                        });
                        ul.appendChild(ul2);
                    })
            });
        });
    })
   