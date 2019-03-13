import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
 class MenuExampleHeaderVertical extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical style={{position:'absolute'}}>
      <Menu.Item>
          <Menu.Header>Profile</Menu.Header>
          <Menu.Menu>
           <Link to='/admin1/editprofile'><Menu.Item
              name='edit profile'
              active={activeItem === 'edit profile'}
              onClick={this.handleItemClick}
            /></Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Activities</Menu.Header>

          <Menu.Menu>
           <Link to='/admin1/add_act'> <Menu.Item
              name='add activity'
              active={activeItem === 'add activity'}
              onClick={this.handleItemClick}
            /></Link>
            <Link to='/admin1/edit_act'><Menu.Item
              name='edit activity'
              active={activeItem === 'edit activity'}
              onClick={this.handleItemClick}
            /></Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Users</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='add user'
              active={activeItem === 'add user'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='edit user'
              active={activeItem === 'edit user'}
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

// class Sidebar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( <div>
//       <ul>
//         <li>
//           <Link to='/admin1/add_act'>add activitie</Link>
//         </li>
//         <li>
//           <Link to='/admin1/add_act'>edit activitie</Link>
//         </li>
//         <li>
//           <Link to='/admin1/add_act'>add activitie</Link>
//         </li>
//         <li>
//           <Link to='/admin1/add_act'>add activitie</Link>
//         </li>
//         <li>
//           <Link to='/admin1/add_act'>add activitie</Link>
//         </li>
//       </ul>
//     </div> );
//   }
// }
 
// export default Sidebar;