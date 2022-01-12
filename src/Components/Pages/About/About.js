import React from 'react';
import { ChangeTitle } from '../../../titlechange/titlechange';

const About = () => {
    ChangeTitle("About us");
    return (
        <div>
            <h1>About us</h1>
        </div>
    );
};

export default About;