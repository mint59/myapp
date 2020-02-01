import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge } from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from 'react-native-dashboard';
import Page from '../components/pages'

const items = [
  { name: 'Team', background: '#02ef1d', icon: 'users' },
  { name: 'Friends', background: '#02cbef', icon: 'group' },
];

export default ({ history }) => {

  return (
    <Container>
      <Header>
        <Text style={{ padding: 15, color: '#fff', fontSize: 20 }}>หน้าหลัก</Text>
      </Header>
      <Content>
        <View style={styles.container}>
          <Dashboard items={items} background={true} column={2} />
        </View>
      </Content>
      <Page></Page>
      {/* <Badge ><Text>51</Text></Badge> */}
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});