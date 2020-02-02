import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Button, Left, Right, Icon } from 'native-base';
import Page from '../components/pages'
import Tech from '../Images/tech.jpg'


export default ({ history }) => {

    return (
        <Container>
            <Header>
                <Text style={{ padding: 15, color: '#fff', fontSize: 20 }}>ฉัน</Text>
            </Header>
            <Content >
                <View >
                    <Image source={Tech} style={{ width: 80, height: 80 }} />
                    <List >
                        <ListItem>
                            <Left>
                                <Text> โปรไฟล์ </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Left>
                                <Text> บริการลูกค้า </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <Left>
                                <Text> เงื่อนไข / ข้อตกลง </Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </View>
                <View style={styles.button}>
                    <Button block light >
                        <Text>Logout</Text>
                    </Button>
                </View>
            </Content>
            <Page></Page>
            {/* <Badge ><Text>51</Text></Badge> */}
        </Container>
    );
}
const styles = StyleSheet.create({
    button: {
        paddingTop: '60%',
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%'
    }

});