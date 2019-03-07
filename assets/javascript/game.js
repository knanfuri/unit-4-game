var random_result;
var lost = 0;
var win = 0;
var counter = 0;

// console.log();

var beginGame = function() {
  $(".crystals").empty();
  var images = [
    "./assets/images/1-CrystalCollector.jpg",
    "./assets/images/1-CrystalCollector.jpg",
    "./assets/images/1-CrystalCollector.jpg",
    "./assets/images/1-CrystalCollector.jpg"
  ];

  random_result = Math.floor(Math.random() * 69) + 30;

  console.log(random_result);

  $("#result").html("Random Result:" + random_result);

  for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    var crystal = $("<img>");
    crystal.attr({ class: "crystal", "data-random": random, src: images[i] });
    // crystal.html(random);
    $(".crystals").append(crystal);
    //   console.log("Game");
  }
  $("#counter").html("Score:" + counter);
};

beginGame();

$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("data-random"));
  counter += num;

  $("#counter").html("Score:" + counter);
  console.log(counter);
  if (counter > random_result) {
    Lost++;
    $("#Lost").html("U LOST!!!!" + lost);
    counter = 0;

    beginGame();

    // console.log("U LOST");
  } else if (counter === random_result) {
    win++;
    $("#win").html("U WIN!!!!" + win);
    counter = 0;
    beginGame();
  }
});
