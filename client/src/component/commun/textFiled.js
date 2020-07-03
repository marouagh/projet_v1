import React from 'react';
import classnames from 'classnames';
import propsTypes from 'props-types'

export default function textFiled({
    name,placeholder,value,
    label,error,info,type,onChange,
    disabled
}) {
    return (
        <div className="form-group">
        <input
          type={type}
          className={classnames={"form-control form-control-lg":{'is-invalid':error}}}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
        {error&&<div className='invalid-feedback'>{error}</div>}

        {info&&<small className='form-text text_muted'>{info}</small>}
      </div>
    )}
    textFiled.propsTypes={
        name:propsTypes.string.isRequired,
        value:propsTypes.string.isRequired,
        placeholder:propsTypes.string,
        onChange:propsTypes.func.isRequired,
        disabled:propsTypes.string,
        info:propsTypes.string,
        error:propsTypes.string,
        onChange:propsTypes.string.isRequired,


    }
    textFiled.defaultProps={
        type:"text"
    }


