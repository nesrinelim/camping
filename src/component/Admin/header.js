import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
   
    return (
      <div>
        <Menu pointing>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='statistique'
            active={activeItem === 'statistique'}
            onClick={this.handleItemClick}
          />
           <Menu.Item>
              hellooo !
            </Menu.Item>
          
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
           <Menu.Item
              name='Site'
              active={activeItem === 'Site'}
              onClick={this.handleItemClick}
            >  <Link to='/'>Site</Link></Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
