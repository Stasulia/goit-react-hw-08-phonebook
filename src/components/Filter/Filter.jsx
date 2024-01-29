import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'store/contacts/filterSlice';
import { selectorFilter } from 'store/contacts/selectorsContacts';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(filterAction(event.target.value));
  };
  return (
    <form className={css.form}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
          placeholder="Please write name"
        />
      </label>
    </form>
  );
};

export default Filter;
