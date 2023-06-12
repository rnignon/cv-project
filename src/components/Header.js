import { useState } from "react";

function Header () {
    return (
        <header>
            CV Maker
            <div id='hide'>
                <p onClick={e => {
                    e.preventDefault();
                    document.querySelectorAll('button').forEach((e) => {
                        if (e.style.display === 'none') {
                            e.style.display = 'inline-block';
                        } else {
                            e.style.display = 'none';
                        }
                    })
                }}>Hide buttons</p>
            </div>
        </header>
    )
}
export default Header;