// Create an array called `friends`. It will hold five of your friends' names.
/*
    For every friend in the friend array, you will want to `console.log` the descending chorus of this brand-new, never before seen song 100 times. The lyric must include your friend's name, and must be grammatically correct when we get down to 1. See the example output for more information.
*/


document.write('<html style="background-color:green;"></html>')
document.write('<title>99 Lines Of Code In The File</title>');
document.write('<h1 style="color:red;">My Singing Friend</h1>');


/*




var divTag = document.createElement('div');
divTag.className = 'friend';


var friendName = document.createElement('h3');
divTag.appendChild(friendName);


var name = document.createTextNode(${friends});
friendName.appendChild(name);


var song = document.createElement('p');
divTag.appendChild(song);

document.body.appendChild(divTag);
document.body.appendChild(friendName);
document.body.appendChild(song);



var lyrics1 = document.createTextNode(${i}+' bottle of water in the fridge, '+${i}+' bottle of water, '+${friends}+' drinks a water '+' chugs it out, no more bottles of water in the fridge.');

var lyrics1 = document.cr

song.appendChild(lyrics1);


var lyrics2 = document.createTextNode(${i}+' bottles of water in the fridge, '+${i}+' bottles of water, '+${friends}+' opens the fridge '+' and is ready to drink like a pig, '+ ${i} +' bottles of water');
song.appendChild(lyrics2);


var lyrics3 = document.createTextNode(${i}+' bottles of water in the fridge, '+${i}+' bottles of water, '+${friends}+' drinks a water '+' chugs it out, '+i+' bottles of water in the fridge.');
song.appendChild(lyrics3);

*/




document.addEventListener("DOMContentLoaded", function(){
  var button = document.createElement('button');
  var text   = document.createTextNode('Sing!');
  button.appendChild(text);
  button.id = 'my-btn';
  button.className = 'clickBtn';
  button.type = 'button';
  button.style.color = "orange";
  button.style.height = "8px";
  button.style.width = "15px";
  //button.style.background-color = blue;
  document.body.appendChild(button);

  button.addEventListener('click', function(){


    var friends = ['Brandon', 'Len', 'Tyffani', 'Jake', 'Carlton'];

    for(var j = 0; j < friends.length; j++){ // Friends Array



      for(var i = 100; i > 0; i--){ // 1 thru 100 array

        // Variables and Methods
        var divTag = document.createElement('div');
        divTag.className = 'friend';


        var friendName = document.createElement('h3');
        divTag.appendChild(friendName);
        document.body.appendChild(divTag);

        var name = document.createTextNode(friends[j]);
        friendName.appendChild(name);


        var song = document.createElement('p');
        divTag.appendChild(song);

        document.body.appendChild(divTag);
        document.body.appendChild(friendName);
        document.body.appendChild(song);


        if(i === 1){
          var lyrics1 = document.createTextNode(i+' bottle of water in the fridge, '+i+' bottle of water, '+friends[j]+' drinks a water '+' chugs it out, no more bottles of water in the fridge.');
          song.appendChild(lyrics1);
          document.body.appendChild(song);
        } else if(i === 100) {
          var lyrics2 = document.createTextNode(i+' bottles of water in the fridge, '+i+' bottles of water, '+friends[j]+' opens the fridge '+' and is ready to drink like a pig, '+ i +' bottles of water');
          song.appendChild(lyrics2);
          document.body.appendChild(song);
        } else {
          var lyrics3 = document.createTextNode(i+' bottles of water in the fridge, '+i+' bottles of water, '+friends[j]+' drinks a water '+' chugs it out, '+i+' bottles of water in the fridge.');
          song.appendChild(lyrics3);
          document.body.appendChild(song);
        }
      }
    }
  });

});
