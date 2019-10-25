import React from 'react'
import DashboardAppBar from './DashboradAppbar'
import DashboardDrawer from './DashboardDrawer'

export const drawerWidth = 240

const DashboardFrame = props => {
    const { mainListItems, secondaryListItems, ...rests } = props
    const [open, setOpen] = React.useState(true)
    const handleDrawerOpen = () => {
        setOpen(true);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    }
    return (
        <div> 
            <DashboardAppBar 
                handleDrawerOpen = { handleDrawerOpen }
                open = {open}
                {...rests}
            />
            <DashboardDrawer 
                open = {open}
                handleDrawerClose = {handleDrawerClose} 
                mainListItems={mainListItems}
                secondaryListItems={secondaryListItems}
                {...rests}
            />
        </div>
    )
}

export default DashboardFrame