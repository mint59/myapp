import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { View,StyleSheet } from 'react-native';

export default ({history}) => {
    const [Password, SetPassword] = React.useState('');
    const [Confilm, SetConfilm] = React.useState('');
    
    return (
        <Container>
            <Content>
                <Form>
                    <View style={styles.container}>
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
                    <View style={styles.button}>
                        <Button block success onPress={() => history.push("/Login")}>
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
      paddingLeft: 20,
      width: '95%'
    }
  });
