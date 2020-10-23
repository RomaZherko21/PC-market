import React from 'react'
import s from './ShowUsers.module.css'
import user from '../../../images/user.svg'

import * as axios from 'axios'


class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.count}&page=${this.props.state.page}`).then(response => {
      this.props.addUsers(response.data.items)
    })
  }



  onPageChange(page, num) {
      this.props.onPageChange(num);
      
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.state.count}&page=${page+num}`).then(response => {
      this.props.addUsers(response.data.items)
    })
  }
  render() {
    return (
      <section className={s.allUsers}>
        {this.props.state.usersList.map(item => {
          return (
            <div className={s.oneUser}>
              <img src={item.photos.small != null ? item.photos.small : user} alt="" />
              {item.name}
            </div>
          )
        })}
        <div className={s.allUsersButtons}>
          <button onClick={()=>this.onPageChange(this.props.state.page, -1)}>Previous</button>
          <button onClick={()=>this.onPageChange(this.props.state.page, 1)}>Next</button>
        </div>
      </section>
    );
  }
}


export default ShowUsers;