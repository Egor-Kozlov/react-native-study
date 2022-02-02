import { View, Text, Image, TouchableHighlight, Pressable } from "react-native";
import styles from "./styles";

const removeIcon = require("../../../../../img/remove_icon.png");

const Item = ({ title, id, status, deleteListItem, changeCardStatus }) => (
  console.log("item"),
  (
    <TouchableHighlight
      onLongPress={() => changeCardStatus(id)}
      delayLongPress={800}
      activeOpacity={0.5}
      underlayColor={null}
    >
      <View
        style={[
          styles.itemContainer,
          status === "active"
            ? styles.itemContainerActive
            : status === "deleted"
            ? styles.itemContainerDeleted
            : null,
        ]}
      >
        <Text style={styles.toDoText}>{title}</Text>
        <TouchableHighlight
          onPress={() => deleteListItem(id)} //<-fix id
          style={styles.removeContainer}
        >
          <Image style={styles.remove} source={removeIcon} />
        </TouchableHighlight>
      </View>
    </TouchableHighlight>
  )
);
export default Item;
