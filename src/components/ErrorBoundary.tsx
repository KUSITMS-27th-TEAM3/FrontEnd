import React, { Component, ErrorInfo, ReactNode } from 'react';
import { FlexContainer } from './CommonStyle';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <FlexContainer>ErrorBoundary로 에러처리하기</FlexContainer>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
