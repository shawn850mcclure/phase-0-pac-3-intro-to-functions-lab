function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
  }
function logShout(myPoop){
    console.log(myPoop.toUpperCase());
}
function logWhisper(myPee){
    console.log(myPee.toLowerCase());
}
function sayHiToHeadphonedRoommate (aString) {
    const cantHear = "I can't hear you!";
    const yesAnswer = "YES INDEED!";
    const loveAnswer = "I would love to!";
    if (aString.toLowerCase(aString) === aString) {
      return cantHear;
    }
    else if (aString.toUpperCase(aString) === aString) {
      return yesAnswer;
    }
    else if ("Let's have dinner together!" === aString) {
      return loveAnswer;
    }
  }
