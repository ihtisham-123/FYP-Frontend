import { useRouterFunction } from '@/hooks/userouter';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const routerFunction = useRouterFunction();
  const [caption, setCaption] = useState('Just had an amazing day at the park with my furry friend! 🐕 #DogLife #ParkDay');


  return (
    <SafeAreaView style={styles.container}>
       
      {/* Back Button */}
      <Pressable onPress={() => routerFunction('/')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={20} color="black" />
      </Pressable>

      {/* Top Bar: Profile image + Notification & Settings */}
      <View style={styles.container1}>
        <View>
          <Image
            style={styles.image}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCKQaRhGCGXeTqKe2xGD0wH9N3_37Dg_7Mw&s" }}
          />
        </View>

        <View style={styles.container3}>
          <Pressable onPress={() => routerFunction('/notification')} style={styles.notfication_btn}>
            <Ionicons name="notifications" size={20} color="white" />
          </Pressable>
          <Pressable onPress={() => routerFunction('/')} style={styles.setting_btn}>
            <Ionicons name="settings" size={20} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Heading */}
      <Text style={styles.heading}>Edit Caption</Text>

      {/* Caption Input Section */}
      <View style={styles.container4}>
        <TextInput
          style={styles.txtinput}
          value={caption}
          onChangeText={setCaption}
          multiline
          placeholder="Enter your caption here"
        />
      </View>

      {/* AI Suggestions Section */}
      <View style={styles.container5}>
        <Text style={{ fontSize: 14, color: "#005BAC" }}>AI Suggestions:</Text>
        
        <View style={styles.suggestionRow}>
          <TouchableOpacity
            style={styles.suggestionButton}
            onPress={() => setCaption(caption + ' 😊')}>
            <Text style={styles.buttonText}>Add Emotions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.suggestionButton}
            onPress={() => setCaption(caption.split(' ').slice(0, 5).join(' ') + '...')}>
            <Text style={styles.buttonText}>Make Concise</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.suggestionRow}>
          <TouchableOpacity
            style={styles.suggestionButton}
            onPress={() => setCaption(caption + ' #NewTag')}>
            <Text style={styles.buttonText}>Add Hashtag</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.suggestionButton}
            onPress={() => setCaption(caption.replace(/!/, '').replace('#', ''))}>
            <Text style={styles.buttonText}>Professional Tone</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Save / Preview Buttons */}
      <View style={styles.container7}>
        <Pressable style={styles.saveButton} onPress={() => routerFunction('/home')}>
          <Text style={styles.saveButtonText}>Save Caption</Text>
        </Pressable>
        <Pressable style={styles.previewButton}>
          <Text style={styles.previewButtonText}>Preview Post</Text>
        </Pressable>
      </View>

      

     
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 50,
    gap: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  notfication_btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#0070C0",
    marginBottom: 10,
  },
  setting_btn: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#0070C0",
  },
  container1: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  container3: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#005BAC',
    textAlign: 'center',
    padding:10,
  },
  container4: {
    borderWidth: 1,
    borderRadius: 20,
    height: 130,
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: "space-around",
    padding: 10,

  },
  txtinput: {
    fontSize: 16,
    color: "black",
    textAlignVertical: "top",
  },
  container5: {
    borderWidth: 1,
    borderRadius: 20,
    height: 150,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: "center",
  },
  container7: {
    flexDirection: "column",
    marginTop: 30,
  },
  saveButton: {
    backgroundColor: '#FDBA58',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  previewButton: {
    backgroundColor: '#FDBA58',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  previewButtonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  previewContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'red', 
    alignItems: 'center',
  },
  
  previewText: {
    fontSize: 16,
    color: '#000',
  },
  closeButton: {
    backgroundColor: '#FDBA58',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  suggestionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginTop: 10,
  },
  suggestionButton: {
    backgroundColor: '#FDBA58',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
