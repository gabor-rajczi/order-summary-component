import { createTheme } from "@material-ui/core";
declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: false,
        sm: false,
        md: false,
        lg: false,
        xl: false,
        mobile: true,
        desktop: true,
    }
}

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        primaryBlue: {
            pale: string;
            bright: string;
        },
        neutralBlue: {
            veryPale: string;
            desaturated: string;
            dark: string;
        }
    }

    interface PaletteOptions {
        primaryBlue: {
            pale: string;
            bright: string;
        },
        neutralBlue: {
            veryPale: string;
            desaturated: string;
            dark: string;
        }
    }
}


const theme = createTheme({
    typography: {
        fontFamily: [
            "'Red Hat Display'",
            "sans-serif"
        ].join(",")
    },
    breakpoints: {
        values: {
            mobile: 375,
            desktop: 1440,
        }
    },
    palette: {
        primaryBlue: {
            pale: "hsl(225, 100%, 94%)",
            bright: "hsl(245, 75%, 52%)",
        },
        neutralBlue: {
            veryPale: "hsl(225, 100%, 98%)",
            desaturated: "hsl(224, 23%, 55%)",
            dark: "hsl(223, 47%, 23%)",
        }
    }
});

export default theme;