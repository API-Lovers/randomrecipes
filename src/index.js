import "babel-polyfill";

const cors_api_host = "https://cors-anywhere.herokuapp.com/";
async function responding() {
  let response = await fetch(`${cors_api_host}http://www.recipepuppy.com/api/`);
  let data = await response.json();
  return data.results;
}

responding().then(returned => {
  returned.forEach(recipe => {
    console.log(recipe);
  });
});
