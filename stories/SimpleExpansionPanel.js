import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SimpleExpansionPanel from '../src/components/SimpleExpansionPanel'

export default {
    component: SimpleExpansionPanel,
    title: 'SimpleExpansionPanel',
}

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
}))
  
const simpleExpansionData = [
    {
        summary:'Expansion Panel 1',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
        summary:'Expansion Panel 2',
        details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. 2',
    },
    {
        summary:'Expansion Panel 3',
        disabled:true
    },
]
  
const PanelsForDemo = () => {
    const data = simpleExpansionData
    const classes = useStyles()
    return (
        <div className={classes.root}>
            {data.map((content) => (
                <SimpleExpansionPanel
                    summary={content.summary} 
                    details={content.details} 
                    disabled={content.disabled} 
                />
            ))}
        </div>
    )
}

export const SimpleExpansionPanelsForDemo = () => <PanelsForDemo />