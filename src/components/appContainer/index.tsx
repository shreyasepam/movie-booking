import { FC } from 'react'
import IAppContainerProps from './IAppContainer.props'

const AppContainer:FC<IAppContainerProps>= ({children}) => {
  return (
    <div className="w-full h-full flex justify-center">
          <div className="w-full max-w-7xl">
            {children}
        </div>
    </div>
  )
}

export default AppContainer;
