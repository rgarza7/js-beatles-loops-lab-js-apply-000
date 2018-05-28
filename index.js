function theBeatlesPlay(instrument, musician) {
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var instrumentPlayed = [];
    for (i = 0; i < musicians.length; i++) {
      for (j = 0; j < instruments.length; j++) {
        instrumentPlayed.push(musicians[i] + " plays " + instruments[j]);
          console.log(instrumentPlayed);
    }
  }
}
