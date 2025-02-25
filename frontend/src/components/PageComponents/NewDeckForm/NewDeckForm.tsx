import { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeckMock, NewDeckCredentials } from '../../../@types/deck';
import { newDeckFormFields } from '../../../constants/forms/authFormFields/newDeckFormFields';
import { createDeck } from '../../../store/actions/deckActions';
import { newDeckSchema } from '../../../validators/deckSchema';
import { useAppSelector } from '../../../hooks/redux';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';

import './NewDeckForm.css';

/**
 *   Formulaire de création de deck utilisant `ReusableForm`
 *
 * - Prend en charge le typage des champs de formulaire : `NewDeckCredentials`, et des données de retour : `DeckMock`
 * - Prend en charge les champs de formulaire : `newDeckFormFields` (name, subject)
 * - Valide les entrées avec `newDeckSchema` (Zod)
 * - Exécute `createDeck` en tant qu'action Redux lorsqu'on soumet le formulaire
 * - Prend en charge le statut de chargement `isLoading` et affiche l'eventuel message d'erreur `error` ou de succès `success` (state deck)
 */

const NewDeckForm = () => {
  const { isLoading, isCreated, error, success } = useAppSelector(
    (state) => state.deck
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isCreated) {
      void navigate('/'); // todo : LS/ rediriger vers le deck créé (avec selectedDeck du state) ou le dashboard...
    }
  }, [isCreated, navigate]);
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
      message={{ error: error, success: success }}
      reduxAction={
        createDeck as AsyncThunk<DeckMock, NewDeckCredentials, object>
      }
    />
  );
};

export default NewDeckForm;
