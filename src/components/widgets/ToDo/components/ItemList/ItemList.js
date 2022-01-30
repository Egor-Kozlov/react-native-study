import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  SectionList,
  FlatList,
  ScrollView,
} from "react-native";
import styles from "./styles";
const removeIcon = require("../../../../../img/remove_icon.png");

const ItemList = ({ toDoList, deleteListItem }) => {
  return (
    <ScrollView horizontal={true} style={styles.listContainer}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Active</Text>
        {toDoList
          .filter((objItem) => objItem.status === "active")
          .map((objItem) => {
            return (
              <View
                key={objItem._id}
                style={[styles.itemContainer, styles.itemContainerActive]}
              >
                <Text style={styles.toDoText}>{objItem.title}</Text>
                <TouchableHighlight
                  onPress={() => deleteListItem(objItem.id, toDoList)}
                  style={styles.removeContainer}
                >
                  <Image style={styles.remove} source={removeIcon} />
                </TouchableHighlight>
              </View>
            );
          })}
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Done</Text>
        {toDoList
          .filter((objItem) => objItem.status === "done")
          .map((objItem) => {
            return (
              <View key={objItem._id} style={styles.itemContainer}>
                <Text style={styles.toDoText}>{objItem.title}</Text>
                <TouchableHighlight
                  onPress={() => deleteListItem(objItem.id, toDoList)}
                  style={styles.removeContainer}
                >
                  <Image style={styles.remove} source={removeIcon} />
                </TouchableHighlight>
              </View>
            );
          })}
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Deleted</Text>
        {toDoList
          .filter((objItem) => objItem.status === "deleted")
          .map((objItem) => {
            return (
              <View
                key={objItem._id}
                style={[styles.itemContainer, styles.itemContainerDeleted]}
              >
                <Text style={styles.toDoText}>{objItem.title}</Text>
                <TouchableHighlight
                  onPress={() => deleteListItem(objItem.id, toDoList)}
                  style={styles.removeContainer}
                >
                  <Image style={styles.remove} source={removeIcon} />
                </TouchableHighlight>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default ItemList;
