import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const StyledDeleteBadge = styled(Badge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		backgroundColor: theme.palette.text.light,
		color: theme.palette.text.primary,
		opacity: 0.8,
		right: 5,
		top: 5,
	},
}));

export default StyledDeleteBadge;
