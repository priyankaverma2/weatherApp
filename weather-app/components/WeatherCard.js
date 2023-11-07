import React from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-elements";
import styles from "./styles";

const WeatherCard = ({ data }) => {
  const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardText}>{data.name}(Today)</Text>

        <Image source={{ uri: iconUrl }} style={styles.icon} />

        <Text style={styles.cardText}>{data.main.temp}°C</Text>
        <Text style={styles.cardTextMar}>{data.weather[0].description}</Text>

        <Text style={styles.cardTextWithoutWeight}>
          Pressure: {data.main.pressure} hPa
        </Text>
        <Text style={styles.cardTextWithoutWeight}>
          Humidity: {data.main.humidity}%
        </Text>
        <Text style={styles.cardTextWithoutWeight}>
          Feels Like: {data.main.feels_like}°C
        </Text>
        <Text style={styles.cardTextWithoutWeight}>
          Temp Max: {data.main.temp_max}°C
        </Text>
        <Text style={styles.cardTextWithoutWeight}>
          Temp Min: {data.main.temp_min}°C
        </Text>
        <Text style={styles.cardTextWithoutWeight}>
          Wind Speed: {data.wind.speed} m/s
        </Text>
      </View>
    </Card>
  );
};

export default WeatherCard;
