import { useState } from 'react';
import uniqid from "uniqid";

function View (props) {
    let content = null;

    if (props.education.mode === 'Read') {
        content = (
            <div id={props.education.id}>
                <div className='view_school'>
                    <p className='desc'>School</p>
                    <p>{props.education.school}</p>
                </div>
                <div className='view_title'>
                    <p className='desc'>Title</p>
                    <p>{props.education.title}</p>
                </div>
                <div className='view_edu_date'>
                    <p className='desc'>Date</p>
                    <p>{props.education.date}</p>
                </div>
                <button className='modi_edu' onClick={props.onChangeMode}>Update</button>
                <Delete deleteEdu={props.deleteEdu}></Delete>
            </div>
        )
    } else {
        content = <Update edu={props.education}
                          onChangeMode={props.onChangeMode}
                          handleSchoolChange={props.handleSchoolChange}
                          handleTitleChange={props.handleTitleChange}
                          handleEduDateChange={props.handleEduDateChange}>
        </Update>
    }
    return content;
}

function Update (props) {
    let school = props.edu.school;
    let title = props.edu.title;
    let date = props.edu.date;

    return (
        <form id={props.edu.id}>
            <div className='form_school'>
                <label className='desc' htmlFor='school'>School</label>
                <input type='text' name='school' className='form_school' value={school} onChange={props.handleSchoolChange} placeholder='A School' />
            </div>
            <div className='form_title'>
                <label className='desc' htmlFor='title'>Title</label>
                <input type='text' name='title' className='form_title' value={title} onChange={props.handleTitleChange} placeholder='Web Programming' />
            </div>
            <div className='form_edu_date'>
                <label className='desc' htmlFor='date'>Date</label>
                <input type='date' name='date' className='form_edu_date' value={date} onChange={props.handleEduDateChange} placeholder='2023-03-02' />
            </div>
            <button type='submit' className='update_edu' onClick={props.onChangeMode}>Update</button>
        </form>
    )
}
function Delete (props) {
    return (
        <button className='delete_edu' onClick={props.deleteEdu}>Delete</button>
    )
}
function Education (props) {
    const [edus, setEdus] = useState([{
        id: uniqid(),
        school: '',
        title: '',
        date: '',
        mode: 'Read'
    }]);
    let content = null;

    const handleSchoolChange = (e) => {
        let newEdus = [...edus];
        let index = newEdus.findIndex((edu) => { return edu.id === e.target.parentNode.parentNode.id; });
        let newEdu = newEdus[index];

        newEdu.school = e.target.value;
        newEdus[index] = newEdu;

        setEdus(newEdus);
    }
    const handleTitleChange = (e) => {
        let newEdus = [...edus];
        let index = newEdus.findIndex((edu) => { return edu.id === e.target.parentNode.parentNode.id; });
        let newEdu = newEdus[index];

        newEdu.title = e.target.value;
        newEdus[index] = newEdu;

        setEdus(newEdus);
    }
    const handleEduDateChange = (e) => {
        let newEdus = [...edus];
        let index = newEdus.findIndex((edu) => { return edu.id === e.target.parentNode.parentNode.id; });
        let newEdu = newEdus[index];

        newEdu.date = e.target.value;
        newEdus[index] = newEdu;

        setEdus(newEdus);
    }
    const createEdu = (e) => {
        e.preventDefault();

        setEdus(edus.concat({
            id: uniqid(),
            school: '',
            title: '',
            date: '',
            mode: 'Update',
        }));
    }

    const deleteEdu = (e) => {
        e.preventDefault();

        setEdus(edus.filter((edu) => {
            return edu.id !== e.target.parentNode.id;
        }));
    }

    const onChangeMode = (e) => {
        e.preventDefault();
        let newEdus = [...edus];
        let index = newEdus.findIndex((edu) => { return edu.id === e.target.parentNode.id; });
        let newEdu = newEdus[index];

        if (newEdu.mode === 'Update')
            newEdu.mode = 'Read';
        else
            newEdu.mode = 'Update';
        newEdus[index] = newEdu;

        setEdus(newEdus);
    }

    return (
        <div id='edu'>
            <h2>Education</h2>
            <hr />
            <ul>
                {edus.map((edu) =>
                    <li key={edu.id}>
                        <View education={edu}
                              onChangeMode={onChangeMode}
                              handleSchoolChange={handleSchoolChange}
                              handleTitleChange={handleTitleChange}
                              handleEduDateChange={handleEduDateChange}
                              deleteEdu={deleteEdu}>
                        </View>
                    </li>
                )}
            </ul>
            <p><button className='add_edu' onClick={createEdu}>Add Education</button></p>
        </div>
    )
}

export default Education;