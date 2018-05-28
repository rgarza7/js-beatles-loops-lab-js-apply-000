function theBeatlesPlay(instrument, musician) {
    var instrumentPlayed = [];
    for (i = 0; i < musicians.length; i++) {
        instrumentPlayed.push(musicians[i] + " plays " + instruments[i]);
    }
    return instrumentPlayed;
}
