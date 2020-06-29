import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const Title = () => {
  return (
    <React.Fragment>
      <Header as='h1' style={styles.header}>
        <Icon name='sort numeric down' style={styles.icon} /> Sorting Visualizer
      </Header>
    </React.Fragment>
  )
}

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'row',
    color: '#388CFA'
  },
  icon: {
    fontSize: '1em'
  }
}
export default Title
