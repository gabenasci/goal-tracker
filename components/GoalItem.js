import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  // function deleteGoalHandler() {
  //   props.onDeleteItem(props.id)
  // }
  // instead of declaring the above function, and changing the onPress function
  // to deleteGoalHandler - we can pass the function onDeleteItem argument (id)
  // via .bind -> .bind() first parameter is this, and second parameter is the argument
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#0f0064" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        // style prop below to add pressing effects on iOS
        style={({ pressed }) => pressed && styles.pressedItem } // Obj destructuring of pressData
        //style={(pressData) => pressData.pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}> {props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#2200e2",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white", // STYLES IN RN ARE NOT INHERITED/CASCADING LIKE CSS,
    //so we must have color: white just for goalText, and not in a parent component
  },
});
