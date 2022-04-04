import React, { createContext, useState } from 'react';
import merge from 'deepmerge';
import { Language } from './common/constants';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import messages_lt from './translations/lt.json';
import messages_en from './translations/en.json';
import messages_ua from './translations/ua.json';

const messages = new Map<Language, Record<string, any>>([
  [Language.Lithuanian, merge.all([messages_en, messages_lt])],
  [Language.English, messages_en],
  [Language.Ukrainian, merge.all([messages_en, messages_ua])],
]);

interface IProvidersContext {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const ProvidersContext = createContext<IProvidersContext>({
  language: Language.Lithuanian,
  setLanguage: () => {},
});

export const Providers: React.FC = ({ children }) => {
  const [language, setLanguage] = useState(Language.English);
  return (
    <ProvidersContext.Provider value={{ language, setLanguage }}>
      <IntlProvider locale={language} messages={messages.get(language)}>
        <BrowserRouter>{children}</BrowserRouter>
      </IntlProvider>
    </ProvidersContext.Provider>
  );
};
