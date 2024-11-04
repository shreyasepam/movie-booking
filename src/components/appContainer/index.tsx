import { FC, useEffect } from 'react'
import IAppContainerProps from './IAppContainer.props'
import getConfig from '../../envConfig';
import { useNavigate } from 'react-router-dom';

const AppContainer:FC<IAppContainerProps>= ({children}) => {
  const config = getConfig();
  const navigation = useNavigate();

  useEffect(() => {
    if(!config.token){
      navigation("/api-key")
    }
  },[config])

  return (
    <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl mt-4 p-4">
            {children}
        </div>
    </div>
  )
}

export default AppContainer;
