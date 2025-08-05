import { useRouterFunction } from "@/hooks/userouter"
import { SafeAreaView, StyleSheet ,View ,Pressable,Text,Image,} from "react-native";
import { Ionicons,Entypo } from '@expo/vector-icons';

const index=()=>{



    const RouterFunction=useRouterFunction();




    
    return(

    
    <SafeAreaView style={styles.container}>
    <View style={styles.topRow}>
        <Pressable style={styles.backButton} onPress={() => RouterFunction('/')}>
            <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Image
            source={{ uri: "https://i.pravatar.cc/100" }}
            style={styles.profileImage}
        />
    </View>
    

     <Text style={styles.mainHeading}>Create New Post</Text>


     <Text style={styles.subHeading}>Upload Your Image</Text>

    


     <View style={styles.uploadBox}>
        <Ionicons name="cloud-upload-outline" size={36} color="black" />
        <Text style={styles.uploadText}>Choose an image to get started</Text>
        <Text style={styles.uploadNote}>JPG, PNG, or GIF up to 10MB</Text>
      </View>

      {/* Upload + Camera Buttons */}
      <View style={styles.buttonRow}>
        <Pressable style={styles.smallButton}>
          <Entypo name="upload" size={16} color="black" />
          <Text style={styles.smallButtonText}>Upload</Text>
        </Pressable>

        <Pressable style={styles.smallButton}>
          <Ionicons name="camera" size={16} color="black" />
          <Text style={styles.smallButtonText}>Camera</Text>
        </Pressable>
      </View>

      {/* AI-Powered Captions Box */}
      <View style={styles.captionBox}>
        <Ionicons name="sparkles" size={32} color="#777" />
        <Text style={styles.captionHeading}>AI-Powered Captions</Text>
        <Text style={styles.captionSubText}>
          Let AI analyze your image and{'\n'}generate perfect captions
        </Text>

        <Pressable style={styles.mainButton}>
          <Entypo name="text" size={16} color="white" />
          <Text style={styles.mainButtonText}>Generate Caption</Text>
        </Pressable>
      </View>

      {/* Bottom Buttons */}
      <Pressable style={styles.mainButton} onPress={() => RouterFunction('/trending-topics')}>
        <Text style={styles.mainButtonText}>Browse Trending Topics</Text>
      </Pressable>

      <Pressable style={styles.mainButton} onPress={() => RouterFunction('/select-platform')}>
        <Text style={styles.mainButtonText}>Select Platform</Text>
      </Pressable>



    </SafeAreaView>
    );
};

export default index;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    
    backButton: { marginBottom: 10 },
    
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    
    mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005BAC',
    textAlign: 'center',
    marginBottom: 20,
  },

  subHeading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0077CC',
    textAlign: 'center',
    marginBottom: 10,
  },

  uploadBox: {
    backgroundColor: '#FDBA4E',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
  },

  uploadText: {
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'center',
  },

  uploadNote: {
    fontSize: 12,
    color: '#333',
    marginTop: 4,
    textAlign: 'center',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  smallButton: {
    backgroundColor: '#FDBA4E',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 0.48,
    justifyContent: 'center',
  },

  smallButtonText: {
    fontWeight: '600',
    color: 'black',
  },

  captionBox: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  captionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#333',
  },

  captionSubText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#777',
    marginVertical: 10,
  },

  mainButton: {
    backgroundColor: '#FDBA4E',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },

  mainButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
    
})