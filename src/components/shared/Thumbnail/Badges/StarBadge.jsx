import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

const StyledStarBadge = styled(Avatar)(({ theme }) => ({
	width: 25,
	height: 25,
	position: "relative",
}));

export default StyledStarBadge;
