export interface IDefaultState {
    loading: boolean;
    hasData: boolean;
    hasError: boolean;
    error?:
      | {
          code?: number;
          message?: string;
        }
      | undefined;
    data?: any | undefined;
  }
  
  export type THTTPCodes = Record<number, IHTTPCodes>;
  export interface IHTTPCodes { code: number; message: string }