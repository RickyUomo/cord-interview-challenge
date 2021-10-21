import React from "react";
import styled from 'styled-components';
import '../../css/checkbox.scss'

export default class CheckBox extends React.Component {
  // Create a custom checkbox component

  render() {
    const { title, filtersShown, filter } = this.props
    return (
      <CheckboxCont>

        <h3>{title}</h3>
        <div className="checkContainer">
          {filter.map(item =>
            <div className="checkItem" key={item.id}>
              <label>
                <input type="checkbox" />
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
  ${'' /* display: flex;
  justify-content: space-between;
  
  @media(max-width: 900px){
    flex-direction: column;
  } */}
`
