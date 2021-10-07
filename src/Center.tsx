import { createStyles, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const useStyles = makeStyles(createStyles({
    root: {
        height: "100vh"
    }
}), { name: "Center" })

const Center = (props: Props) => {
    const { root } = useStyles();
    return (
        <Grid container alignItems="center" justifyContent="center" className={root}>
            <Grid item>
                {props.children}
            </Grid>
        </Grid>
    )
}

export default Center
