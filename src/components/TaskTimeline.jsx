import {
	TimelineItem,
	TimelineSeparator,
	Timeline,
	TimelineConnector,
	TimelineContent,
} from "@mui/lab";
import { Typography, Stack, Avatar } from "@mui/material";
import Chip from "../components/shared/chip/Chip";

const INTL_FORMMATER = new Intl.DateTimeFormat("en-US");

function TaskTimeline({ startDate, dueDate }) {
	return (
		<Timeline position="left" sx={{ minWidth: "10rem" }}>
			<TimelineItem sx={{ flexGrow: 1 }}>
				<TimelineSeparator>
					<Chip variant="dot" avatar={<Avatar> </Avatar>} />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<Stack>
						<Typography sx={{ whiteSpace: "nowrap" }}>Created date</Typography>
						<Typography fontWeight={"bold"}>
							{INTL_FORMMATER.format(startDate)}
						</Typography>
					</Stack>
				</TimelineContent>
			</TimelineItem>
			<TimelineItem>
				<TimelineSeparator>
					<Chip variant="dot" color="primary" avatar={<Avatar> </Avatar>} />
				</TimelineSeparator>
				<TimelineContent>
					<Stack>
						<Typography sx={{ whiteSpace: "nowrap" }}>Due date</Typography>
						<Typography fontWeight={"bold"}>
							{INTL_FORMMATER.format(dueDate)}
						</Typography>
					</Stack>
				</TimelineContent>
			</TimelineItem>
		</Timeline>
	);
}

export default TaskTimeline;
