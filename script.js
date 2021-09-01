//globally scoped variables
let search = "";
let url = "";
const apiKey = "f7e634914de6fd221adb37b5a65380f3caa91588eb38b6edcb7db66c42344a1d";
let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
let teamUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=${search}&APIkey=${apiKey}`;
// let randomUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=Sergio Camus&APIkey=${apiKey}`;

//input variables to retrieve user input that will eventually return the values of player info
const inputName = document.querySelector("#name");
const inputTeam = document.querySelector("#team");

//attach event listener for search by name
let searchName = document.querySelector(".nameSearch");
searchName.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);
  search = inputName.value;
  // console.log(url);
  url = nameUrl;
  findPlayer();
  inputName.value = ""
});

//attach event listener for search by team
let searchTeam = document.querySelector(".teamSearch");
searchTeam.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);
  search = inputTeam.value;
  console.log(url);
  url = teamUrl;
  findTeam();
  inputTeam.value = ""
});

//attach event listener for Random Player Generator button (should pull from players url)
let randomSearch = document.querySelector("#random");
randomSearch.addEventListener("click", (e) => {
  e.preventDefault();
  // let i = Math.floor(Math.random() * myarray.length)create array of players names via axios request))
})

//send axios get request to api's player URL for search by name
async function findPlayer() {
  let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
  outputDiv.innerHTML = (null);
  try {
    let response = await axios.get(nameUrl);
    let playerInformation = response.data
    console.log(playerInformation);
    // console.log(response.data);
    showPlayerDataByName(playerInformation);
  } catch (error) {
    console.log(error);
  }
}

//send axios get request to api's teams URL for search by team
async function findTeam() {
  let teamUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=${search}&APIkey=${apiKey}`;
  outputDiv.innerHTML = (null);
  try {
    let response = await axios.get(teamUrl);
    let teamPlayerInformation = response.data.players
    console.log(teamPlayerInformation);
    // console.log(response.data);
    showPlayerDataByTeam(teamPlayerInformation);
  } catch (error) {
    console.log(error);
  }
}

//send axios get request to api's players for random player return
async function findRandomPlayer() {
  let randomUrl = ``;
  try {
    let response = await axios.get(randomUrl);
    let playerInformation = response.data
    console.log(playerInformation);
    // console.log(response.data);
    showPlayerDataByName(playerInformation);
  } catch (error) {
    console.log(error);
  }
}

//append data to page
const outputDiv = document.querySelector(".output");
function showPlayerDataByName(playerInformation) {
  //create and append selected player information from players url to the output div
  for (let i = 0; i < playerInformation.length; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList = "playerCard";
    outputDiv.append(playerDiv);

    const playerName = document.createElement("h2");
    playerName.innerText = playerInformation[i].player_name;
    playerDiv.append(playerName);

    const playerAge = document.createElement("h3");
    playerAge.innerText = `Age: ${playerInformation[i].player_age}`;
    playerDiv.append(playerAge);

    const playerType = document.createElement("h3");
    playerType.innerText = `Position: ${playerInformation[i].player_type}`;
    playerDiv.append(playerType);

    const playerCountry = document.createElement("h3");
    playerCountry.innerText = `National Team: ${playerInformation[i].player_country}`;
    playerDiv.append(playerCountry);

    const playerTeam = document.createElement("h3");
    playerTeam.innerText = `Club Team: ${playerInformation[i].team_name}`;
    playerDiv.append(playerTeam);

    const playerImage = document.createElement("img");
    playerImage.src = playerInformation[i].player_image;
    playerDiv.append(playerImage);

    outputDiv.append(playerDiv);
  }
}

function showPlayerDataByTeam(teamPlayerInformation) {
  //create and append selected player information from teams url to the output div
  for (let n = 0; n < teamPlayerInformation.length; n++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList = "playerCard";
    outputDiv.append(playerDiv);

    const playerName = document.createElement("h2");
    playerName.innerText = teamPlayerInformation[n].player_name;
    playerDiv.append(playerName);

    const playerAge = document.createElement("h3");
    playerAge.innerText = teamPlayerInformation[n].player_age;
    playerDiv.append(playerAge);

    const playerType = document.createElement("h3");
    playerType.innerText = teamPlayerInformation[n].player_type;
    playerDiv.append(playerType);

    const playerCountry = document.createElement("h3");
    playerCountry.innerText = teamPlayerInformation[n].player_country;
    playerDiv.append(playerCountry);

    const playerTeam = document.createElement("h3");
    playerTeam.innerText = teamPlayerInformation[n].team_name;
    playerDiv.append(playerTeam);

    const playerImage = document.createElement("img");
    playerImage.src = teamPlayerInformation[n].player_image;
    playerDiv.append(playerImage);

    outputDiv.append(playerDiv);
  }
}

//function showRandomPlayer?


// //2. Function to search by name
// const form = document.querySelector("#search")
// const input = document.querySelector("#name")
// //eventHandler
// function nameSubmit(event) {
//   event.preventDefault();
//   const textInput = input.value;
//   removePlayerData();
//   findPlayer(textInput);
//   input.value = "";
// }

// //3. Function to search by nationality
// const form = document.querySelector("#search")
// const input = document.querySelector("#team")
// //eventHandler
// function nameSubmit(event) {
//   event.preventDefault();
//   const textInput = input.value;
//   removePlayerData();
//   findPlayer(textInput);
//   input.value = "";
// }