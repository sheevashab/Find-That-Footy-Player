# Find-That-Footy-Player-!
Project 1 Application

# Project Overview
This purpose of "Find That Footy [Player]!" is to provide a database that can access various soccer (or "footy") players by name, team, or position played. 

## Project Name
Find That Footy [Player]!

## Project Description
This application with be a searchable database that returns player information based on user input.

## API and Data Sample
The API used in this project is:
https://apifootball.com/documentation/#Players

```
[
    {
        "player_key": 103051168,
        "player_id": "103051168",
        "player_image": "https://apiv3.apifootball.com/badges/players/52515_cristiano-ronaldo.jpg",
        "player_name": "Cristiano Ronaldo",
        "player_number": "7",
        "player_country": "",
        "player_type": "Forwards",
        "player_age": "36",
        "player_match_played": "4",
        "player_goals": "5",
        "player_yellow_cards": "0",
        "player_red_cards": "0",
        "player_minutes": "360",
        "player_injured": "No",
        "player_substitute_out": "0",
        "player_substitutes_on_bench": "0",
        "player_assists": "1",
        "player_is_captain": "",
        "player_shots_total": "",
        "player_goals_conceded": "",
        "player_fouls_committed": "",
        "player_tackles": "",
        "player_blocks": "",
        "player_crosses_total": "",
        "player_interceptions": "",
        "player_clearances": "",
        "player_dispossesed": "",
        "player_saves": "",
        "player_inside_box_saves": "",
        "player_duels_total": "",
        "player_duels_won": "",
        "player_dribble_attempts": "",
        "player_dribble_succ": "",
        "player_pen_comm": "",
        "player_pen_won": "",
        "player_pen_scored": "",
        "player_pen_missed": "",
        "player_passes": "",
        "player_passes_accuracy": "",
        "player_key_passes": "",
        "player_woordworks": "",
        "player_rating": "",
        "team_name": "Portugal",
        "team_key": "23"
    }
]
```

## Wireframes
Desktop View:

![alt text](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1630266465/P1_DesktopWireframe_sf6ohi.png)

Mobile View:

![alt text](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1630266478/P1_Mobile_Wireframe_dsvntc.png)

### MVP/PostMVP
#### MVP 
- Find and use external api to access basic player information (name, team, position, and jersey number).
- Allow user to search for players via name, team, and position played.
- Add a button that generates information about a randomly chosen player.
#### PostMVP  
- Access player photos or video highlights.
- Add 'club team' as a search function item and include this information in the player bio (this may need another api).

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|Monday, August 30| Project Pitch and Approval from Squad, Core Application Structure (HTML, basic CSS, beginning of JS) | Complete
|Tuesday, August 31| JavaScript Functionality (call api, functioning search boxes and buttons that invoke data output) | Complete
|Wednesday, September 1| Styling in CSS (flexbox, text styling, color scheme) | Complete
|Thursday, September 2| Wrap Up Any Loose Ends in Code (function and style), Prepare for Presentation, Post MVPs | Complete
|Friday, September 3| Presentations  | Incomplete

## Priority Matrix

![alt text](https://res.cloudinary.com/dyyjvyqtn/image/upload/v1630272137/P1_PriorityMatrix_libnfw.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Set Up Personal GitHub Repo | H | 1 hrs| 1 hrs | 1 hrs |
| Creating Pitch | H | 3 hrs| 4 hrs | 6 hrs |
| Accessing a viable API | H | 3 hrs| 4 hrs | 5 hrs |
| HTML Structure | H | 2 hrs | 3 hrs | 3 hrs |
| Basic CSS Structure | H | 1 hrs | 1 hrs | 1 hrs |
| CSS Flexbox Layout | H | 3 hrs | 4 hrs | 4 hrs |
| CSS Styling (font, color, data output) | M | 3 hrs | 3 hrs | 3 hrs |
| CSS Media Query (desktop, mobile) | H | 2 hrs | 2 hrs | 2 hrs |
| JS Axios / Linking API | H | 2 hrs | 6 hrs | 6 hrs |
| JS Search by Name | H | 3 hrs | 3 hrs | 3 hrs |
| JS Search by Team | H | 3 hrs | 1 hrs | 1 hrs |
| JS Search by Position | H | 3 hrs | n/a | n/a |
| JS Random Player Generator | H | 3 hrs | 4 hrs | 4 hrs |
| Deploy App to GitHub | H | 2 hrs | hrs | hrs |
| Post MVP to Add Player Image | M | 8 hrs | 2 hrs | 2 hrs |
| Total |  | 42 hrs| 38 hrs | 41 hrs |

## Code Snippet

I am happy that I was able to use one function to output the necessary data from two different axios calls. Even though the objects in the APIs were nested differently, I was able to call out the necessary information within this single showPlayerDataByName function.

```
const outputDiv = document.querySelector(".output");
function showPlayerDataByName(playerInformation, teamName) {
  for (let i = 0; i < playerInformation.length; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList = "playerCard";
    outputDiv.append(playerDiv);

    const playerImage = document.createElement("img");
    playerImage.src = playerInformation[i].player_image;
    playerImage.classList.add("styleimage");
    playerDiv.append(playerImage);

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
    outputDiv.append(playerDiv);
  }
```

## Change Log
 I had to re-direct a lot of my initial vision because of my API. The first API I was trying to access did not have all of the information that I needed. The instructors helped me find a second API, which allowed me to access players by name, but I was unable to access them by team or position. This was not as much of an issue in the end, however, because I realized that it wouldn't be very helpful for the user to search an entire team's history of players or all of the players that fall under a specific position. Their response would be too many player cards, which would not be helpful in finding a specific player.
 I also had to change the scope of the "Random Player Generator" button. The API URL that accesses teams is only searchable by an id number, not a string name. To go around this setback, I created an array of 24 teams from which the async function can pull a player at random.