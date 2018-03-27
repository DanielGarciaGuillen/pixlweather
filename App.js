import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  View
} from "react-native";

import { fetchLocationId, fetchWeather } from "./utils/api";
import getImageForWeather from "./utils/getImageForWeather";
import SearchInput from "./components/SearchInput";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      temperature: 0,
      weather: "",
      location: ""
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.handleUpdateLocation("New York");
  }

  handleUpdateLocation = async city => {
    if (!city) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(city);
        const { location, weather, temperature } = await fetchWeather(
          locationId
        );

        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true
        });
      }
    });
  };
  render() {
    const { loading, error, weather, temperature, location } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color="white" size="large" />

            {!loading && (
              <View>
                {error && (
                  <Text>Could not load weather, please try another city.</Text>
                )}

                {!error && (
                  <View>
                    <Text style={styles.city}>{location}</Text>
                    <Text style={styles.weather}>{weather}</Text>
                    <Text style={styles.temperature}>{`${Math.round(
                      temperature
                    )}°`}</Text>
                  </View>
                )}
                <SearchInput
                  onSubmit={this.handleUpdateLocation}
                  placeholder="Search any city"
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30
  },
  city: {
    textAlign: "center",
    color: "white",
    fontSize: 44,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  weather: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  temperature: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto"
  },
  smallText: {
    fontSize: 18
  }
});
