import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { updateUI } from './js/results';
import { postData } from './js/sendDataToServer';

console.log(checkForName);

export { checkForName, handleSubmit, updateUI, postData };
