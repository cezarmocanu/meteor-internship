import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "@emotion/styled";

const StyledDatePicker = styled(DatePicker)(() => ({
	"& .MuiOutlinedInput-root": {
		borderRadius: 16,
	},
}));

export default StyledDatePicker;
