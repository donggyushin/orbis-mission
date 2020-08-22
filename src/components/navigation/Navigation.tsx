import { Paper, Tab, Tabs } from '@material-ui/core'

import { NAVIGATION_STRING_TYPE } from '../../types/Types'
import React from 'react'

interface Props {
 tabValue: string
 handleChange: (_: React.ChangeEvent<{}>, value: NAVIGATION_STRING_TYPE) => void
}

const Navigation: React.FunctionComponent<Props> = ({ tabValue, handleChange }) => {
 return <Paper style={{ width: "100%" }} square>
  <Tabs
   value={tabValue}
   indicatorColor="primary"
   textColor="primary"
   onChange={handleChange}
   aria-label="disabled tabs example"
   variant="fullWidth"
  >
   <Tab label="articles" value={'articles'} />
   <Tab label="starred" value={'starred'} />
  </Tabs>
 </Paper>
}

export default Navigation