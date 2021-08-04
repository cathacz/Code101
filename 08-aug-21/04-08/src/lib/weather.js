const OpenWeatherClient = require("./weather-client");

const myKey = require("../../config");
const API_KEY = myKey.apiKEY;

function formatData(data) {
  const result = `In ${data.name}, ${data.sys.country} there are ${
    dat.main.temp
  }\u0000C. Today's Weather ${data.weather
    .map((condition) => condition.description)
    .join(", ")}`;
  return result;
}

// or export at the end
module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  const currentData = await client.getWeather(city, country);
  //   console.log(currentData);
  return formatData(currentData);
};
