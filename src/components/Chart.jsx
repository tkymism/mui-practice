import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import Title from './Title'

const useStyles = makeStyles(() => ({
    lineChart: {
      margin: {
        top: 16,
        right: 16,
        bottom: 0,
        left: 24,
      },
    },
}))

const Chart = props => {
    const { titleName, lineDot, data } = props
    const classes = useStyles()
    return (
        <React.Fragment>
            <Title>{titleName}</Title>
            <ResponsiveContainer>
            <LineChart
                data={data}
                margin={classes.lineChart.margin}
            >
            <XAxis dataKey="time" />
            <YAxis>
            <Label 
                angle={270} 
                position={'left'} 
                style={{ textAnchor: 'middle' }}>
                Sales ($)
            </Label>
            </YAxis>
            <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={lineDot} />
            </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    )    
}

export default Chart