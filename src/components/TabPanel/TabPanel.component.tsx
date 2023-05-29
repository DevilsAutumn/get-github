import React, { FC } from 'react';

import { Tabs, Tab, Box } from '@mui/material';
import { Panel } from './Panel';

import { TabPanelProps } from './TabPanel.types';

/**
 * function to add attributes to tabs of tab panel
 * @param {number} index - index of tabpanel
 * @returns {object} returns attributes for Tab component
 */
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const TabPanel: FC<TabPanelProps> = ({
  followers,
  following,
}: TabPanelProps) => {
  const [value, setValue] = React.useState(0);

  /**
   * function to handle switching between panels.
   * @param {React.SyntheticEvent} event - event passed when switching tabs
   * @param {number} newValue - value to assign to make panel visible
   */
  const switchTabs = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'primary' }}>
        <Tabs
          value={value}
          onChange={switchTabs}
          aria-label="basic tabs example"
        >
          <Tab sx={{ fontSize: '1rem' }} label="Followers" {...a11yProps(0)} />
          <Tab sx={{ fontSize: '1rem' }} label="Following" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <Panel index={0} value={value} list={followers} />
      <Panel index={1} value={value} list={following} />
    </>
  );
};
