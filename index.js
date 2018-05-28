function theBeatlesPlay(instrument, musician) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var instrumentPlayed = [];
    for (i = 0; i <= 3; i++) {
        instrumentPlayed.push(musicians[0] + " plays " + instruments[0]);
    }
    return instrumentPlayed;
  
}
