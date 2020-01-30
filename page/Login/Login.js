import React from 'react';
import { View, Image} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
import Tech from ''
import { style } from './style'

export default function Login() {
  const [Username, SetUsername] = React.useState('');
  const [Email, SetEmail] = React.useState('');
  const classes = style();

  return (
    <Container>
        <Content>
          <View classname={Usesse}>
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
           
            <View style={styles.button}>
            <Button block success>
              <Text>Submit</Text>
            </Button>
            </View>
          </Form>
        </Content>
      </Container>
  );
}