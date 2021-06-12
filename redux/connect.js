function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class ConnectedWrapper extends React.Component {
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange);
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange = () => {
        this.forceUpdate();
      };

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.getState(), this.props)}
          />
        );
      }
    };
  };
}
