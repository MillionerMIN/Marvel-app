import { Component } from 'react';
import { MessageError } from '../error/MessageError';

export class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error: Error, errorInfo: any) {
    console.log(error, errorInfo);

    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <MessageError />;
    }

    return this.props.children;
  }
}
