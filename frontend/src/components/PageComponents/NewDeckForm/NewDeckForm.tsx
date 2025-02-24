import { AsyncThunk } from '@reduxjs/toolkit';
import { DeckMock, NewDeckCredentials } from '../../../@types/deck';
import { newDeckFormFields } from '../../../constants/forms/authFormFields/newDeckFormFields';
import { createDeck } from '../../../store/actions/deckActions';
import { newDeckSchema } from '../../../validators/deckSchema';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';

import './NewDeckForm.css';

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
      reduxAction={
        createDeck as AsyncThunk<DeckMock, NewDeckCredentials, object>
      }
    />
  );
};

export default NewDeckForm;
