window.onload = async function() {
  //   try {
  //     const pokemon = await axios.get("https://pokeapi.co/api/v2/pokemon");
  //     debugger;
  //   } catch (err) {
  //     console.log(err);
  //   }

  const form = document.getElementById("poke-form");
  const pokedex = document.getElementById("pokedex");

  form.onsubmit = function(event) {
    event.preventDefault();
    const userInput = this.querySelector("input").value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
      .then(response => {
        debugger;
        pokedex.innerHTML = `<img src='${response.data.sprites.front_default}' />`;
      })
      .catch(err => {
        console.log(err);
      });
  };
};
