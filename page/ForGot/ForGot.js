import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { View,StyleSheet } from 'react-native';
// import Style from './style';
// import Login from '../Login/Login'

export default function ForGot() {
    const [Password, SetPassword] = React.useState('vgg');
    const [Confilm, SetConfilm] = React.useState('vvgv');
    // const Classes = Style();
    
    return (
        <Container>
            <Content>
                <Form>
                    <View>
                        <Text>กรุณากรอก Password ใหม่</Text>
                    </View>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            SetUsername={text => SetUsername(text)}
                            value={Password}
                        />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Confilm Password</Label>
                        <Input
                            SetEmail={text => SetEmail(text)}
                            value={Confilm}
                        />
                    </Item>
                    {/* onPress={() => Actions.ForGot()} */}
                    <View styles={styles.button}>
                        <Button block success onPress={() => alert("dffff")}>
                            <Text>  Submit</Text>
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
