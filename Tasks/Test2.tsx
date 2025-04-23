import { StyleSheet , Text , Pressable , TextInput , View , placeholder } from 'react-native' ;
export default function App() {
  //const [name , setName] = useState("ahmed")
  // let name = "ahmed";
  //const handleclick = ()=>{
    //setName ("Ezz")
  
  return (
    
    <View style = {styles.container}>

   <View style={styles.inputContainer}>
   <Text style={styles.instructions}>Enter Your guess between 0 and 99: </Text>
   

   <View style={styles.Both}>
    <TextInput style={styles.input} placeholder = 'Enter Your guess'>
    </TextInput>
    <Pressable style={styles.button}>
      <Text style = {styles.buttonText}>CHECK</Text>
      </Pressable>
      </View>

   </View>
   


   <View style={styles.guess}>
    <Text style={styles.guessesText}>Your guesses: ?</Text>
   </View>

   <View style={styles.viewword}>
    <Text style = {styles.word}>Lower or higher?</Text>
  
   </View>

<View>
   <Pressable style={styles.button}>
    <Text style={styles.buttonText}> REST</Text>
   </Pressable>
   </View>

</View>
  );
}

const styles = StyleSheet.create({     
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    backgroundColor: '#FF00FF', 
    flex : 1 ,
    alignItems: 'center',
    justifyContent: 'center',
    width:'98%'
    

    
  },
  instructions: { 
    fontSize: 30,
    margin:7,
  },
  input: {
    
    
    borderColor: '#00FFFF',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: '#FFFFFF', 
    //backgroundColor: '#0000FF', 
    backgroundColor: '#00FFFF', 
   
  },
  button: {
    backgroundColor: '#0000FF', 
    padding: 10,
    marginBottom: 10,
   // backgroundColor: '#00FFFF',
   borderRadius: 5,
   
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
  },
  statusContainer: {
    //backgroundColor: '#FFFF00', 
    backgroundColor: '#00FFFF', 
    width: '100%',
    padding: 100,
    alignItems: 'center',
    borderTopColor: '#00FFFF', 
    borderTopWidth: 20,
    flex: 5,
  },
  guessesText: {
    color: '#000000',
   margin:5,
   
  },
  word: {
    fontSize :25,
    
  },
  viewword: {
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    width:'98%',
    margin:5,
  },
  guess: {
    backgroundColor: '#00FFFF', 
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    margin:5,
  },
  Both: {
    flexDirection: 'row', 
    
  }
});