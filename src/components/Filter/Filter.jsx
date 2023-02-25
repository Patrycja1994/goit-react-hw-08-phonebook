import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilters(value));
  };
  return (
    <>
      <p className={css.findContacts}>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        onChange={onChange}
        value={useSelector(selectFilter)}
      ></input>
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
