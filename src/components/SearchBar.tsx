import { Button, Grid } from "@mui/material";

// Project Dependencies
import SearchProps from "../props/SearchProps";

const SearchBar: React.FC<SearchProps> = ({
  value,
  onChange,
  onSubmit,
  onClicked,
}) => {
  return (
    <Grid item xs={11} sm={8} md={7} lg={4}>
      <form style={{ display: "flex" }} onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search a movie"
          onChange={onChange}
          value={value}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "0 30px", marginLeft: "-10px", fontWeight: "bold" }}
          onClick={onClicked}
        >
          Search
        </Button>
      </form>
    </Grid>
  );
};

export default SearchBar;
