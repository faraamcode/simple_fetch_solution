// where you are to fectch the data
const url = 'https://api.github.com/users/faraamcode';
// where to render your result
const render = document.querySelector(".render");

// declare a function to fetch
const renderUser = (result)=>{
 const {login, avatar_url} = result
 render.innerHTML =`<img src='${avatar_url}'><br/> <h5>${login}</h5>`
}
const fetchUser = async ()=>{
 try {
  const response = await fetch(url);
  const result = await response.json()

  // to render on the page
  renderUser(result);
 } catch (error) {
  console.log(error);
 }
}
fetchUser();