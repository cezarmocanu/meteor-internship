import { Chip, lighten } from "@mui/material";
import styled from "@emotion/styled";

const StyledChip = styled(Chip)(({ theme }) => ({
	"&.MuiChip-outlinedError": {
		backgroundColor: lighten(theme.palette.error.main, 0.8),
	},
	"&.MuiChip-outlinedSuccess": {
		backgroundColor: lighten(theme.palette.success.main, 0.8),
	},
	"&.MuiChip-outlinedWarning": {
		backgroundColor: lighten(theme.palette.warning.main, 0.8),
	},
	"&.MuiChip-outlinedInfo": {
		backgroundColor: lighten(theme.palette.info.main, 0.8),
	},
	"&.MuiChip-outlinedPrimary": {
		backgroundColor: theme.palette.primary.light,
	},
	"&.MuiChip-outlinedSecondary": {
		backgroundColor: lighten(theme.palette.secondary.main, 0.8),
	},
	"&.MuiChip-filledError": {
		backgroundColor: theme.palette.error.main,
		border: "none",
	},
	"&.MuiChip-filledSuccess": {
		backgroundColor: theme.palette.success.main,
		border: "none",
	},
	"&.MuiChip-filledWarning": {
		backgroundColor: theme.palette.warning.main,
		border: "none",
	},
	"&.MuiChip-filledInfo": {
		backgroundColor: theme.palette.error.main,
		border: "none",
	},
	"&.MuiChip-filledPrimary": {
		backgroundColor: theme.palette.primary.main,
		border: "none",
	},
	"&.MuiChip-filledSecondary": {
		backgroundColor: theme.palette.secondary.main,
		border: "none",
	},
	"&.MuiChip-disabledError": {
		backgroundColor: theme.palette.error.main,
		border: "none",
	},
	"&.MuiChip-disabledSuccess": {
		backgroundColor: theme.palette.success.main,
		border: "none",
	},
	"&.MuiChip-disabledWarning": {
		backgroundColor: theme.palette.warning.main,
		border: "none",
	},
	"&.MuiChip-disabledInfo": {
		backgroundColor: theme.palette.error.main,
		border: "none",
	},
	"&.MuiChip-disabledPrimary": {
		backgroundColor: lighten(theme.palette.primary.main, 0.25),
		border: "none",
	},
	"&.MuiChip-disabledSecondary": {
		backgroundColor: lighten(theme.palette.secondary.main, 0.8),
		border: "none",
	},
	"& .MuiAvatar-root": {
		border: "1px solid white",
		position: "relatve",
	},
	"& .MuiChip-avatarColorPrimary": {
		backgroundColor: theme.palette.primary.main,
	},
	"& .MuiChip-avatarColorSecondary": {
		backgroundColor: theme.palette.secondary.main,
	},
	"& .MuiChip-avatarColorError": {
		backgroundColor: theme.palette.error.main,
	},
	"& .MuiChip-avatarColorWarning": {
		backgroundColor: theme.palette.warning.main,
	},
	"& .MuiChip-avatarColorInfo": {
		backgroundColor: theme.palette.info.main,
	},
	"& .MuiChip-avatarColorSuccess": {
		backgroundColor: theme.palette.success.main,
	},
}));

export default StyledChip;
