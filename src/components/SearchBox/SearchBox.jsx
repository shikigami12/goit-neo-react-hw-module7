import { useId } from 'react';
import css from './SearchBox.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

export const SearchBox = () => {
  const inputId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <div className={css.container}>
        <label htmlFor={inputId}>Find contacts by name</label>
        <input
          id={inputId}
          type="text"
          placeholder="Search contacts by name"
          value={filter}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
