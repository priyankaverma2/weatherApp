import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import axios from "axios";
import styles from "./styles";
import WeatherCard from "./WeatherCard";
import ForecastList from "./ForecastList";

const Weather = () => {
  // States to manage the data
  const [search, setSearch] = useState({});
  const [location, setLocation] = useState("");
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  // Credentials for API call
  const API_KEY = process.env.OPEN_WEATHER_APP_API_KEY;
  const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

  // Function for getting data from the API call with Axios
  const weatherData = async () => {
    try {
      const sanitizedLocation = location.trim();

      // Check if the sanitized location is empty
      if (!sanitizedLocation) {
        setError("Please enter a valid city name.");
        return;
      }

      // Regular expression to check if the input contains only letters and spaces
      const validCityRegex = /^[A-Za-z\s]+$/;

      if (!validCityRegex.test(sanitizedLocation)) {
        setError(
          "Please enter a valid city name without special characters or digits."
        );
        return;
      }
      const response = await axios.get(`${API_BASE_URL}/weather`, {
        params: {
          q: sanitizedLocation,
          units: "metric",
          appid: API_KEY,
        },
      });

      setSearch(response.data);

      const forecastResponse = await axios.get(`${API_BASE_URL}/forecast`, {
        params: {
          q: sanitizedLocation,
          units: "metric",
          appid: API_KEY,
        },
      });
      // Get 5-day forecast data
      const uniqueDates = [];
      const lastFiveDaysData = [];

      forecastResponse.data.list.forEach((item) => {
        const date = new Date(item.dt * 1000).toDateString();

        if (!uniqueDates.includes(date) && lastFiveDaysData.length < 5) {
          uniqueDates.push(date);
          lastFiveDaysData.push(item);
        }
      });

      setForecastData(lastFiveDaysData);

      setLocation("");
      Keyboard.dismiss(); // Hide the keyboard after searching
    } catch (error) {
      console.log(error);
      setError(
        "An error occurred. Please check your input or try again later."
      );
    }
  };

  // Component UI

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={location}
          placeholder="Enter your city"
          onChangeText={(text) => setLocation(text)}
          onSubmitEditing={weatherData}
        />
        <TouchableOpacity style={styles.button} onPress={weatherData}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}

      {search.name && <WeatherCard data={search} />}

      {forecastData.length > 0 && <ForecastList forecastData={forecastData} />}
    </View>
  );
};

export default Weather;
