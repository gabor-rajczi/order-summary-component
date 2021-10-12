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


const themeDefault = createTheme({
    typography: {
        fontFamily: [
            "'Red Hat Display'",
            "sans-serif"
        ].join(",")
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
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 10,
                textTransform: "none",
                fontWeight: 700,
                padding: "12.5px",
            },
        },
        MuiLink: {
            root: {
                fontWeight: 700,
                textDecoration: "underline",
            },
            underlineHover: {
                textDecoration: "none",
            }
        }
    }
});

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 375,
            desktop: 1440,
        }
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                backgroundColor: themeDefault.palette.primaryBlue.bright,
                "&:hover": {
                    backgroundColor: "hsl(245 83% 68%)",
                }
            },
            text: {
                color: themeDefault.palette.neutralBlue.desaturated,
                "&:hover": {
                    color: themeDefault.palette.neutralBlue.dark,
                    backgroundColor: "unset",
                },
            }
        }
    }
}, themeDefault)

export default theme;