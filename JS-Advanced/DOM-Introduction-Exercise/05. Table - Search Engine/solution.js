function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      let rowsElements = document.getElementsByTagName("tr");
      let searchBoxElement = document.getElementById("searchField");


      let searchBoxValue = searchBoxElement.value;

      searchBoxElement.value = "";


      let workingArray = Array.from(rowsElements).slice(2);

      workingArray.map(function (x) {
         x.classList.remove("select")
      })

      for (let el of workingArray) {
         if (el.textContent.includes(searchBoxValue)) {
            el.classList.add("select");
         }
      }

   }
}