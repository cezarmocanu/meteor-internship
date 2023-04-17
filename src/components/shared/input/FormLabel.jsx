import { FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
	color: theme.palette.text.primary,
	"&.Mui-error": {
		color: theme.palette.text.primary,
	},
	"&.Mui-focused": {
		color: theme.palette.text.primary,
	},
}));

export default StyledFormLabel;
