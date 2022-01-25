import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground } from "react-native";
import WidgetWrapper from "./src/components/wigets/WidgetWrapper";
import { Clock, GitHubInfo } from "./src/components/wigets/WidgetList";

const background = require('./src/backgrounds/widgets-page-background.png')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.title}>Widgets</Text>
          <WidgetWrapper />
          <WidgetWrapper content = {<GitHubInfo widgetTitle = 'GitHub Info'/>} />
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
    flex: 1,
    justifyContent: "center"
  },
  scrollContainer: {
    flex: 1,
    padding: '4%',
    paddingTop: '10%'
  },
  title:{
    fontSize: 26,
    marginBottom: '15%'
  },
});
