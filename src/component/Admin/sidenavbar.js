import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

 class MenuExampleHeaderVertical extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Activities</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='addactivity'
              active={activeItem === 'addactivity'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='editactivity'
              active={activeItem === 'editactivity'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Users</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='adduser'
              active={activeItem === 'adduser'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='edituser'
              active={activeItem === 'edituser'}
              onClick={this.handleItemClick}
            />
            <Menu.Item 
            name='php'
             active={activeItem === 'php'}
              onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Hosting</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='shared'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='dedicated'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
              FAQs
            </Menu.Item>
            <Menu.Menu position='right'>
           
          </Menu.Menu>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}
export default MenuExampleHeaderVertical