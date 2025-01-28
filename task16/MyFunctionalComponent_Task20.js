

import React,{ useState } from 'react';
import { Alert, Text, Button, View, StyleSheet } from 'react-native';


const MyFunctionalComponent_Task20 = () =>
{
    
    const [content, setButtonText] = useState(true);
    const hide =()=>
    {
        setButtonText(!content);
    }
  return (
    <View style={styles.container}>

         {content?<Text style= {styles.name}>Mohammed Hussein</Text>:null}
      <Button
     
        onPress={() => {hide();} 
        }
        title="Press Me"
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
 
});
export default MyFunctionalComponent_Task20