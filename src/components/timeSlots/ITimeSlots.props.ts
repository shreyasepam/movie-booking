export default interface ITimeSlotsProps {
}

export interface ITimeSlotProps {
    id:string;
  time: string;
  isSelected: boolean;
  disabled?:boolean;
  onClick:(id:string) => void
}
