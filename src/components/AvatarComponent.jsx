import React, { useState } from "react";
import { IconButton, Box, Button, Snackbar, Typography } from "@mui/material";
import {
	Close as CloseIcon,
	CloudUpload as CloudUploadIcon,
	CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import defaultImage from "../assets/images/default-avatar.png";

const AvatarComponent = () => {
	const [file, setFile] = useState(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultImage);
	const [uploadSuccess, setUploadSuccess] = useState(false);

	const handleImageChange = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let newFile = e.target.files[0];
		reader.onloadend = () => {
			setFile(newFile);
			setImagePreviewUrl(reader.result);
		};
		if (newFile) {
			reader.readAsDataURL(newFile);
		}
	};

	const handleUpload = () => {
		setTimeout(() => {
			setUploadSuccess(true);
		}, 2000);
	};

	const handleCloseSnackbar = () => {
		setUploadSuccess(false);
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				my={2}
			>
				<Snackbar
					open={uploadSuccess}
					autoHideDuration={3000}
					onClose={handleCloseSnackbar}
					message="Upload successful!"
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "center",
					}}
				>
					<Box display="flex" alignItems="center" justifyContent="center" p={1}>
						<CheckCircleIcon />
						<Typography variant="body2">Upload successful!</Typography>
					</Box>
				</Snackbar>

				<Typography variant="h5">Upload your profile picture</Typography>
				<IconButton>
					<CloseIcon />
				</IconButton>
			</Box>
			<Box component="div" className="picture">
				<img
					src={imagePreviewUrl}
					className="picture-src"
					alt="..."
					style={{ width: 200, height: 200, borderRadius: "15%" }}
				/>
			</Box>
			<Box mt={2}>
				<Box display="flex" alignItems="center">
					<Button variant="outline" size="small">
						<IconButton color="primary" component="label">
							<input
								type="file"
								style={{ display: "none" }}
								onChange={(e) => handleImageChange(e)}
							/>
							Upload Picture
							<CloudUploadIcon />
						</IconButton>
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default AvatarComponent;
