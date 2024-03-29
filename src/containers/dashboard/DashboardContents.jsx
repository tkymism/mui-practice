import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../../components/Chart';
import Deposits from '../../components/Deposits';
import Orders from '../../components/Orders';
import Copyright from '../../components/Copyright'

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const DashboardContents = props => {
    const { charts, rows } = props
    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    {/* Chart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper className={fixedHeightPaper}>
                            <Chart
                                titleName={'Today'} 
                                lineDot={false}
                                data={charts}
                                />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    <Grid item xs={12} md={4} lg={3}>
                        <Paper className={fixedHeightPaper}>
                            <Deposits
                                titleName = 'Recent Deposits'
                                depositAmount = '$3,024.00'
                                depositDate = 'on 15 March, 2019'
                            />
                        </Paper>
                    </Grid>
                    {/* Recent Orders */}
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Orders
                                titleName = 'Recent Orders'
                                rows = {rows}
                            />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Copyright>Your Company</Copyright>
        </main>
    )
}

export default DashboardContents