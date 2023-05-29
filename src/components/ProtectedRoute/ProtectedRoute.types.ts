export interface ProtectedRouteProps {
  navigateTo?:string;
  isAuthenticated: boolean;
  outlet: JSX.Element;
}
