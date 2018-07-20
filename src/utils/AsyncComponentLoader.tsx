import * as React from 'react'
import Loading from '~/components/common/Loading'

declare interface IAsyncComponentProps {
  moduleProvider: () => Promise<object>
  componentProps?: object
}

declare interface IAsyncComponentState {
  loadedComponent?: React.ComponentClass | null
}
export class AsyncComponent extends React.Component<IAsyncComponentProps,IAsyncComponentState> {
  private isLoaded: boolean = false
  private isMount: boolean = true

  public static defaultProps = {
    componentProps: {}
  }

  constructor(props: any) {
    super(props)
    this.state = {
      loadedComponent: null
    }
  }

  public componentWillMount() {
    if (!this.isLoaded) {
      this.isLoaded = true
      this.props.moduleProvider().then((provideData: object) => {
        if (this.isMount) {
          this.setState({
            loadedComponent: provideData[Object.keys(provideData)[0]]
          })
        }
      })
    }
  }                           
  public componentWillUnmount() {
    this.isMount = false
  }

  public render() {
    const { loadedComponent: LoadedComponent } = this.state
    const { componentProps } = this.props
    return LoadedComponent ? ( 
      <LoadedComponent {...componentProps} />
    ) : (
      <Loading>Page loading</Loading>
    )
  }
}
