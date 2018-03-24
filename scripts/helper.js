class Helper{
  playPauseAndUpdate(song){
    if (song){
      $('.total-time').text(this.formatTime(song.duration));

    }
    player.playPause(song);
  }
  formatTime(seconds){
    //70 seconds = 1:10
    var minutes = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    if(s < 10){
      s = "0" + s;
    }
    console.log(minutes +":" + s);
    return minutes +":" + s;
  }
}
let helper = new Helper();
