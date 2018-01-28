// @flow

import React from "react";
import Board from "./Board";

const labels = ["Group A", "Group B", "Group C"];
type State = {
  data: Array<any>
};

class Hoge extends React.Component<{}, State> {
  state = { labels };
  render() {
    const { state } = this;
    return (
      <div>
        <div>Graph page</div>
        <div>
          <Board labels={state.labels} />
        </div>
        <button
          onClick={() => {
            console.log(state.labels);
            this.setState({ labels: [...state.labels, ...state.labels] });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
export default Hoge;
