/* eslint-disable no-script-url */

import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from '../components/Title'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

const Deposits = props => {
    const { titleName, depositAmount, depositDate } = props
    const classes = useStyles()
    return (
        <React.Fragment>
            <Title>{titleName}</Title>
            <Typography component="p" variant="h4">{depositAmount}</Typography>
            <Typography color="textSecondary" className={classes.depositContext}>{depositDate}</Typography>
            <div><Link color="primary" href="javascript:;">View balance</Link></div>
        </React.Fragment>
    )
}

export default Deposits