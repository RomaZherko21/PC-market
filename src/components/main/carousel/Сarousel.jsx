import React, { } from 'react'

import s from './Сarousel.module.css';

import first from '../../../images/mainCarousel/first.jpg';
import second from '../../../images/mainCarousel/second.jpg';
import third from '../../../images/mainCarousel/third.jpg';
import fourth from '../../../images/mainCarousel/fourth.jpg';



class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [first, second, third,fourth ],
      counter: 0,
      interval: '',
    }
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        if (this.state.counter < this.state.arr.length - 1) {
          this.setState({
            counter: this.state.counter + 1,
          })
        } else {
          this.setState({
            counter: 0,
          })
        }
      }, 5000)
    })
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
    this.setState({
      interval: '',
    })
  }

  render() {
    return (
      <div className={s.carousel}>
        <img src={this.state.arr[this.state.counter]} alt="" />
      </div>
    )
  }

}

export default Carousel;