/* eslint-disable global-require */

const images = {
  Clear: require("../assets/clear.gif"),
  Hail: require("../assets/hail.png"),
  "Heavy Cloud": require("../assets/heavy-cloud.png"),
  "Light Cloud": require("../assets/light-cloud.png"),
  "Heavy Rain": require("../assets/heavy-rain.gif"),
  "Light Rain": require("../assets/light-rain.png"),
  Showers: require("../assets/rain.gif"),
  Sleet: require("../assets/sleet.png"),
  Snow: require("../assets/snow.png"),
  Thunder: require("../assets/thunder.gif")
};

export default weather => images[weather];
