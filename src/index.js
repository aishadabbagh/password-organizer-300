import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const userEmails = [{
    ID: 1,
    Email : "Aisha.dabbagh@gmail.com",
    Website: [
    {site: "Facebook",
    pass:"1234"},

    {site: "Twitter",
    pass: "0000"},

    {site: "Google",
    pass :"4321"}] 
},
{   ID: 2,
    Email : "a.dabbagh@hotmail.com",
    Website: [

    {site: "Yahoo",
    pass: "kkkk"},

    {site: "Youtube",
    pass: "1234"}]
},
{   ID: 3,
    Email : "a.d@yahoo.com",
    Website: [

    {site: "Yahoo",
    pass: "kkkk"},

    {site: "Youtube", 
    pass:"4444"}] 
}
];

//Sending user_emails to app//
ReactDOM.render(
<App userEmails={userEmails}/>,
document.getElementById('root'));