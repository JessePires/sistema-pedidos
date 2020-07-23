import React, { useState, useEffect, useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  CircularProgress
} from '@material-ui/core';
import TextField from './textField';

function FormAddress ({ onUpdate = () => {} }) {
  const [ cep, setCep ] = useState('');
  const [ fetchingCep, setFetchingCep ] = useState(false);
  const [ addressState, dispatch ] = useReducer(reducer, initialState);

  // to keep the var reference even after a new render
  const numberField = useRef();
  const addressField = useRef();

  useEffect(() => { // to handle with addAddress()
    onUpdate(addressState);
  }, [addressState, onUpdate]);

  useEffect(() => {
    async function fetchAddress () {
      if (cep.length < 9) {
        return;
      }

      console.log('buscar cep:', cep);

      setFetchingCep(true);
      const data = await fetch(`https://ws.apicep.com/cep/${ cep }.json`);
      setFetchingCep(false);

      if (!data.ok) {
        dispatch({ type: 'RESET' });
        addressField.current.focus();
        return;
      }

      const result = await data.json();
      console.log(result);

      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          payload: {
            error: result.message
          }
        });
        return;
      }

      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        payload: result
      });

      if (result.address === '') {
        addressField.current.focus();
      } else {
        numberField.current.focus();
      }
    };

    fetchAddress();
  }, [cep]);

  function handleChangeCep (e) {
    setCep(cepMask(e.target.value));
  };

  function cepMask (value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1');
  }

  function handleChangeField (e) {
    const { name, value } = e.target;

    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value}
    });
  }

  return (
    <Grid
      container
      spacing={ 2 }
      alignItems='center'
    >
      <TextField
        label='CEP'
        xs={ 4 }
        autoFocus
        value={ cep }
        onChange={ handleChangeCep }
        error={ !!addressState.error }
      />

      <Grid item xs={ 8 } >
        { fetchingCep && <CircularProgress size={ 20 } /> }
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },

        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },

        {
          label: 'Complemento',
          xs: 12,
          name: 'complement'
        },

        {
          label: 'Cidade',
          xs: 9,
          name: 'city'
        },

        {
          label: 'Estado',
          xs: 3,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          { ...field }
          key={ field.name }
          value={ addressState[field.name] }
          onChange={ handleChangeField }
          disabled={ fetchingCep }
        />
      ))}
    </Grid>
  );
}

function reducer (state, action) {
  console.log('action:', action);

  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.payload,
      error: null
    };
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [ action.payload.name ]: action.payload.value
    };
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.payload.error
    };
  }

  if (action.type === 'RESET') {
    return initialState;
  }

  return state;
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
};

FormAddress.propTypes = {
  onUpdate: PropTypes.func
};

export default FormAddress;
