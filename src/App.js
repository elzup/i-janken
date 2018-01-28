// @flow

import React from "react";
import Board from "./Board";
import _ from "lodash";
import Button from "material-ui/Button";

const NUM_MAX = 9;

type State = {
  labels: Array<any>,
  num: number
};

function makeLabels(n) {
  return _.range(1, n + 1);
}

class App extends React.Component<{}, State> {
  state = { labels: makeLabels(3), num: 3 };
  setNum = num => {
    this.setState({
      num,
      labels: makeLabels(num)
    });
  };
  render() {
    const { state } = this;
    console.log(state);
    return (
      <div>
        <div>Graph page</div>
        <div>
          <Board labels={state.labels} />
        </div>
        <div style={{ display: "flex" }}>
          {_.range(2, NUM_MAX).map(i => (
            <Button
              key={i}
              raised
              onClick={() => {
                this.setNum(i);
              }}
            >
              {i}
            </Button>
          ))}
        </div>
        <div>
          <Button
            raised
            color="primary"
            onClick={() => {
              this.setState({ labels: _.shuffle(state.labels) });
            }}
            style={{ width: "100%" }}
          >
            Pon!
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
