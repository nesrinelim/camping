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
           <Link to={'/admin1/editprofile'}><Menu.Item
              name='edit profile'
              active={activeItem === 'edit profile'}
              onClick={this.handleItemClick}
            /></Link>
          </Menu.Menu>
          <Menu.Menu>
           <Link to='/admin1/visualize_profile'><Menu.Item
              name='visualize profile'
              active={activeItem === 'visualize profile'}
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
            <Link to='/admin1/list_act'><Menu.Item
              name='list activity'
              active={activeItem === 'list activity'}
              onClick={this.handleItemClick}
            /></Link>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Users</Menu.Header>

          <Menu.Menu>
         <Link to='/admin1/userlist'> <Menu.Item
              name='visiualize list user'
              active={activeItem === 'add user'}
              onClick={this.handleItemClick}
            /></Link> 
            <Menu.Item
              name='edit user'
              active={activeItem === 'edit user'}
              onClick={this.handleItemClick}
            />
            {/* <Menu.Item 
            name='Profile user'
             active={activeItem === 'Profile user'}
              onClick={this.handleItemClick} /> */}
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Reservation</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='edit reservation'
              active={activeItem === 'edit reservation'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='add reservation'
              active={activeItem === 'add reservation'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Feedback</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='add feedback' active={activeItem === 'add feedback'} onClick={this.handleItemClick}>
            add feedback
            </Menu.Item>

            <Menu.Item name='edit feedback' active={activeItem === 'edit feedback'} onClick={this.handleItemClick}>
            edit feedback
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