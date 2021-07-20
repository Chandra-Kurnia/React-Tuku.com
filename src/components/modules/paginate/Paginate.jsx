  /* eslint func-names: 0, no-console: 0 */
  import React from "react";
  import Pagination from "rc-pagination";

  export default class Paginate extends React.Component {
    state = {
      current: 3,
    };

    onChange = (page) => {
      console.log(page);
      this.setState({
        current: page,
      });
    };

    render() {
      return (
        <Pagination
          onChange={this.onChange}
          current={this.state.current}
          total={25}
        />
      );
    }
  }