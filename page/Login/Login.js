import React from 'react';
import { View, Image, StyleSheet} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import Tech from '../../Images/tech.jpg'

export default ({ history }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container>
        <Content>
          <View style={styles.container}>
          <Image source={Tech} style={{width: 80, height: 80}}/>
          </View>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={username => setUsername(username)}
                value={username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
              />
            </Item>
           
            <View style={styles.button}>
            <Button block success onPress={() => history.push("/Home")}>
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
      paddingLeft: 20,
      width: '95%'
    }
  });