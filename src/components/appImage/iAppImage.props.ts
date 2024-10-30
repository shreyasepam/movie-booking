export default interface IAppImageProps{
    path:string;
    className?:string;
}

export interface IBgImageProps extends IAppImageProps{
    children:React.ReactNode;
}