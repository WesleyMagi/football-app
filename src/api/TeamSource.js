import axios from 'axios';


export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/teams?limit=1000",
    headers: {
        "Content-Type": "application/json",
        // this is definitely not safe, but for the purposes of this project
        // I've included the key in source control
        "X-Auth-Token": "ad1ababfaf23441d9e2bab0c7d298647",
    },
});