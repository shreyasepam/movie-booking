export default interface IAppButtonProps{
    selected?:boolean
    title?:string;
    icon?:React.ReactNode
    className?:string
    animateTitle?:boolean
    classes?:{
        root?:string;
        text?:string;
    }
}