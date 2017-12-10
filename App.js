import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Header, Content, Container } from 'native-base'
import Officer from './components/Officer'

export default class App extends React.Component {
  render() {
    return (
      <Officer />
    )
  }
}
