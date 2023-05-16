import { createTheme } from "@mui/material";
import GelionRegular from "./assets/fonts/Gelion Regular.woff";
import GelionBold from "./assets/fonts/Gelion Bold.woff";
import GelionLight from "./assets/fonts/Gelion Light.woff";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3754DB",
			light: "#F5F7FE",
		},
		secondary: {
			main: "#B80020",
			contrastText: "#FFF",
		},
		error: {
			main: "#FB151A",
		},
		warning: {
			main: "#EBA300",
			contrastText: "#FFF",
		},
		info: {
			main: "#6684FF",
			secondary: "#CD475D",
			light: "#FCE4E4",
			light2: "#f3f9fc",
			light3: "#5b7ae8",
		},
		success: {
			main: "#00C271",
			contrastText: "#FFFF",
		},
		text: {
			primary: "#16171D",
			secondary: "#62667E",
			disabled: "#C2C4CF",
			light: "#F0F1F4",
		},
		white: "#F5F7FE",
		// styleOverrides: {
		// 	colorPrimary: {
		// 		backgroundColor: "#F5F7FE",
		// 		color: "#3754DB",
		// 	},
		// 	colorWarning: {
		// 		backgroundColor: "#eba30033",
		// 		color: "#EBA300",
		// 	},
		// 	colorSuccess: {
		// 		backgroundColor: "#00c27138",
		// 		color: "#00C271",
		// 	},
		// 	colorInfo: {
		// 		backgroundColor: "#eecdff",
		// 		color: "#7e22ce",
		// 	},
		// },
	},
	typography: {
		fontFamily: "Gelion, Roboto, Arial",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: `
            @font-face {
              font-family: 'Gelion';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Gelion'), local('Gelion-Regular'), url(${GelionRegular}) format('woff');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            },
            @font-face {
                font-family: 'Gelion';
                font-style: bold;
                font-display: swap;
                font-weight: 700;
                src: local('Gelion'), local('Gelion-Bold'), url(${GelionBold}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              },
              @font-face {
                font-family: 'Gelion';
                font-style: light;
                font-display: swap;
                font-weight: 200;
                src: local('Gelion'), local('Gelion-Light'), url(${GelionLight}) format('woff');
                unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
              }
          `,
		},
		MuiChip: {
			variants: [
				{
					props: {
						variant: "dot",
					},
					style: {
						"& .MuiChip-avatar": {
							marginLeft: 3,
							marginRight: "-21px",
						},
					},
				},
				//TODO fixme: variant for dot-outlined
			],
		},
	},
});

export default theme;
