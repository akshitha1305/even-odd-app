// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isCountEven: true}

  onClickingButt = () => {
    const {count} = this.state
    console.log(count)
    const randomNum = Math.floor(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNum}))

    if (count % 2 === 0) {
      this.setState({
        isCountEven: true,
      })
    } else if (count % 2 !== 0) {
      this.setState({
        isCountEven: false,
      })
    }
  }

  render() {
    const {count, isCountEven} = this.state
    console.log(count)
    const displayText = isCountEven ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {displayText}</p>
          <button
            onClick={this.onClickingButt}
            type="button"
            className="button"
          >
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
