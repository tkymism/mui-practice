import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import AddressForm from './AddressForm.jsx'
import PaymentForm from './PaymentForm'
import Review from './Review'

const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
)

const useStylesAppBar = makeStyles({
    appBar: {
      position: 'relative',
    },
})

const CampanyNameAppBar = props => {
    const classes = useStylesAppBar()
    return (
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
            {props.children}
            </Typography>
          </Toolbar>
        </AppBar>
    )
}

const steps = ['Shipping address', 'Payment details', 'Review your order']

const useStylesHearder = makeStyles(theme => ({
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
}))

const CheckoutHeader = props => {
    const { activeStep, stepLabels } = props
    const classes = useStylesHearder()
    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
            { stepLabels.map(label => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </React.Fragment>
    )
}

const ThankYouForOrder = () => (
    <React.Fragment>
        <Typography variant="h5" gutterBottom>
        Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
        Your order number is #2001539. We have emailed your order confirmation, and will
        send you an update when your order has shipped.
        </Typography>
    </React.Fragment>
)

const useStyleFooter = makeStyles(theme => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}))

const CheckoutFooter = props => {
    const { activeStep, handleNext, handleBack } = props
    const classes = useStyleFooter()
    return (
        <div className={classes.buttons}>
            {activeStep !== 0 && (
            <Button onClick={handleBack} className={classes.button}>
                Back
            </Button>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
            >
            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
            </Button>
        </div>
    )
}

const useStylesCheckoutTemplate = makeStyles(theme => ({
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
}))

const CheckoutTemplate = () => {
    const classes = useStylesCheckoutTemplate()
    const [activeStep, setActiveStep] = React.useState(0)
    const handleNext = () => setActiveStep(activeStep + 1)
    const handleBack = () => setActiveStep(activeStep - 1)
    return (
        <React.Fragment>
          <CssBaseline />
          <CampanyNameAppBar>{'My Company'}</CampanyNameAppBar>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <CheckoutHeader activeStep={activeStep} stepLabels={steps} />
              <React.Fragment>
                {activeStep === steps.length ? (
                    <ThankYouForOrder/>
                ) : (
                    <React.Fragment>
                        {getStepContent(activeStep)}
                        <CheckoutFooter
                            activeStep={activeStep}
                            handleNext={handleNext}
                            handleBack={handleBack}
                        />
                    </React.Fragment>
                            )}
              </React.Fragment>
            </Paper>
            <Copyright />
          </main>
        </React.Fragment>
      );
}

const getStepContent = step => {
    switch (step) {
        case 0: return <AddressForm />
        case 1: return <PaymentForm />
        case 2: return <Review />
        default: throw new Error('Unknown step')
      }
}

export default CheckoutTemplate