import { AsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { newCardFormFields } from '../../../constants/forms/cardFormFields/newCardFormFields';
import { CardMock, NewCardCredentials } from '../../../@types/card';
import { newCardSchema } from '../../../validators/cardSchema';
import { useAppSelector } from '../../../hooks/redux';
import { createCard } from '../../../store/actions/cardActions';
import ReusableForm from '../../Common/ReusableForm/ReusableForm';

import './NewCardForm.css';

/**
 *   Formulaire de création de card utilisant `ReusableForm`
 *
 * - Prend en charge le typage des champs de formulaire : `NewCardCredentials`, et des données de retour : `CardMock`
 * - Prend en charge les champs de formulaire : `newCardFormFields` (question, questionImg, answer, answerImg)
 * - Valide les entrées avec `newCardSchema` (Zod)
 * - Exécute `createCard` en tant qu'action Redux lorsqu'on soumet le formulaire
 * - Prend en charge le statut de chargement `isLoading` et affiche l'eventuel message d'erreur `error` ou de succès `success` (state card)
 */

const NewCardForm = () => {
  const { isLoading, isCreated, error, success } = useAppSelector(
    (state) => state.card
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isCreated) {
      void navigate('/'); // todo : LS/ rediriger vers le deck de la card (avec selectedDeck du state) ou le dashboard...
    }
  }, [isCreated, navigate]);
  return (
    <ReusableForm<NewCardCredentials, CardMock>
      title="Nouvelle carte"
      formFields={newCardFormFields}
      schemaValidation={newCardSchema}
      submitButtonText={{
        loading: 'Création en cours',
        default: 'Créer la card',
      }}
      isLoading={isLoading}
      message={{ error: error, success: success }}
      reduxAction={
        createCard as AsyncThunk<CardMock, NewCardCredentials, object>
      }
    />
  );
};

export default NewCardForm;
