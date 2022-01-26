import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import WidgetWrapper from "./src/components/wigets/WidgetWrapper";
import { Clock, GitHubInfo, ToDo } from "./src/components/wigets/WidgetList";

const background = require("./src/backgrounds/widgets-page-background.png");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}
      >
        <Text style={styles.title}>Widgets</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
        >
          <WidgetWrapper title="To Do List">
            <ToDo />
          </WidgetWrapper>
          <WidgetWrapper title="GitHub Info">
            <GitHubInfo />
          </WidgetWrapper>
          <WidgetWrapper title="Clock">
            <Clock />
          </WidgetWrapper>
          <StatusBar style="auto" />
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    paddingTop: "15%",
    padding: "4%",
    flex: 1,
    justifyContent: "center",
  },
  scrollContainer: {
    paddingTop: "8%",
    flex: 1,
  },
  title: {
    fontSize: 26,
    marginBottom: "1%",
  },
});
