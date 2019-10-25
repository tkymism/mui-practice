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
    const { mainList, secondaryList, charts, rows, ...rests } = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CssBaseline />
            <DashboardFrame 
                mainListItems={mainList}
                secondaryListItems={secondaryList}
                {...rests}
            />
            <DashboardContents
                charts={charts}
                rows={rows}
                {...rests}
            />
        </div>
    )
}

export default DashboardTemplate