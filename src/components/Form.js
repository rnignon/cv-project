import { useState } from 'react';
import Info from './Info';
import Education from './Education';
import Experience from './Experience';

function Form () {
    // Update or Read
    const [mode, setMode] = useState('Update');
    // Info or Edu or Exp
    const [target, setTarget] = useState('Info');

    let input = null;
    const edus = [];

    return (
        <div id='cv'>
            <Info mode={mode} target={target}></Info>
            <Education mode={mode} target={target}></Education>
            <Experience mode={mode} target={target}></Experience>
        </div>
    )
}

export default Form;