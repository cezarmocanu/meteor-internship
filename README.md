# Starting the project
To run the project firstly run `npm install` and then `npm run dev` 

# Required plugins
> From Visual Studio Code extensions install Prettier and ESLint to enable consistent formatting and linting

# Customizing components
Below is an example of how to customize a Chip to fit the design


```jsx
// TestPage.jsx
<Box>
  {/* 
    Creez componenta cu proprietatile dorite in cazul acesta 
    - color="error"
    - color="error" si variant="outlined"
    Observ ca prima componenta se asemana cu designul, dar a doua nu se asemana
    */}
  <Chip color="error" label="23" />
  <Chip color="error" variant="outlined" label="23" />
</Box>
```

```jsx
//shared/chip/Chip.jsx

import { Chip, lighten } from "@mui/material";
import styled from "@emotion/styled";

/**Acest mod de scriere inseamna "pornind de la Chip-ul original adauga proprietatile mele peste"  */
const StyledChip = styled(Chip)(({ theme }) => ({
	/**Dupa ce ma uit cu inspectorul pe componenta care nu se asemeana cu designul si vreau sa o customizez
	 * observ ca are o clasa MuiChip-outlinedError */

	/**
	 * & inseamna clasa de baza a Chip-ului. Este nevoie de acesta pentru a indica ca vrem sa modificam
	 * specific aceasta componenta
	 */
	"&.MuiChip-outlinedError": {
		// folosesc culoare din theme pentru a nu folosi "magic strings" adica stringuri oarecare
		// de asemenea folosesc functia lighten pentru a face culoare mai deschisa pornind de la culoarea
		// din theme, in loc sa aleg eu o culoare arbitrara
		backgroundColor: lighten(theme.palette.error.main, 0.8),
		border: "none",
	},
}));

export default StyledChip;
```
> Doing the above will modifi the outlined compoenent from outlined to a special outlined design which fits the figma

### Original
<img width="138" alt="image" src="https://user-images.githubusercontent.com/15773819/226998665-d3ec6132-d700-478c-a3b3-f45d9df5ed96.png">

### Customized
<img width="111" alt="image" src="https://user-images.githubusercontent.com/15773819/226998539-aa24f56b-c63b-4f80-9848-3c8e84e03a24.png">


# Folder and component naming coventions
- Components will be named using PascalCase e.g. ThisIsAComponent
- Folders will be named using dash case e.g. this-is-a-component

# Folder structure

## components
> Custom components as separate folders such as project specific components.

## components/shared
> Base components from material ui styled specifically for this project. Components here can be shared across multiple projects.
