import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import Tech from '../../Images/tech.jpg'
// import { style } from './style'

export default function Login() {
  const [Username, SetUsername] = React.useState('');
  const [Email, SetEmail] = React.useState('');
  // const classes = style();

  return (
    <Container>
        <Content>
          <View styles={styles.button}>
          <Image source={Tech} style={{width: 80, height: 80}}/>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                SetUsername={text => SetUsername(text)}
                value={Username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input 
                SetEmail={text => SetEmail(text)}
                value={Email}
              />
            </Item>
           
            <View styles={styles.button}>
            <Button block success>
              <Text>Submit</Text>
            </Button>
            </View>
          </Form>
        </Content>
      </Container>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 70
    },
    button: {
      paddingTop: 50,
      // width: 100
    }
  });