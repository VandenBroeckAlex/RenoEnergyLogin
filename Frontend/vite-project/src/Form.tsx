import  { useState } from 'react';
import { IoPersonAddSharp } from "react-icons/io5"
import { LiaCashRegisterSolid } from "react-icons/lia";

const RegistrationForm = () => 
    {const [role, setRole] = useState<'merchant' | 'agent' >('merchant');
return (

        <div className='form'>
            <h2>Create an account</h2>
                <div>
                <button className={role === 'merchant' ? 'active' : ''}  onClick={() => setRole('merchant')}><LiaCashRegisterSolid /> Merchant </button>
                <button className={role === 'agent' ? 'active' : ''} onClick={() => setRole('agent')}> <IoPersonAddSharp/>Agent</button>
                </div>

        {role && (
                
                
                <>
                {role === 'merchant' && (
                <>
                <form id="register" action="http://localhost:8000/submitMerchant" method="post">
                    <input type='text' name="FirstName" placeholder='First Name' />
                    <br />
                    <input type="text" list="Location" name="Location" placeholder="Where is your company based?" />
                    <datalist id="Location">
                        <option value="USA"></option>
                        <option value="UK"></option>
                        <option value="Germany"></option>
                        <option value="France"></option>
                    </datalist>
                    <br />
                    <input type='text' name="CompanyName" placeholder='Company Name' />
                    <br />
                    <input type='text' name="Email" placeholder='Business E-mail' />
                <br />
                <input type='list' list="Industry" name="Industry" placeholder='Select an industry' />
                <datalist id="Industry">
                    <option value="Tech" />
                    <option value="Retail" />
                    <option value="Finance" />
                    <option value="Health" />
                </datalist>
                <br />
                <input type='text' name="Phone" placeholder='Phone number' />
                <br />
                <input name="Password" type="Password" placeholder='Password' />
            
                <div className='checkbox-container'>
                    <input type="checkbox" name="Privacy" required />
                    <h6>I accept the <a href="./Policy.tsx" target="_blank">Privacy Policy</a></h6>
                </div>
                <button className ="submit_button" type="submit">Create an Account</button>
                </form>
                </>
                )}

                {role === 'agent' && (
                <>
                <form id="register" action="http://localhost:8000/submitAgent" method="post">
                    <input type='text' name="FirstName" placeholder='First Name' />
                    <br />
                    <input type='text' name="LastName" placeholder='Last Name' />
                    <br />
                    <input type='text' name="Email" placeholder='Business E-mail' />
                <br />
                <input type='list' list="Industry" name="Industry" placeholder='Select an industry' />
                <datalist id="Industry">
                    <option value="Tech" />
                    <option value="Retail" />
                    <option value="Finance" />
                    <option value="Health" />
                </datalist>
                <br />
                <input type='text' name="Phone" placeholder='Phone number' />
                <br />
                <input name="Password" type="Password" placeholder='Password' />
            
                <div className='checkbox-container'>
                    <input type="checkbox" name="Privacy" required />
                    <h6>I accept the <a href="./Policy.tsx" target="_blank">Privacy Policy</a></h6>
                </div>
                <button className ="submit_button" type="submit">Create an Account</button>
                </form>
                </>
                )}

                
                </>
            
            )}
             <h5> Already have an account? <a href="https://static.wikia.nocookie.net/shrek/images/0/0d/Shrek_family.jpg/revision/latest/scale-to-width-down/1000?cb=20100604230800">Log in</a> </h5>
            </div>
    );
};

export default RegistrationForm;
