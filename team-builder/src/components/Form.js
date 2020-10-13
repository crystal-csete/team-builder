
import React from 'react'


export default function Form(props) {

    const { values, update, submit } = props;
    
    const onChange = (event) => {
        const { name, value } = event.target;

        update(name, value);
    };

    const onSubmit = (event) => {

        event.preventDefault();

        submit();
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label className="label-placeholder">
                    Username
                    <input 
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={values.username}
                    placeholder="username goes here"
                    max-maxLength="50"
                    />
                </label>
                <label className="label-placeholder">
                    Email
                    <input 
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={values.email}
                    placeholder="email goes here"
                    max-maxLength="50"
                    />
                </label>
              </div>
            <div className="submit">
                <button>Submit</button>
          </div>
        </form>
    )
}
