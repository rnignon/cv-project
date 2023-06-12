import { useState } from 'react';
import uniqid from "uniqid";

function View (props) {
    let content = null;
    const [mode, setMode] = useState('Read');

    if (mode === 'Read') {
        content = (
            <>
                <div id='view_name'>
                    <p>{props.name}</p>
                </div>
                <div id='view_email'>
                    <p>Email</p>
                    <p>{props.email}</p>
                </div>
                <div id='view_phone'>
                    <p>Phone</p>
                    <p>{props.phone}</p>
                </div>
                <button id='info_update' onClick={
                    () => { setMode('Update') }
                }>Update</button>
            </>
        )
    } else {
        content = <Update name={props.name} email={props.email} phone={props.phone} onChangeMode={e => {
            e.preventDefault();
            setMode('Read');}
        } handleNameChange={props.handleNameChange} handleEmailChange={props.handleEmailChange} handlePhoneChange={props.handlePhoneChange}></Update>
    }
    return content;
}

function Update(props) {
    return (
        <form id='info_update_form' onSubmit={props.onSubmit}>
            <div id='form_name'>
                <input type='text' name='name' id='info_name' value={props.name}onChange={props.handleNameChange} placeholder='Minhyeong Kim' />
            </div>
            <div id='form_email'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='info_email' value={props.email} onChange={props.handleEmailChange} placeholder='rnignon@naver.com' /><br />
            </div>
            <div id='form_phone'>
                <label htmlFor='phone'>Phone</label>
                <input type='phone' name='phone' id='info_phone' value={props.phone} onChange={props.handlePhoneChange} placeholder='010-1234-5678' />
            </div>
            <button type='submit' className='info_modi' onClick={props.onChangeMode}>Update</button>
        </form>
    )
}
function Info (props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    let content = null;

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }
    return (
        <div id='info'>
            <View name={name} email={email} phone={phone}
                  handleNameChange={handleNameChange}
                  handleEmailChange={handleEmailChange}
                  handlePhoneChange={handlePhoneChange}></View>
        </div>
    );
}

export default Info;