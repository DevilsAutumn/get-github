export interface LoginFormProps {
  onSubmit: (accesstoken: string) => void;
  setIsLoading: (value: boolean) => void;
}
