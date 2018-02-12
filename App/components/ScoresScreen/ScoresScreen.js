import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import NBA from '../../utils/nba'

class ScoresScreen extends Component<Props> {

  constructor() {
    super()

    this.nba = new NBA()
  }

  componentDidMount () {
    console.log(this.props.date)
    this.fetchGames()
  }

  fetchGames = () => {
    this.nba.getGames({
      gameDate: this.props.date
    })
    .then((games) => {
      console.log(games)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Scores </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    date: state.date.date
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoresScreen)
