import React from "react";
import styled from 'styled-components';
import '../../css/checkbox.scss'

export default class CheckBox extends React.Component {
  // Create a custom checkbox component
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
    this.updateWidth = this.updateWidth.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth })
  }

  render() {
    const { title, filter } = this.props
    const { width } = this.state

    return (
      <CheckboxCont>

        <h3>{title}</h3>
        <div className="checkContainer">
          {filter.map(item =>
            <div className="checkItem" key={item.id}>
              <label className="checkLabel">
                <input type="checkbox" />
                { width <= 900 ? <br /> : ''}
                {item.name}
              </label>
            </div>
          )}
        </div>

      </CheckboxCont>
    )
  }
}

const CheckboxCont = styled.div`
  position: relative;
`
