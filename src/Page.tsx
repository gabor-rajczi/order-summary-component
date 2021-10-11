import { createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
import BackgroundDesktop from './images/pattern-background-desktop.svg';
import BackgroundMobile from './images/pattern-background-mobile.svg';

interface Props {
    children: React.ReactNode;
}

const useStyles = makeStyles(theme => createStyles({
    root: {
        height: "100vh",
        backgroundRepeatX: "repeat",
        backgroundRepeatY: "no-repeat",
        backgroundSize: "contain",
        backgroundImage: `url(${BackgroundMobile})`,
        [theme.breakpoints.up("mobile")]: {
            backgroundImage: `url(${BackgroundDesktop})`,
        },
        backgroundColor: theme.palette.primaryBlue.pale,
    }
}), { name: "Page" });

const Page = (props: Props) => {
    const { root } = useStyles();
    return (
        <main className={root} role="main">
            {props.children}
        </main>
    )
}

export default Page
