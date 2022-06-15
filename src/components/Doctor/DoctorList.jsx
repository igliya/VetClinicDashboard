import React from 'react';
import {Datagrid, List, NumberField, TextField, Title} from "react-admin";

const DoctorList = () => {
    return <>
        <List exporter={false} actions={false} title={<Title title="Врачи"/>}>
            <Datagrid rowClick="edit" bulkActionButtons={false}>
                <NumberField source="id" label="ID"/>
                <TextField source="username" label="Логин"/>
                <TextField source="last_name" label="Фамилия"/>
                <TextField source="first_name" label="Имя"/>
                <TextField source="patronymic" label="Отчество"/>
                {/* <TextField source="phone" label="Номер телефона"/> */}
            </Datagrid>
        </List>
    </>;
};

export default DoctorList;
