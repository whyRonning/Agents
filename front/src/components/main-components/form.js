import React from "react";
import "../../css/App.css";
import {Field, reduxForm} from "redux-form";
import {Input} from "../input";
import {PhoneValidator, required} from "../../store/validates";

export let Form = React.memo(props => {
    const { handleSubmit} = props;
    return (
        <div className="MainFifth-write">
            <h2>Мы с радостью готовы ответить на ваши вопросы</h2>
            <form method="post" onSubmit={handleSubmit}>
                    <Field placeholder="Имя" name="name" component={Input}  validate={[required]} type="text" />
                    <Field placeholder="Телефон" name="phone" validate={[required,PhoneValidator]} component={Input } type="number" />
                    <Field placeholder="Почта" name="email" validate={[required]} component={Input} type="email" />

                    <Field placeholder="Сообщение (если необходимо)" name="message" component="textarea" type="text" />
                <br/>
                    <Field className="agree" required type="checkbox" name="flag " component={Input} checked />

                <label>Даю согласие на обработку моих персональных данных</label>
                <br/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
});
Form = reduxForm({
    // a unique name for the form
    form: 'contact'
})(Form);
