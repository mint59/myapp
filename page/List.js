import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Badge, Grid } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Page from '../components/pages'

export default ({ history }) => {

    return (
        <Container>
            <Header>
                <Text style={{ padding: 15, color: '#fff', fontSize: 20 }}>งาน</Text>
            </Header>
            <Content >
                <View style={styles.button}>
                <Card >
                    <CardItem>
                        <Body>
                            <Text>
                            //Your text here
                            consolc
                            cccc
                            cccc
                            </Text>
                            <Text>
                            //Your text here
                            consolc
                            cccc
                            cccc
                            </Text>
                            <Text>
                            //Your text here
                            consolc
                            cccc
                            cccc
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                </View>
            </Content>
            <Page></Page>
            {/* <Badge ><Text>51</Text></Badge> */}
        </Container>
    );
}
const styles = StyleSheet.create({
    button: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        width: '100%'
      }

});