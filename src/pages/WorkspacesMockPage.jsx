import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Stack, CardContent, CardHeader,CardActions,Avatar,} from "@mui/material";
import Button from "../components/shared/button/Button";
import CardComponent from "../components/shared/card/Card";
import CardMedia from "../components/shared/card/CardMedia";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function WorkspaceMockPage(){
    const theme = useTheme();
return (
    <Stack>
        <Stack direction="row"
        justifyContent="space-around"
        alignItems="center">
            <Typography variant="h3" gutterBottom>
                Workspaces
            </Typography>
            <Button size="Large" variant="contained">
				Create Workspace
			</Button>
        </Stack>
        <Stack direction="row"
        justifyContent="space-around">
        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 1
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
                        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 2
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
                        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 2
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
        </Stack>
        <Stack direction="row"
        justifyContent="space-around">
        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 1
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
                        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 2
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
                        <CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold" color="">
										Workspace 2
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
                                  Workspace description lorem ipsum dolor sit amet.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button size="medium" variant="link">View</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ArrowForwardIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
        </Stack>
    </Stack>
);
}
export default WorkspaceMockPage;