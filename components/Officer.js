import React, { Component } from 'react'
import { StyleSheet, Text, Image } from 'react-native'
import {
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Container,
  Left,
  Right,
  Thumbnail,
  Button,
  Icon
} from 'native-base'

export default class Officer extends Component {
  render() {
    const data = {
      name: "O'Neil",
      photo: 'https://fthmb.tqn.com/-xcbzmPZspyiFfQm5JxmlpA3lN0=/2538x3000/filters:fill(auto,1)/shaq-officer-59f621de68e1a2001018eec3.jpg',
      upvotes: 12,
      downvotes: 0,
      comments: [0,1,2,3],
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      policeDepartment: {
        name: 'LAPD',
        logoUrl: 'https://vignette.wikia.nocookie.net/thecloser/images/0/0e/MC-LAPD-Logo.png/revision/latest?cb=20170321194100'
      }
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Thumbnail source={{ uri: data.policeDepartment.logoUrl }} />
                <Body>
                  <Text>Officer { data.name }</Text>
                  <Text style={styles.subheader}>{ data.policeDepartment.name }</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{ uri: data.photo }} style={styles.image}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{ data.bio }</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>{ data.upvotes }</Text>
                </Button>
                <Button transparent>
                  <Icon active name="thumbs-down" />
                  <Text>{ data.downvotes }</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>{ data.comments.length } Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}


const styles = StyleSheet.create({
  subheader: {
    color: 'grey',
    fontSize: 13
  },
  image: {
    height: 400,
    width: null,
    flex: 1
  }
});
