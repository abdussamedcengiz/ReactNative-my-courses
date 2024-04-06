import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";

export default function CourselInput({
  visible,
  onAddCourse,
  onCancel,
  onDeleteCourse,
  courses,
}) {
  const [enteredCourseText, setEnteredCourseText] = useState("");

  const addCourseHandler = () => {
    if (enteredCourseText.trim() === "") {
      // Boşsa ekleme işlemi yapmıyoruz
      return;
    }
    onAddCourse(enteredCourseText);
    setEnteredCourseText("");
  };

  const deleteCourseHandler = () => {
    if (enteredCourseText.trim() === "") {
      // Boşsa silme işlemi yapmıyoruz
      return;
    }
    // Silinecek kursun metnini alıyoruz
    const courseToDelete = enteredCourseText;
    // Kursun id'sini almak için tüm kursları tarayalım
    const courseId = courses.find(
      (course) => course.text === courseToDelete
    ).id;
    // onDeleteCourse fonksiyonuna kursun id'sini gönderelim
    onDeleteCourse(courseId);
    setEnteredCourseText(""); // Girdiyi temizle
  };
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/cblogo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="yeni kurs ekle"
          value={enteredCourseText}
          onChangeText={(text) => setEnteredCourseText(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="iptal et" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ekle" color="blue" onPress={addCourseHandler} />
          </View>
          <View style={styles.button}>
            <Button title="sil" color="green" onPress={deleteCourseHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    borderColor: "pink",
    backgroundColor: "pink",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
