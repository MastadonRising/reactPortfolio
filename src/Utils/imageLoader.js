const images = {
  img1: require("../assets/images/boss.jpg"),
  img2: require("../assets/images/burger.jpg"),
  img3: require("../assets/images/ice.jpg"),
  img4: require("../assets/images/planner.jpg"),
  img5: require("../assets/images/trivia.jpg"),
  img6: require("../assets/images/weather.jpg"),
};

export function loadImage(imageName) {
  if (images.hasOwnProperty(imageName)) {
    return images[imageName];
  }
  return null;
}
