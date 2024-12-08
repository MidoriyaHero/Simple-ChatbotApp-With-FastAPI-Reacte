import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const LeftNav = () => {
  return (
    <Sidebar
      >
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            if (level === 0)
              return {
                backgroundColor: active ? '#eecef9' : undefined,
              };
          },
        }}
      >
        <MenuItem component={<Link to="https://fb.com" />}>NewChat</MenuItem>
        <SubMenu label="Chat">
          <MenuItem>Chat 1</MenuItem>
          <MenuItem>Chat 2</MenuItem>
        </SubMenu>
        <MenuItem component={<Link to="/" />}>Daily Journal</MenuItem>
      </Menu>

      <Menu>
        <MenuItem onClick={() => console.log('Logout clicked')} style={{
            color: 'red',
            marginTop: "70vh"
          }}
          component={<Link to="/" />}
>
          Logout
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
