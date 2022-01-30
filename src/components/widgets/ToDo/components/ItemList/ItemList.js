import {
  View,
  Text,
  Image,
  TouchableHighlight,
  SectionList,
} from "react-native";
import styles from "./styles";
const removeIcon = require("../../../../../img/remove_icon.png");

const ItemList = ({ toDoList, deleteListItem }) => {
  return (
    <View>
      {toDoList.map((objItem) => {
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
  );
};

export default ItemList;
