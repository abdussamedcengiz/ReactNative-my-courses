import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useState } from "react";
import CourselInput from "./components/CourselInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [course, setCourse] = useState([]);
  const startModal = () => {
    setModalIsVisible(true);
  };
  const endModal = () => {
    setModalIsVisible(false);
  };
  const addCourse = (courseTitle) => {
    setCourse((rtm) => [
      ...rtm,
      { text: courseTitle, id: Math.random().toString() },
    ]);
    endModal();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="kurs ekle" color="red" onPress={startModal} />
        <CourselInput
          visible={modalIsVisible}
          onAddCourse={addCourse}
          onCancel={endModal}
        />
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  courseItem: { backgroundColor: "yellow", margin: 8, borderRadius: 5 },
  courseText: {
    padding: 10,
    color: "red",
  },
});
