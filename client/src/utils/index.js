import axios from "axios";

export default {
  getBoardGame: async function(query) {
    return (
      await axios.get(`https://www.boardgamegeek.com/xmlapi/search?search=${query}`)
    )
  },
  saveGame: function(gameData) {
    console.log('running saveGame function!!!');
    return  axios.post("/api/gameData", gameData)
  },
  signup: function(userData){
    return axios.post("/api/signup", userData)
  },
  login: function(userData){
    return axios.post("/api/login", userData)
  },
  addFriend: function (friendData) {
    return (
      axios.post("/api/add_friend", friendData)
      // alert("Friend added successfully!")
    )
  },
  logout: function(){
    return axios.get("/auth/logout")
  },
  userData:function(){
    return axios.get("/api/user_data")
  },
  getUserGames:function(){
    return axios.get("/api/user_games")
  },
  getUserFriends:function(){
    return axios.get("/api/users_friends")
  },
  // loadUserData:function(){
  //   return axios.get("/api/data")
  // }

  searchFriends: function() {
    return axios.get("/api/all_friends")
  },
  getClickedFriend: function () {
    return axios.get('/api/clicked_friend')
  }
};