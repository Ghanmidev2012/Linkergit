function id(id) {
    return document.getElementById(id);
}

id("search").addEventListener("click", function () {
    let username = id("inp").value;
    let content = id("results");
    content.innerHTML = "";

    fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => {
            if (!response.ok) {
                alert("User not found");
                return;
            }
            return response.json();
        })
        .then((data) => {
            if (!data) return;

            content.style.display = 'flex';
            content.style.flexDirection = 'column';
            content.style.alignItems = 'center';
            content.style.alignContent = 'center';

            for (let i of data) {
                content.innerHTML += `
                    <div class="card" style="width: 30rem;">
                        <div class="card-body">
                            <h5 class="card-title">${i.name}</h5>
                            <p class="card-text">${i.description}</p>
                            <a target="_blank" href="${i.html_url}" class="btn btn-outline-primary">github Link</a>
                            <a target="_blank" href="${i.homepage === null ? "404.html" : i.homepage}" class="btn btn-outline-primary">Site Link</a>
                        </div>
                    </div>
                    <br>
                `;
            }
        })
        .catch((error) => {
            console.error(error);
            alert("User not found");
        });
});