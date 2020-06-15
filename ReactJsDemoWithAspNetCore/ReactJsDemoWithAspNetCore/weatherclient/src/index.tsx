import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

////------------Introduction to Component--------//////////
//Components are the building blocks of React application.
//Allow us to split the user interface in to independent and reuseable pieces.
//Component is combination of 3 things.(Template using html, User interactivity using JS, Applying styles using CSS).
//Any React application segrigated into different application.(Header Component, NavigationBar Component, Content Component, Footer Component).
//Conceptualy a component is a JS Class, That accept input as properties, returns react elements
//Component can be created as a function component, Or as a class component.
//Component name should start with capital letters.

//function DisplayEmployeeInfo(employee: any) {
var DisplayEmployeeInfo = (employee: any) => {
    return <div>
        <h1>Employee Details...</h1>
        <p>
            <label>Employee Id: <b>{employee.Id}</b></label>
        </p>
        <p>
            <label>Employee Name: <b>{employee.Name}</b></label>
        </p>
        <p>
            <label>Employee Location: <b>{employee.Location}</b></label>
        </p>
        <p>
            <label>Employee Salary: <b>{employee.Salary}</b></label>
        </p>

        <DepartmentInfo DptName={employee.DptName} DptHeadName={employee.DptHeadName} ></DepartmentInfo>
    </div>;
};

const DepartmentInfo = (dptinfo: any) => {
    return <div>
        <p>
            <label>Department Name: <b>{dptinfo.DptName}</b></label>
        </p>
        <p>
            <label>Department Head: <b>{dptinfo.DptHeadName}</b></label>
        </p>
    </div>;
};

const element = <DisplayEmployeeInfo Id="101" Name="Roshan" Location="Kurunegala" Salary="12345" DptName="UI dev" DptHeadName="Gunarathna"></DisplayEmployeeInfo>;
ReactDOM.render(element, document.getElementById("root"));