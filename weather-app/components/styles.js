import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 40,
  },
  wrong: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    margin: 5,
    top: 0,
    borderWidth: 1,
    width: 40,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 80,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
  },

  card: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 0,
  },
  cardTextWithoutWeight: {
    fontSize: 16,
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardTextMar: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },

  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  forecastCardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  forecastIcon: {
    width: 40,
    height: 40,
    marginBottom: 0,
  },
  forecastCardText: {
    fontSize: 14,
  },
  errorText: {
    color: "red",
  },
});

export default styles;
