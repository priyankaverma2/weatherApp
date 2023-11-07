import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Card } from "react-native-elements";
import styles from "./styles";

const ForecastList = ({ forecastData }) => {
  const truncatedForecastData = forecastData.slice(0, 5);
  return (
    <View style={styles.container}>
      <FlatList
        data={truncatedForecastData}
        keyExtractor={(item) => item.dt.toString()}
        horizontal={true}
        renderItem={({ item }) => {
          const iconUrl = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

          return (
            <Card containerStyle={styles.card}>
              <View style={styles.cardContent}>
                <View style={styles.iconAndText}>
                  <Text style={styles.forecastCardText}>
                    {new Date(item.dt * 1000).toDateString()}
                  </Text>
                  <Image
                    source={{ uri: iconUrl }}
                    style={styles.forecastIcon}
                  />
                </View>
                <Text style={styles.cardText}>{item.main.temp}°C</Text>
                <Text style={styles.cardTextMar}>
                  {item.weather[0].description}
                </Text>

                <Text style={styles.forecastCardText}>
                  Pressure: {item.main.pressure} hPa
                </Text>
                <Text style={styles.forecastCardText}>
                  Humidity: {item.main.humidity}%
                </Text>
                <Text style={styles.forecastCardText}>
                  Feels Like: {item.main.feels_like}°C
                </Text>
                <Text style={styles.forecastCardText}>
                  Temp Max: {item.main.temp_max}°C
                </Text>
                <Text style={styles.forecastCardText}>
                  Temp Min: {item.main.temp_min}°C
                </Text>
                <Text style={styles.forecastCardText}>
                  Wind Speed: {item.wind.speed} m/s
                </Text>
              </View>
            </Card>
          );
        }}
      />
    </View>
  );
};

export default ForecastList;
