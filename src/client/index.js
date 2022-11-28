import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/results.scss';

import { checkUrl } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';
import { updateUI } from './js/results';
import { postData } from './js/sendDataToServer';

export { checkUrl, handleSubmit, updateUI, postData };
