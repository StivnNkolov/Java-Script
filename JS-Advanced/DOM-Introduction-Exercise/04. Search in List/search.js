function search() {
   let listElement = document.getElementsByTagName("li");
   let searchBoxElement = document.getElementById("searchText");
   let searchBoxValue = searchBoxElement.value;


   let listElementAsArray = Array.from(listElement);

   listElementAsArray.map(function (x) {
      x.style.fontWeight = "";
      x.style.textDecoration = "";
   })


   let elementsThatContains = listElementAsArray
      .filter(function (x) {
         if (x.textContent.includes(searchBoxValue)) {
            return x;
         }
      }).map(function (x) {
         x.style.fontWeight = "bold";
         x.style.textDecoration = "underline";
      })

   let elementsThatMatchCount = elementsThatContains.length;
   let resultValue = document.getElementById("result").textContent = `${elementsThatMatchCount} matches found`;

}
