import css from "../SearchBox/SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.search}
        type="text"
        value={selectNameFilter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
