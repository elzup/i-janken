// @flow

import React from "react";
import Board from "./Board";
import _ from "lodash";
import Button from "material-ui/Button";

const NUM_MAX = 9;
const NUM_INIT = 3;

type State = {
  labels: Array<any>,
  num: number,
  open: boolean
};

function makeLabels(n) {
  return _.range(1, n + 1);
}

function makeSecretLabels(n) {
  return _.repeat("?", n).split("");
}

class App extends React.Component<{}, State> {
  state = { labels: makeSecretLabels(NUM_INIT), num: NUM_INIT, open: false };
  setNum = num => {
    this.setState({
      num,
      open: false,
      labels: makeSecretLabels(num)
    });
  };
  render() {
    const { state } = this;
    console.log(state);
    return (
      <div>
        <h1>iJanken</h1>
        <p>スマホを囲って自分の色を決める→[PON!]</p>
        <div>
          <Board labels={state.labels} />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {_.range(2, NUM_MAX + 1).map(i => (
            <Button
              key={i}
              raised
              onClick={() => {
                this.setNum(i);
              }}
              style={{ width: "24%", height: "2em" }}
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
              if (state.open) {
                this.setState({ labels: _.shuffle(state.labels) });
              } else {
                this.setState({
                  labels: _.shuffle(makeLabels(state.num)),
                  open: true
                });
              }
            }}
            style={{ width: "100%", height: "4em" }}
          >
            Pon!
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
