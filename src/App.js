import * as React from "react";
import {Route} from "react-router-dom";
import {Admin, CustomRoutes, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

import {MyLayout} from "./components/Layout";
import {AverageComponent, DoctorEdit, DoctorList, PopularComponent, ReturnComponent} from "./components";
import { createTheme } from '@mui/material/styles';

const dataProvider = jsonServerProvider('http://practice-back.igliya.ru/api/v1');
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const theme = createTheme({
    palette: {
      primary: {
        main: '#6174d1'
      },
      secondary: {
        light: '#6174d1',
        main: '#6174d1',
        contrastText: '#ffffff',
      }
    }
  });

const App = () => {
    return (
        <Admin disableTelemetry
               theme={theme}
               layout={MyLayout}
               dataProvider={dataProvider}
               i18nProvider={i18nProvider}>
            <Resource name="doctors"
                      list={DoctorList}
                      edit={DoctorEdit}/>
            <CustomRoutes>
                <Route path="/average" element={<AverageComponent/>}/>
                <Route path="/popular" element={<PopularComponent/>}/>
                <Route path="/returns" element={<ReturnComponent/>}/>
            </CustomRoutes>
        </Admin>
    );
}

export default App;
