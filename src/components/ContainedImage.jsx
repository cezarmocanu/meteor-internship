import { Box } from "@mui/material";

function ContainedImage({ width = 0, height = 0, src, sx }) {
	if (!src) {
		throw new Error("ContainedImage requires a src");
	}

	if (!sx && (!width || !height)) {
		throw new Error(
			"ContainedImage requires a width and a height passed by props, or through the sx property"
		);
	}

	return (
		<Box sx={{ width, height, ...(sx ?? {}) }}>
			<img src={src} style={{ width: "100%", height: "100%" }} />
		</Box>
	);
}

export default ContainedImage;
