import { useDispatch } from 'react-redux';

import { filterContacts } from 'redux/contacts/slicesFilter';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(filterContacts(value));
  };

  return (
    <>
      <label className={style.labelFilter} >Find contacts by name</label>
      <input className={style.inputFilter} type="text" name="filter" onChange={onChange} />
    </>
  );
};

export default Filter;