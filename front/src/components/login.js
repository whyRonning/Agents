import React from "react";
import {AlertContainer} from "./main-components/alertMessageContainer";
import {Field, reduxForm} from "redux-form";
import {Input} from "./input";

export let Login = props => {
  let {handleSubmit}=props;
  return (
      <section className="logFormBlock">
        <h2>Авторизация</h2>
        <form className="logForm" onSubmit={handleSubmit}>
          <Field name="login" type="text" placeholder="Логин" component={Input}/>
          <Field name="password" type="password" component={Input} placeholder="Пароль"/>
          <button type="submit">Войти</button>
          <AlertContainer/>
        </form>
      </section>
  );
};
Login=reduxForm({
  form:"login"
})(Login);
