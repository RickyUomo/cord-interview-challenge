import React from "react";
import styled from 'styled-components';
import '../../css/checkbox.scss'

export default class CheckBox extends React.Component {
  // Create a custom checkbox component


  render() {
    const { title, filter } = this.props
    
    return (
      <CheckboxCont>

        <h3>{title}</h3>
        <div className="checkContainer">
          {filter.map(item =>
            <div className="checkItem" key={item.id}>
              <label className="checkLabel">
                <input type="checkbox" />
                {}
                <br/>
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
