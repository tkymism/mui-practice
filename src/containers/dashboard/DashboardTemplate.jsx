import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardFrame from './DashboardFrame'
import DashboardContents from './DashboardContents'

const useStyles = makeStyles({
    root: {
      display: 'flex',
    },
})

const DashboardTemplate = props => {
    const { titleName, mainList, secondaryList, secondaryListTitle, charts, rows} = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <DashboardFrame 
                titleName={titleName}
                mainListItems={mainList}
                secondaryListTitle={secondaryListTitle}
                secondaryListItems={secondaryList}
            />
            <DashboardContents
                charts={charts}
                rows={rows}
            />
        </div>
    )
}

export default DashboardTemplate