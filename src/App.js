// @flow

import React from "react";
import Board from "./Board";
import _ from "lodash";

const labels = "ABCDEFG".split("");
type State = {
  labels: Array<any>,
  open: boolean
};

class App extends React.Component<{}, State> {
  state = { labels, open: false };
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
            this.setState({ labels: _.shuffle(state.labels) });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}
export default App;
