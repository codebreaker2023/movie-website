import { Grid } from '@mui/material'
import SearchProps from '../props/SearchProps'

const SearchBar: React.FC<SearchProps> = ({value, onChange, onSubmit }) => {
  return (
    <Grid item xs={11} sm={8} md={7} lg={4}>
        <form style={{display: "flex"}} onSubmit={onSubmit}>
            <input type="text" placeholder="Search a movie" onChange={onChange} value={value}/>
            <button>Search</button>
        </form>
    </Grid>
  )
}

export default SearchBar
