import React from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function ForGot() {
    const [Password, SetPassword] = React.useState('');
    const [Confilm, SetConfilm] = React.useState('');
    return (
        <Container>
            <Content>
                <Form>
                    <View>
                        <Text>กรุณากรอก Password ใหม่cccc</Text>
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

                    <View>
                        <Button block success onPress={() => Actions.ForGot()}>
                            <Text>Submit</Text>
                        </Button>
                    </View>
                </Form>
            </Content>
        </Container>

    );
}
