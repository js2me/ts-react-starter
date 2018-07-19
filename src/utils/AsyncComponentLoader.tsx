import * as React from 'react'
import Loading from '../components/shared/Loading'

declare interface IAsyncComponentProps {
  moduleProvider: ()=>Promise<any>
  props?:object
}

declare interface IAsyncComponentState {
  LoadedAsyncComponent?: (React.ComponentClass | null)
}


export class AsyncComponent extends React.Component<IAsyncComponentProps, IAsyncComponentState> {
  private isLoaded: boolean = false
  private isMount: boolean = true

  constructor(props: any) {
    super(props)
    this.state = {
      LoadedAsyncComponent: null
    }
  }

  public componentWillMount() {
    if (!this.isLoaded) {
      this.isLoaded = true
      this.props.moduleProvider().then((provideData: any) => {
          if(this.isMount){
            this.setState({LoadedAsyncComponent: provideData[Object.keys(provideData)[0]]})
          }
      })
    }
  }
  public componentWillUnmount(){
    this.isMount = false
  }

  public render() {
    const {LoadedAsyncComponent} = this.state
    return LoadedAsyncComponent ? <LoadedAsyncComponent {...this.props.props || {}}/> : <Loading>Page loading</Loading>
  }
}
