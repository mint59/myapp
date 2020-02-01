import React from 'react';
import {StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({ history }) => {

  return (
        <Footer>
        <FooterTab>
          <Button active badge vertical >
            <Icon
              style={{ fontSize: 20 }}
              active
              name="home"
            />
            <Text style={{ fontSize: 12 }}>หน้าหลัก</Text>
          </Button>
          <Button vertical>
            <Icon
              style={{ fontSize: 20 }}
              name="business-center"
            />
            <Text style={{ fontSize: 12 }}>งาน</Text>
          </Button>
          <Button vertical>
            <Icon
              style={{ fontSize: 20 }}
              name="build"
            />
            <Text style={{ fontSize: 12 }}>กำลังทำ</Text>
          </Button>
          <Button vertical>
            {/* <Badge ><Text>51</Text></Badge> */}
            <Icon
              style={{ fontSize: 20 }}
              name="folder-open"
            />
            <Text style={{ fontSize: 12 }}>คลัง</Text>
          </Button>
          <Button vertical>
            <Icon
              style={{ fontSize: 20 }}
              name="account-circle"
            />
            <Text style={{ fontSize: 12 }}>ฉัน</Text>
          </Button>
        </FooterTab>
        </Footer>
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