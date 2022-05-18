import * as React from "react";
import {Route} from "react-router-dom";
import {Admin, CustomRoutes, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import russianMessages from 'ra-language-russian';

import authProvider from "./AuthProvider";
import {MyLayout} from "./components/Layout";
import {AverageComponent, DoctorEdit, DoctorList, PopularComponent, ReturnComponent} from "./components";

const dataProvider = jsonServerProvider('http://practice-back.igliya.ru/api/v1');
const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

const App = () => {
    return (
        <Admin disableTelemetry
               layout={MyLayout}
               dataProvider={dataProvider}
               i18nProvider={i18nProvider}
               authProvider={authProvider}>
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
