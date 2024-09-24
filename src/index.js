import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobslist";


const userLocale = navigator.language || navigator.userLanguage;

// Seleccionar el conjunto de mensajes según el idioma del navegador
const messages = userLocale.startsWith('es') ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={userLocale} messages={messages}>
        <JobsList locale={userLocale} />
    </IntlProvider>, 
    document.getElementById("root")
);
