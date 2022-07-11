function getchange() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      return data.json();
    })
    .then((completedData) => {
      let data1 = "";
      completedData.map((currentVale) => {
        data1 = `
                <h4 id="name">${currentVale.name}</h4>
        <h4 id="email">${currentVale.email}</h4>
        <h4 id="city">${currentVale.address.city}</h4>
        <h4 id="website">${currentVale.website}</h4>
        <button> FETCH DATA </button>
        `;
      });
      document.getElementById("card").innerHTML = data1;
    });
}
