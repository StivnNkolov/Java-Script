async function loadRepos() {
   let divElement = document.querySelector('#res');
   try {
      let response = await fetch('https://api.github.com/users/testnakov/repos');

      if (response.status != 200) {
         throw new Error(`${response.status} ${response.statusText}`);
      }
      let data = await response.text();
      divElement.textContent = data;
   } catch (error) {
      console.log(error);
   }
}