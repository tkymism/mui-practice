import React from 'react'
import DashboardAppBar from './DashboradAppbar'
import DashboardDrawer from './DashboardDrawer'

export const drawerWidth = 240

const DashboardFrame = props => {
    const { titleName, mainListItems, secondaryListTitle, secondaryListItems } = props
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
                titleName = {titleName}
                handleDrawerOpen = { handleDrawerOpen }
                open = {open}
            />
            <DashboardDrawer 
                open = {open}
                handleDrawerClose = {handleDrawerClose} 
                mainListItems={mainListItems}
                secondaryListTitle={secondaryListTitle}
                secondaryListItems={secondaryListItems}
            />
        </div>
    )
}

export default DashboardFrame