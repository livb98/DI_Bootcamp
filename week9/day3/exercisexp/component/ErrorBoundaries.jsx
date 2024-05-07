import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error caught:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

