export interface NavlinkItemType {
  navigationTitle: string;
  path: string;
  showOnAuth: boolean;
}

export interface NavlinkItemProps {
  navlink: NavlinkItemType;
  onClick: (value: boolean) => void;
}
