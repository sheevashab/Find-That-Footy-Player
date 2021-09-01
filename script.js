let search = "";
let url = "";
const apiKey = "f7e634914de6fd221adb37b5a65380f3caa91588eb38b6edcb7db66c42344a1d";
let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
let teamUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=302&APIkey=${apiKey}`;

//input variable retrieves user input to eventually return value
const inputName = document.querySelector("#name");
const inputNationality = document.querySelector("#team");
// const input = document.querySelector("#position");
//attach event listener
let searchName = document.querySelector(".search");
searchName.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  search = inputName.value;
  // console.log(url);
  url = nameUrl;
  findPlayer();
});

let searchTeam = document.querySelector(".search");
searchTeam.addEventListener("click", (e) => {
  e.preventDefault();
  search = inputNationality.value;
  console.log(url);
  url = teamUrl;
  findPlayer();
});

//SEARCH BY NAME FUNCTION
//1. Send axios get request to api URL
// One async function to rule them all - Retrieve data: "name", "nationality", "position", "shirtNumber"
async function findPlayer() {
  let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
  try {
    let response = await axios.get(nameUrl);
    let playerInformation = response.data
    console.log(playerInformation);
    // console.log(response.data);
    //forEach function to iterate through players
    // playerInformation.forEach(player => {
    //   showPlayerData(player.player_name, player.player_age, player.player_type, player.player_country, player.team_name, player.player_image);
    //   // console.log(player.player_name);
    // }
    // )
    showPlayerData(playerInformation);
  } catch (error) {
    console.log(error);
  }
}

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

// //4. Function to search by position
// const form = document.querySelector("#search")
// const input = document.querySelector("#position")
// //eventHandler
// function nameSubmit(event) {
//   event.preventDefault();
//   const textInput = input.value;
//   removePlayerData();
//   findPlayer(textInput);
//   input.value = "";
// }
const outputDiv = document.querySelector(".output");
//5. Append data to page
function showPlayerData(playerInformation) {
  //create name element
  for (let i = 0; i < playerInformation.length; i++) {
    const playerDiv = document.createElement(".playerCard");

    const playerName = document.createElement("h2");
    playerName.innerText = playerInformation[i].player_name;
    playerDiv.append(playerName);

    const playerAge = document.createElement("h3");
    playerAge.innerText = playerInformation[i].player_age;
    playerDiv.append(playerAge);

    const playerType = document.createElement("h3");
    playerType.innerText = playerInformation[i].player_type;
    playerDiv.append(playerType);

    const playerCountry = document.createElement("h3");
    playerCountry.innerText = playerInformation[i].player_country;
    playerDiv.append(playerCountry);

    const playerTeam = document.createElement("h3");
    playerTeam.innerText = playerInformation[i].team_name;
    playerDiv.append(playerTeam);

    const playerImage = document.createElement("img");
    playerImage.src = playerInformation[i].player_image;
    playerDiv.append(playerImage);

    outputDiv.append(playerDiv);
  }
  // //create national team element
  // const h3 = document.createElement("nationality")
  // h3.innerText = nationality;
  // searchDiv.append(h3);
  // //create position element
  // const h3 = document.createElement("position")
  // h3.innerText = position;
  // searchDiv.append(h3);
  // //create shirtNumber element
  // const h3 = document.createElement("shirtNumber")
  // h3.innerText = shirtNumber;
  // searchDiv.append(h3);
}

// //6. Clear out data for following search
// function removePlayerData() {
//   searchDiv.innerHTML = "";
// }