import { UserType } from 'components/UserListTile';

export interface TabPanelProps {
  followers: UserType[];
  following: UserType[];
}
