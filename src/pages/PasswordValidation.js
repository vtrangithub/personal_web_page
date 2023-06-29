import PasswordValidationOne from '../components/PasswordValidation/PasswordValidationOne';
import PasswordValidationTwo from '../components/PasswordValidation/PasswordValidationTwo';
import PasswordValidationThree from '../components/PasswordValidation/PasswordValidationThree';

import '../components/PasswordValidation/PasswordValidation.scss';


function PasswordValidation() {
  return <>
    <div className="rainbow-text">
      <h1> Password Validation</h1>
    </div>
    <div className="centered-content">
      <h2>Password Validation 1</h2>
    </div>
    <div className="centered-content">
      <p>The criteria:</p>
      <ul>
        <li>At least one digit</li>
        <li>One lowercase letter</li>
        <li>One uppercase letter</li>
        <li>A length between 6 and 20 characters</li>
      </ul>
    </div>
    <div>
      <PasswordValidationOne />
    </div>
    <br /> <hr />
    <div className="centered-content">
      <h2>Password Validation 2</h2>
    </div>
    <div className="centered-content">
      <p>The criteria:</p>
      <ul>
        <li>Minimum length of 8 characters.</li>
        <li>Contains at least one uppercase letter.</li>
        <li>Contains at least one lowercase letter.</li>
        <li>Contains at least one digit</li>
        <li>Contains at least one special character (e.g., !@#$%^&*)</li>
      </ul>
    </div>
    <div>
      <PasswordValidationTwo />
    </div>
    <br /><hr />
    <div className="centered-content">
      <h2>Password Validation 3</h2>
    </div>
    <div className="centered-content">
      <p>The criteria:</p>
      <ul>
        <li>Must contain at least 14 characters.</li>
        <li>Must contain at least one uppercase and one lowercase letter.</li>
        <li>Must contain at least one digit.</li>
        <li>Must contain at least two special characters from the set ~!@#$%^&*</li>
        <li>Must not contain an email address or domain.</li>
      </ul>
    </div>
    <div>
      <PasswordValidationThree />
    </div>

  </>
}

export default PasswordValidation;
