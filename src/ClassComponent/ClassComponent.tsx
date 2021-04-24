import React from "react";

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};

class ClassComponent extends React.Component<MyProps, MyState> {
  state: MyState = {
    // optional second annotation for better type inference
    count: 0,
  };

  componentDidMount() {
    console.log("mount");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  componentDidUpdate() {
    console.log("update");
  }

  shouldComponentUpdate(nextProps: MyProps, nextState: MyState) {
    console.log("should update");
    return true;
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export { ClassComponent };
