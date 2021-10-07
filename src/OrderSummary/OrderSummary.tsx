import { Button, Card, CardActions, CardContent, CardMedia, createStyles, Grid, Link, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import IllustrationHero from 'images/illustration-hero.svg'
import { ReactComponent as IconMusic } from 'images/icon-music.svg'
import classNames from 'classnames';
interface Props {

}

const useStyles = makeStyles(theme => createStyles({
    root: {
        width: "325px",
        borderRadius: 20,
    },
    title: {
        color: theme.palette.neutralBlue.dark,
        fontWeight: 900,
        fontSize: "16pt",
    },
    subtitle: {
        color: theme.palette.neutralBlue.desaturated,
        padding: "1rem 0.5rem",
    },
    actions: {
        flexDirection: "column",
        padding: 0,
    },
    button: {
        borderRadius: 10,
        textTransform: "none",
        padding: "12.5px",
        fontWeight: 700,
    },
    proceedPayment: {
        backgroundColor: theme.palette.primaryBlue.bright,
        "&:hover": {
            opacity: "75%"
        },

    },
    cancelOrder: {
        color: theme.palette.neutralBlue.desaturated,
        "&:hover": {
            color: theme.palette.neutralBlue.dark,
            backgroundColor: "unset",
        },
    },
    planType: {
        fontWeight: 900,
        fontSize: "14px",
    },
    fee: {
        color: theme.palette.neutralBlue.desaturated,
        fontSize: "14px",
    },
    content: {
        paddingTop: "2rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
    },
    plan: {
        marginBottom: "1rem",
        backgroundColor: theme.palette.neutralBlue.veryPale,
        borderRadius: 10,
        padding: "1rem 0",
    },
    change: {
        fontWeight: 700,
        "&:hover": {
            textDecoration: "none",
        },
    },
}), { name: "OrderSummary" });

const OrderSummary = (props: Props) => {
    const { root, title, subtitle, actions, button, proceedPayment, cancelOrder, planType, fee, content, plan, change } = useStyles();
    return (
        <Card
            raised={false}
            className={root}
        >
            <CardMedia
                component="img"
                height="160"
                image={IllustrationHero}
                alt="illustration-hero"
            />
            <CardContent
                className={content}
            >
                <Typography
                    variant="h4"
                    align="center"
                    className={title}
                    gutterBottom
                >
                    Order Summary
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    className={subtitle}
                    gutterBottom
                >
                    You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
                </Typography>
                <Grid container alignItems="center" justifyContent="space-evenly" className={plan}>
                    <Grid item>
                        <IconMusic />
                    </Grid>
                    <Grid item>
                        <Typography
                            className={planType}
                        >
                            Annual Plan
                        </Typography>
                        <Typography
                            className={fee}
                        >$59.99/year</Typography>
                    </Grid>
                    <Grid item>
                        <Link
                            underline="always"
                            className={change}
                        >
                            Change
                        </Link>
                    </Grid>
                </Grid>
                <CardActions
                    className={actions}>
                    <Button
                        color="primary"
                        className={classNames(button, proceedPayment)}
                        variant="contained"
                        fullWidth
                    >
                        Proceed to Payment
                    </Button>
                    <Button
                        className={classNames(button, cancelOrder)}
                        fullWidth
                    >
                        Cancel Order
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default OrderSummary
