let facebookProfile = {
  name: "Matt",
  friends: 0,
  messages: [],
  postMessage: function(message){ 
    if (message) {facebookProfile.messages.push(message);} else { console.log("Please enter your message.");}
  },
  deleteMessage: function(index){
    facebookProfile.messages.splice(index,1)
  },
  addFriend: function(){
    facebookProfile.friends++;
  },
  removeFriend: function(){
    if(facebookProfile.friends > 0){
      facebookProfile.friends--;
    }
  }

}