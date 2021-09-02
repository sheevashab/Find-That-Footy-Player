//globally scoped variables
let search = "";
let url = "";
const apiKey = "f7e634914de6fd221adb37b5a65380f3caa91588eb38b6edcb7db66c42344a1d";
let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
let teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];



//input variables to retrieve user input from Search by Name that will eventually return the values of player info
const inputName = document.querySelector("#name");
//attach event listener for search by name
let searchName = document.querySelector(".nameSearch");
searchName.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(e.target);
  search = inputName.value;
  // console.log(url);
  url = nameUrl;
  findPlayer();
  inputName.value = "";
});
//send axios get request to api's player URL for search by name
async function findPlayer() {
  let nameUrl = `https://apiv3.apifootball.com/?action=get_players&player_name=${search}&APIkey=${apiKey}`;
  outputDiv.innerHTML = (null);
  try {
    let response = await axios.get(nameUrl);
    let playerInformation = response.data
    // console.log(playerInformation);
    // console.log(response.data);
    showPlayerDataByName(playerInformation);
  } catch (error) {
    console.log(error);
  }
}



//attach event listener for Random Player Generator button (pulls from teamIds array above)
let randomSearch = document.querySelector("#random");
randomSearch.addEventListener("click", (e) => {
  e.preventDefault();
  let i = Math.floor(Math.random() * teamIds.length);
  getTeamPlayers(i);
})
//send axios get request to api's teams URL to randomly select player from teams listed in teamIds array
async function getTeamPlayers(i) {
  let response = await axios.get(`https://apiv3.apifootball.com/?action=get_teams&team_id=${i}&APIkey=${apiKey}`);
  // console.log(response.data);
  let randomPlayer = Math.floor(Math.random() * response.data[0].players.length);
  showPlayerDataByName([response.data[0].players[randomPlayer]], response.data[0].team_name);
  // findPlayer([response.data[0].players[randomPlayer]]); access player name from this call
}



//append data to page
const outputDiv = document.querySelector(".output");
function showPlayerDataByName(playerInformation, teamName) {
  // console.log(playerInformation);
  //create and append selected player information from api to the output div
  for (let i = 0; i < playerInformation.length; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList = "playerCard";
    outputDiv.append(playerDiv);

    const playerImage = document.createElement("img");
    playerImage.src = playerInformation[i].player_image;
    playerImage.classList.add("styleimage");
    playerDiv.append(playerImage);

    // const playerImage = document.createElement("img");
    // playerInformation[i].player_image !== "" ? playerImage.src = playerInformation[i].player_image :
    //   player_image.src = "https://res.cloudinary.com/dyyjvyqtn/image/upload/v1630340009/SoccerBall_uctjcj.png";
    // playerImage.classList.add("styleimage");
    // playerDiv.append(playerImage);

    const playerInfo = document.createElement("div");
    playerInfo.classList = "playerInfo"
    playerDiv.append(playerInfo);

    const playerName = document.createElement("h2");
    playerName.innerText = playerInformation[i].player_name;
    playerName.classList.add("stylename");
    playerInfo.append(playerName);

    const playerAge = document.createElement("h3");
    playerAge.innerText = `Age: ${playerInformation[i].player_age}`;
    playerInfo.append(playerAge);

    const playerType = document.createElement("h3");
    playerType.innerText = `Position: ${playerInformation[i].player_type}`;
    playerInfo.append(playerType);

    const playerTeam = document.createElement("h3");
    if (playerInformation[i].team_name === undefined) {
      playerTeam.innerText = teamName;
      playerInfo.append(playerTeam);
    } else {
      playerTeam.innerText = `Team: ${playerInformation[i].team_name}`;
      playerInfo.append(playerTeam);
    }
    // playerDiv.append(playerTeam);
    outputDiv.append(playerDiv);
  }
}





// //attach event listener for search by team
// let searchTeam = document.querySelector(".teamSearch");
// searchTeam.addEventListener("click", (e) => {
//   e.preventDefault();
//   // console.log(e.target);
//   search = inputTeam.value;
//   console.log(url);
//   url = teamUrl;
//   findTeam();
//   inputTeam.value = ""
// });

// //send axios get request to api's teams URL for search by team
// async function findTeam() {
//   let teamUrl = `https://apiv3.apifootball.com/?action=get_teams&league_id=${search}&APIkey=${apiKey}`;
//   outputDiv.innerHTML = (null);
//   try {
//     let response = await axios.get(teamUrl);
//     let teamPlayerInformation = response.data.player_name;
//     // console.log(teamPlayerInformation);
//     console.log(response.data);
//     showPlayerDataByTeam(teamPlayerInformation);
//   } catch (error) {
//     console.log(error);
//   }
// }


// function showPlayerDataByTeam(teamPlayerInformation) {
//   //create and append selected player information from teams url to the output div
//   for (let n = 0; n < teamPlayerInformation.length; n++) {
//     const playerDiv = document.createElement("div");
//     playerDiv.classList = "playerCard";
//     outputDiv.append(playerDiv);

//     const playerName = document.createElement("h2");
//     playerName.innerText = teamPlayerInformation[n].player_name;
//     playerDiv.append(playerName);

//     const playerAge = document.createElement("h3");
//     playerAge.innerText = teamPlayerInformation[n].player_age;
//     playerDiv.append(playerAge);

//     const playerType = document.createElement("h3");
//     playerType.innerText = teamPlayerInformation[n].player_type;
//     playerDiv.append(playerType);

//     const playerCountry = document.createElement("h3");
//     playerCountry.innerText = teamPlayerInformation[n].player_country;
//     playerDiv.append(playerCountry);

//     const playerTeam = document.createElement("h3");
//     playerTeam.innerText = teamPlayerInformation[n].team_name;
//     playerDiv.append(playerTeam);

//     const playerImage = document.createElement("img");
//     playerImage.src = teamPlayerInformation[n].player_image;
//     playerDiv.append(playerImage);

//     outputDiv.append(playerDiv);
//   }
// }