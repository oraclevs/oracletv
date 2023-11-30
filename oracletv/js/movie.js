import {
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,
  movie9,
  movie10,
  movie11,
  movie12,
  movie13,
  movie14,
  movie15,
} from "./Moviedata.js";

let moviecard1_title = document.getElementById("card1-title");
let moviecard1_description = document.getElementById("card1-description");
let moviecard2_title = document.getElementById("card2-title");
let moviecard2_description = document.getElementById("card2-description");
let moviecard3_title = document.getElementById("card3-title");
let moviecard3_description = document.getElementById("card3-description");
let moviecard4_title = document.getElementById("card4-title");
let moviecard4_description = document.getElementById("card4-description");
let moviecard5_title = document.getElementById("card5-title");
let moviecard5_description = document.getElementById("card5-description");
let moviecard6_title = document.getElementById("card6-title");
let moviecard6_description = document.getElementById("card6-description");
let moviecard7_title = document.getElementById("card7-title");
let moviecard7_description = document.getElementById("card7-description");
let moviecard8_title = document.getElementById("card8-title");
let moviecard8_description = document.getElementById("card8-description");
let moviecard9_title = document.getElementById("card9-title");
let moviecard9_description = document.getElementById("card9-description");
let moviecard10_title = document.getElementById("card10-title");
let moviecard10_description = document.getElementById("card10-description");
let moviecard11_title = document.getElementById("card11-title");
let moviecard11_description = document.getElementById("card11-description");
let moviecard12_title = document.getElementById("card12-title");
let moviecard12_description = document.getElementById("card12-description");
let moviecard13_title = document.getElementById("card13-title");
let moviecard13_description = document.getElementById("card13-description");
let moviecard14_title = document.getElementById("card14-title");
let moviecard14_description = document.getElementById("card14-description");
let moviecard15_title = document.getElementById("card15-title");
let moviecard15_description = document.getElementById("card15-description");
let card1btn = document.getElementById("cardbtn1");
let card2btn = document.getElementById("cardbtn2");
let card3btn = document.getElementById("cardbtn3");
let card4btn = document.getElementById("cardbtn4");
let card5btn = document.getElementById("cardbtn5");
let card6btn = document.getElementById("cardbtn6");
let card7btn = document.getElementById("cardbtn7");
let card8btn = document.getElementById("cardbtn8");
let card9btn = document.getElementById("cardbtn9");
let card10btn = document.getElementById("cardbtn10");
let card11btn = document.getElementById("cardbtn11");
let card12btn = document.getElementById("cardbtn12");
let card13btn = document.getElementById("cardbtn13");
let card14btn = document.getElementById("cardbtn14");
let card15btn = document.getElementById("cardbtn15");
let movie_name = document.getElementById("streaming-movie-name");
let movie_discription = document.getElementById("streaming-movie-discription");
const videoSRC = document.getElementById("streaming-video");
const imageSRC = document.getElementById("video-image-stream-sec");
const generalMoviePlayBTN = document.getElementById("genMoviePlayBtn");
const test_play_btn = document.getElementsByClassName("genMoviePlayBtn");
const video_imageHolder = document.getElementById(
  "video-imageHolder-stream-sec"
);
const movieinfo_stream_sect = document.getElementById("movieinfo-stream-sect");
const video_holder_stream_sec = document.getElementById(
  "video-holder-stream-sec"
);

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  videoSRC.src = "";
 
  // location.reload();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
     videoSRC.src = "";
    // location.reload();
  }
};

function movie_details_fillup() {
  moviecard1_title.innerHTML = ` ${movie1.name}`;
  moviecard1_description.innerHTML = `${movie1.discription}`;
  moviecard2_title.innerHTML = ` ${movie2.name}`;
  moviecard2_description.innerHTML = `${movie2.discription}`;
  moviecard3_title.innerHTML = ` ${movie3.name}`;
  moviecard3_description.innerHTML = `${movie3.discription}`;
  moviecard4_title.innerHTML = ` ${movie4.name}`;
  moviecard4_description.innerHTML = `${movie4.discription}`;
  moviecard5_title.innerHTML = ` ${movie5.name}`;
  moviecard5_description.innerHTML = `${movie5.discription}`;
  moviecard6_title.innerHTML = ` ${movie6.name}`;
  moviecard6_description.innerHTML = `${movie6.discription}`;
  moviecard7_title.innerHTML = ` ${movie7.name}`;
  moviecard7_description.innerHTML = `${movie7.discription}`;
  moviecard8_title.innerHTML = ` ${movie8.name}`;
  moviecard8_description.innerHTML = `${movie8.discription}`;
  moviecard9_title.innerHTML = ` ${movie9.name}`;
  moviecard9_description.innerHTML = `${movie9.discription}`;
  moviecard10_title.innerHTML = ` ${movie10.name}`;
  moviecard10_description.innerHTML = `${movie10.discription}`;
  moviecard11_title.innerHTML = ` ${movie11.name}`;
  moviecard11_description.innerHTML = `${movie11.discription}`;
  moviecard12_title.innerHTML = ` ${movie12.name}`;
  moviecard12_description.innerHTML = `${movie12.discription}`;
  moviecard13_title.innerHTML = ` ${movie13.name}`;
  moviecard13_description.innerHTML = `${movie13.discription}`;
  moviecard14_title.innerHTML = ` ${movie14.name}`;
  moviecard14_description.innerHTML = `${movie14.discription}`;
  moviecard15_title.innerHTML = ` ${movie15.name}`;
  moviecard15_description.innerHTML = `${movie15.discription}`;
}
movie_details_fillup();

card1btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie1.imageSRC}`;
  // videoSRC.src = `${movie1.videoSRC}`;
  movie_name.innerHTML = ` ${movie1.name}`;
  movie_discription.innerHTML = `${movie1.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
// let r = document.getElementById("test");

card2btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie2.imageSRC}`;
  // videoSRC.src = `${movie2.videoSRC}`;
  movie_name.innerHTML = ` ${movie2.name}`;
  movie_discription.innerHTML = `${movie2.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card3btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie3.imageSRC}`;
  // videoSRC.src = `${movie3.videoSRC}`;
  movie_name.innerHTML = ` ${movie3.name}`;
  movie_discription.innerHTML = `${movie3.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card4btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie4.imageSRC}`;
  // videoSRC.src = `${movie4.videoSRC}`;
  movie_name.innerHTML = ` ${movie4.name}`;
  movie_discription.innerHTML = `${movie4.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card5btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie5.imageSRC}`;
  // videoSRC.src = `${movie5.videoSRC}`;
  movie_name.innerHTML = ` ${movie5.name}`;
  movie_discription.innerHTML = `${movie5.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card6btn.addEventListener("click", () => {
  modal.style.display = "block";
  // videoSRC.src = `${movie6.videoSRC}`;
  imageSRC.src = `${movie6.imageSRC}`;
  movie_name.innerHTML = ` ${movie6.name}`;
  movie_discription.innerHTML = `${movie6.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card7btn.addEventListener("click", () => {
  modal.style.display = "block";
  // videoSRC.src = `${movie7.videoSRC}`;
  imageSRC.src = `${movie7.imageSRC}`;
  movie_name.innerHTML = ` ${movie7.name}`;
  movie_discription.innerHTML = `${movie7.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card8btn.addEventListener("click", () => {
  modal.style.display = "block";
  // videoSRC.src = `${movie8.videoSRC}`;
  imageSRC.src = `${movie8.imageSRC}`;
  movie_name.innerHTML = ` ${movie8.name}`;
  movie_discription.innerHTML = `${movie8.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card9btn.addEventListener("click", () => {
  modal.style.display = "block";
  // videoSRC.src = `${movie9.videoSRC}`;
  imageSRC.src = `${movie9.imageSRC}`;
  movie_name.innerHTML = ` ${movie9.name}`;
  movie_discription.innerHTML = `${movie9.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card10btn.addEventListener("click", () => {
  modal.style.display = "block";
  // videoSRC.src = `${movie10.videoSRC}`;
  imageSRC.src = `${movie10.imageSRC}`;
  movie_name.innerHTML = ` ${movie10.name}`;
  movie_discription.innerHTML = `${movie10.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card11btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie11.imageSRC}`;
  // videoSRC.src = `${movie1.videoSRC}`;
  movie_name.innerHTML = ` ${movie11.name}`;
  movie_discription.innerHTML = `${movie11.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card12btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie12.imageSRC}`;
  // videoSRC.src = `${movie2.videoSRC}`;
  movie_name.innerHTML = ` ${movie12.name}`;
  movie_discription.innerHTML = `${movie12.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card13btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie13.imageSRC}`;
  // videoSRC.src = `${movie3.videoSRC}`;
  movie_name.innerHTML = ` ${movie13.name}`;
  movie_discription.innerHTML = `${movie13.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card14btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie14.imageSRC}`;
  // videoSRC.src = `${movie4.videoSRC}`;
  movie_name.innerHTML = ` ${movie14.name}`;
  movie_discription.innerHTML = `${movie14.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});
card15btn.addEventListener("click", () => {
  modal.style.display = "block";
  imageSRC.src = `${movie15.imageSRC}`;
  // videoSRC.src = `${movie5.videoSRC}`;
  movie_name.innerHTML = ` ${movie15.name}`;
  movie_discription.innerHTML = `${movie15.discription}`;
  video_imageHolder.style.display = "block";
  movieinfo_stream_sect.style.display = "block";
  video_holder_stream_sec.style.display = "none";
});

//* general movie play btn
generalMoviePlayBTN.addEventListener("click", () => {
  console.log("play btn clicked");
  if (movie_name.innerHTML.includes("Becky")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie1.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("No One Will Save You")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie2.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Fear the Night")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie3.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("All Eyez On Me")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie4.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Assassin Club")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie5.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Batman")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie6.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Blacklight")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie7.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Crush")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie8.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Dead Zone")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie9.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Die Hart")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie10.videoSRC}`;
  }

  if (movie_name.innerHTML.includes("House Party")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie11.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Joy Ride")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie12.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Night Train")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie13.videoSRC}`;
  }
  if (movie_name.innerHTML.includes(" R.I.P.D. 2")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie14.videoSRC}`;
  }
  if (movie_name.innerHTML.includes("Pinocchio")) {
    video_imageHolder.style.display = "none";
    movieinfo_stream_sect.style.display = "none";
    video_holder_stream_sec.style.display = "block";
    videoSRC.src = `${movie15.videoSRC}`;
  }
});
