import { FC } from 'react'
import IAppContainerProps from './IAppContainer.props'

const AppContainer:FC<IAppContainerProps>= ({children}) => {
  return (
    <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl mt-4">
            {children}
        </div>
    </div>
  )
}

export default AppContainer;
