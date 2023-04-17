import { lighten } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
	marginBottom: 10,

	".css-1tsffi2-MuiFormHelperText-root": {
		marginLeft: 0,
	},
	".MuiOutlinedInput-root": {
		".MuiInputAdornment-root": {
			color: "inherit",
		},
	},
	".css-1lg3st5-MuiInputBase-root-MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline":
		{
			borderColor: theme.palette.secondary.main,
		},
	".css-1lg3st5-MuiInputBase-root-MuiOutlinedInput-root.Mui-error.Mui-focused:hover fieldset":
		{
			borderColor: theme.palette.error.main,
		},
	".css-1hutlhk-MuiInputBase-root-MuiOutlinedInput-root.Mui-error": {
		color: theme.palette.error.main,
	},
	"& input:valid + fieldset": {
		borderColor: lighten(theme.palette.primary.main, 0.2),
		borderWidth: 1,
	},
	"&.MuiOutlinedInput-root": {
		position: "relative",
		border: "1px solid",
		borderColor: lighten(theme.palette.primary.main, 0.8),
		fontSize: "1rem",
		backgroundColor: theme.palette.secondary.contrastText,
	},
	".MuiInputBase-root": {
		borderRadius: "1rem",
	},
}));
export default StyledTextField;
