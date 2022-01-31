import { View, Text, FlatList, ScrollView } from "react-native";
import Item from "../Item/Item";
import styles from "./styles";

const ItemList = ({ toDoList, deleteListItem }) => {
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      id={item._id}
      status={item.status}
      deleteListItem={deleteListItem}
    />
  );

  return (
    <ScrollView horizontal={true} style={styles.listContainer}>
      <View>
        <Text style={styles.statusTitle}>Active</Text>
        <FlatList
          style={styles.statusContainer}
          data={toDoList
            .filter((objItem) => objItem.status === "active")
            .reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        ></FlatList>
      </View>
      <View>
        <Text style={styles.statusTitle}>Done</Text>
        <FlatList
          style={styles.statusContainer}
          data={toDoList
            .filter((objItem) => objItem.status === "done")
            .reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        ></FlatList>
      </View>
      <View>
        <Text style={styles.statusTitle}>Deleted</Text>
        <FlatList
          style={styles.statusContainer}
          data={toDoList
            .filter((objItem) => objItem.status === "deleted")
            .reverse()}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        ></FlatList>
      </View>
    </ScrollView>
  );
};

export default ItemList;
