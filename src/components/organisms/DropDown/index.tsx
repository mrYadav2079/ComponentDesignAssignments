import { Box, Modal, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    openDropDown: boolean
}

const DropDown = ({openDropDown} : Props) => {

    const [open, setOpen] = useState<boolean>(openDropDown);
     const [value, setValue] = React.useState(0);

     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
       setValue(newValue);
     };

     const handleClose = () => {
        setOpen(false)
     }

  return (
    <div>
      <Modal open={open}>
        <Box sx={{ borderBottom: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three"/>
          </Tabs>
        </Box>
       
      </Modal>
    </div>
  );
}

export default DropDown