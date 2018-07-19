import * as PropTypes from 'prop-types'
import * as React from 'react'

export default class Loading extends React.Component{
    public static propTypes = {
      children: PropTypes.node,
    }

    public render(){
      const { children } = this.props

      return (
        <div className="loading">
          <span>{children || 'Loading'}</span>
        </div>
      )
    }
}