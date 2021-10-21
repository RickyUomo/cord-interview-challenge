import React from "react";
import styled from 'styled-components';
import '../../css/expand.scss'
import FilterIcon from "../../images/filter-icon.png";

import Checkbox from "../checkbox";

export default class ExpandableFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersShown: false
    };
  }



  // You need to create your own checkbox component with a custom checkmark
  render() {
    const { genres, ratings, languages } = this.props
    const { filtersShown } = this.state
    // console.log(filtersShown)

    return (
      <ExpandWrapper>
        <div>

          <img className="filterIcon" onClick={() => this.setState({ filtersShown: !filtersShown })} src={FilterIcon} />

          <div className={`collapase ${filtersShown ? 'show' : 'hide'}`}>
            <Checkbox title={"GENRES"} filter={genres} />
            <Checkbox title={"RATING"} filter={ratings} />
            <Checkbox title={"LANGUAGES"} filter={languages} />
          </div>
        </div>
      </ExpandWrapper>
    )
  }
}

const ExpandWrapper = styled.div`
  display: flex;
`;

