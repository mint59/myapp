import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Badge, Grid } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Page from '../components/pages'

export default ({ history }) => {

    return (
        <Container>
            <Header>
                <Text style={{ padding: 15, color: '#fff', fontSize: 20 }}>คลัง</Text>
            </Header>
            <Content >
                <View style={styles.button}>
                <Card >
                    <CardItem>
                        <Body>
                            <Text>
                            //Your ffffffftext here
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
            <Footer>
        <FooterTab>
          <Button active badge vertical onPress={() => history.push("/Home")}>
            <Icon
              style={{ fontSize: 20 }}
              active
              name="home"
            />
            <Text style={{ fontSize: 12 }}>หน้าหลัก</Text>
          </Button>
          <Button vertical onPress={() => history.push("/List")}>
            <Icon
              style={{ fontSize: 20 }}
              name="business-center"
            />
            <Text style={{ fontSize: 12 }}>งาน</Text>
          </Button>
          <Button vertical onPress={() => history.push("/ListAction")}>
            <Icon
              style={{ fontSize: 20 }}
              name="build"
            />
            <Text style={{ fontSize: 12 }}>กำลังทำ</Text>
          </Button>
          <Button vertical onPress={() => history.push("/Store")}>
            {/* <Badge ><Text>51</Text></Badge> */}
            <Icon
              style={{ fontSize: 20 }}
              name="folder-open"
            />
            <Text style={{ fontSize: 12 }}>คลัง</Text>
          </Button>
          <Button vertical onPress={() => history.push("/Profile")}>
            <Icon
              style={{ fontSize: 20 }}
              name="account-circle"
            />
            <Text style={{ fontSize: 12 }}>ฉัน</Text>
          </Button>
        </FooterTab>
        </Footer>
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