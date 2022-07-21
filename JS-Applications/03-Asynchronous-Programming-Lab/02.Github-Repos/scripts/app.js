async function loadRepos() {
	let inputElementValue = document.querySelector('#username').value;
	let listElement = document.querySelector('#repos');

	const url = `https://api.github.com/users/${inputElementValue}/repos`;

	try {
		let response = await fetch(url);
		if (response.status != 200) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		let data = await response.json();
		listElement.replaceChildren();
		processData(data);
	} catch (error) {
		processError(error);
	}

	function processData(data) {
		for (let d of data) {
			let liElement = document.createElement('li');
			let aElement = document.createElement('a');
			aElement.setAttribute('href', d.html_url);
			aElement.textContent = d.full_name;
			liElement.appendChild(aElement);
			listElement.appendChild(liElement);
		}

	}

	function processError(errore) {
		listElement.replaceChildren();
		let liElement = document.createElement('li');
		liElement.textContent = errore.message;
		listElement.appendChild(liElement);
	}
}