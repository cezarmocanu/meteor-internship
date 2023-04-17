import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
	borderRadius: 12,
	"&.MuiButton-contained": {
		textTransform: "capitalize",
	},
	"&.MuiButton-containedPrimary": {
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
		},
	},
	"&.MuiButton-containedSecondary": {
		"&:hover": {
			backgroundColor: theme.palette.secondary.main,
		},
	},
	"&.MuiButton-containedError": {
		"&:hover": {
			backgroundColor: theme.palette.error.main,
		},
	},
	"&.MuiButton-containedWarning": {
		"&:hover": {
			backgroundColor: theme.palette.warning.main,
		},
	},
	"&.MuiButton-containedInfo": {
		"&:hover": {
			backgroundColor: theme.palette.info.main,
		},
	},
	"&.MuiButton-containedSuccess": {
		"&:hover": {
			backgroundColor: theme.palette.success.main,
		},
	},
	"&.MuiButton-outlined": {
		textTransform: "capitalize",
		"&:hover": {
			backgroundColor: "#FFFF",
		},
	},
	"&.MuiButton-sizeLarge": {
		minWidth: "9rem",
		minHeight: "3rem",
	},
	"&.MuiButton-sizeMedium": {
		minWidth: "7.5rem",
		minHeight: "2.5rem",
	},
	"&.MuiButton-sizeSmall": {
		minWidth: "6rem",
		minHeight: "2rem",
	},
	"&.MuiButton-link": {
		color: theme.palette.primary.main,
		textTransform: "capitalize",
		"&:hover": {
			backgroundColor: "#FFFF",
		},
	},

	"&.MuiButton-outlined.Mui-disabled": {
		backgroundColor: "#FFFF",
		color: "#D7DDF8",
	},
	"&.Mui-disabled": {
		color: "#FFFFFF",
		backgroundColor: "#D7DDF8",
		textTransform: "capitalize",
	},
	"&.MuiButton-linkSecondary": {
		color: theme.palette.secondary.main,
	},
	"&.MuiButton-linkError": {
		color: theme.palette.error.main,
	},
	"&.MuiButton-linkWarning": {
		color: theme.palette.warning.main,
	},
	"&.MuiButton-linkInfo": {
		color: theme.palette.info.main,
	},
	"&.MuiButton-linkSuccess": {
		color: theme.palette.success.main,
	},
}));

export default StyledButton;

