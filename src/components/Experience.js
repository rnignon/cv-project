import { useState } from 'react';
import uniqid from "uniqid";

function View (props) {
    let content = null;
    const [mode, setMode] = useState('Read');

    if (props.experience.mode === 'Read') {
        content = (
            <div id={props.experience.id}>
                <div className='view_company'>
                    <p className='desc'>Company</p>
                    <p>{props.experience.company}</p>
                </div>
                <div className='view_position'>
                    <p className='desc'>Position</p>
                    <p>{props.experience.position}</p>
                </div>
                <div className='view_exp_date'>
                    <p className='desc'>Date</p>
                    <p>{props.experience.date}</p>
                </div>
                <button className='modi_exp' onClick={props.onChangeMode}>Update</button>
                <Delete deleteExp={props.deleteExp}></Delete>
            </div>
        )
    } else {
        content = <Update exp={props.experience}
                          onChangeMode={props.onChangeMode}
                          handleCompanyChange={props.handleCompanyChange}
                          handlePositionChange={props.handlePositionChange}
                          handleExpDateChange={props.handleExpDateChange}>
        </Update>
    }
    return content;
}

function Update (props) {
    let company = props.exp.company;
    let position = props.exp.position;
    let date = props.exp.date;

    return (
        <form id={props.exp.id}>
            <div className='form_company'>
                <label className='desc' htmlFor='company'>Company</label>
                <input type='text' name='company' className='form_company' value={company} onChange={props.handleCompanyChange} placeholder='B Company' />
            </div>
            <div className='form_position'>
                <label className='desc' htmlFor='position'>Position</label>
                <input type='text' name='position' className='form_position' value={position} onChange={props.handlePositionChange} placeholder='Web BackEnd' />
            </div>
            <div className='form_exp_date'>
                <label className='desc' htmlFor='date'>Date</label>
                <input type='date' name='date' className='form_exp_date' value={date} onChange={props.handleExpDateChange} placeholder='2023-01-01' />
            </div>
            <button type='submit' className='update_exp' onClick={props.onChangeMode}>Update</button>
        </form>
    )
}
function Delete (props) {
    return (
        <button className='delete_exp' onClick={props.deleteExp}>Delete</button>
    );
}
function Experience (props) {
    const [exps, setExps] = useState([{
        id : uniqid(),
        company: '',
        position: '',
        date: '',
        mode: 'Read'
    }]);
    let content = null;

    const handleCompanyChange = (e) => {
        let newExps = [...exps];
        let index = newExps.findIndex((exp) => { return exp.id === e.target.parentNode.parentNode.id; });
        let newExp = newExps[index];

        newExp.company = e.target.value;
        newExps[index] = newExp;

        setExps(newExps);
    }
    const handlePositionChange = (e) => {
        let newExps = [...exps];
        let index = newExps.findIndex((exp) => { return exp.id === e.target.parentNode.parentNode.id; });
        let newExp = newExps[index];

        newExp.position = e.target.value;
        newExps[index] = newExp;

        setExps(newExps);
    }
    const handleExpDateChange = (e) => {
        let newExps = [...exps];
        let index = newExps.findIndex((exp) => { return exp.id === e.target.parentNode.parentNode.id; });
        let newExp = newExps[index];

        newExp.date = e.target.value;
        newExps[index] = newExp;

        setExps(newExps);
    }
    const createExp = (e) => {
        e.preventDefault();

        setExps(exps.concat({
            id : uniqid(),
            company: '',
            position: '',
            date: ''
        }));
    }
    const deleteExp = (e) => {
        e.preventDefault();

        setExps(exps.filter((exp) => {
            return exp.id !== e.target.parentNode.id;
        }));
    }

    const onChangeMode = (e) => {
        e.preventDefault();
        let newExps = [...exps];
        let index = newExps.findIndex((exp) => { return exp.id === e.target.parentNode.id; });
        let newExp = newExps[index];

        if (newExp.mode === 'Read')
            newExp.mode = 'Update';
        else
            newExp.mode = 'Read';
        newExps[index] = newExp;

        setExps(newExps);
    }

    return (
        <div id='exp'>
            <h2>Experience</h2>
            <hr />
            <ul>
                {exps.map((exp) =>
                    <li key={exp.id}>
                        <View experience={exp}
                              onChangeMode={onChangeMode}
                              handleCompanyChange={handleCompanyChange}
                              handlePositionChange={handlePositionChange}
                              handleExpDateChange={handleExpDateChange}
                              deleteExp={deleteExp}>
                        </View>
                    </li>
                )}
            </ul>
            <p><button className='add_exp' onClick={createExp}>Add Experience</button></p>
        </div>
    )
}

export default Experience;
