import { DeckMock, NewDeckCredentials } from '../../../@types/deck';
import { newDeckFormFields } from '../../../constants/forms/authFormFields/newDeckFormFields';
import { newDeckSchema } from '../../../validators/deckSchema';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';

import './NewDeckForm.scss';

const NewDeckForm = () => {
  const isLoading = false;
  const error = null;
  return (
    <ReusableForm<NewDeckCredentials, DeckMock>
      title="Nouveau deck"
      formFields={newDeckFormFields}
      schemaValidation={newDeckSchema}
      submitButtonText={{
        loading: 'Création en cours',
        default: 'Créer le deck',
      }}
      isLoading={isLoading}
      message={{ error: error, success: null }}
      reduxAction={login as AsyncThunk<UserMock, LoginCredentials, object>}
    />
  );
};

export default NewDeckForm;
