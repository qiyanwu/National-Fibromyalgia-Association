import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(value, researchTopicOption, theme) {
  return {
    fontWeight:
      researchTopicOption.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    backgroundColor:
      researchTopicOption.indexOf(value) === -1
        ? theme.palette.background.paper
        : "#2B6785",
    color:
      researchTopicOption.indexOf(value) === -1
        ? theme.palette.text.primary
        : theme.palette.primary.contrastText,
    border: researchTopicOption.indexOf(value) === -1 ? "" : "1px solid white",
  };
}

export default function MultipleSelectChip({
  data,
  title,
  selectedTags,
  selectedTagsHandler,
}) {
  const theme = useTheme();

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    selectedTagsHandler(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl className="w-full">
        <InputLabel>{title}</InputLabel>
        <Select
          multiple
          value={selectedTags}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Object.values(data).map((value) => (
            <MenuItem
              key={value}
              value={value}
              style={getStyles(value, selectedTags, theme)}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
