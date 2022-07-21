async function loadCommits() {

    let usrernameValue = document.querySelector('#username').value;
    let repoValue = document.querySelector('#repo').value;

    let listElement = document.querySelector('#commits');
    console.log(listElement)

    const url = `https://api.github.com/repos/${usrernameValue}/${repoValue}/commits`;

    try {
        let response = await fetch(url);

        if (response.status != 200) {
            throw new Error(response.status);
        }

        let data = await response.json();
        renderData(data);

    } catch (error) {
        renderError(error);
    }

    function renderData(data) {
        listElement.replaceChildren();
        for (let d of data) {
            let liElement = document.createElement('li');
            liElement.textContent = `${d.commit.author.name}: ${d.commit.message}`
            listElement.appendChild(liElement);
        }
    }

    function renderError(error) {
        listElement.replaceChildren();
        let liElement = document.createElement('li');
        liElement.textContent = `Error: ${error.message } (Not Found)`;
        listElement.appendChild(liElement);


    }

}