'use client';
import { useForm } from 'react-hook-form';

export default function Envoicontact() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      nom: '',
    },
  });

  const watchedPassword = watch('password');

  // Fonction de soumission du formulaire qui récupère les valeurs et les affiche dans la console
  const sendMail = () => {
    const data = getValues();

    const templateParams = {
      name: data.nom,
      email: data.email,
      subject: data.objet,
      message: data.message,
    };

    emailjs
      .send(
        'service_ak3se6g', // Service ID
        'template_ariny4e', // Template ID
        templateParams,
        'WvRKJxpdK5zGfFtID' //USER PUBLIC KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit(sendMail)}
        className="flex gap-4 flex-col min-w-96"
      >
        <label className="flex gap-2 flex-col">
          Nom:
          <input
            {...register('nom', {
              required: 'Champ obligatoire',
            })} // Ajout de l'attribut nom
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.nom && (
            <span className="text-red-500 text-xs">{errors.nom.message}</span>
          )}
        </label>
        <label className="flex gap-2 flex-col">
          Email:
          <input
            {...register('email', {
              required: 'Champ obligatoire',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Adresse email invalide',
              },
            })} // Ajout de l'attribut email
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </label>
        <label className="flex gap-2 flex-col">
          Objet:
          <input
            {...register('objet')} // Ajout de l'attribut objet
            type="text"
            className="border-2 rounded-lg p-2"
          />
        </label>
        <label className="flex gap-2 flex-col">
          Message:
          <textarea
            {...register('message')} // Ajout de l'attribut message
            type="text"
            className="border-2 rounded-lg p-2"
            rows={5}
          />
        </label>
        <label className="flex gap-2 flex-col">
          Mot de passe:
          <input
            {...register('password', {
              required: 'Champ obligatoire',
              minLength: {
                value: 8,
                message: 'Minimum 8 caractères',
              },
            })} // Ajout de l'attribut password
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </label>

        <label className="flex gap-2 flex-col">
          Confirmer mot de passe:
          <input
            {...register('rePassword', {
              required: 'Champ obligatoire',
              minLength: {
                value: 8,
                message: 'Minimum 8 caractères',
              },
              validate: (value) =>
                value === watchedPassword ||
                'Les mots de passe ne correspondent pas',
            })} // Ajout de l'attribut rePassword
            type="text"
            className="border-2 rounded-lg p-2"
          />
          {
            // Affichage du message d'erreur
            errors.rePassword && (
              <span className="text-red-500 text-xs">
                {errors.rePassword.message}
              </span>
            )
          }
        </label>

        <div className="flex justify-center gap-4 my-8">
          <input
            type="submit"
            value="Envoyer"
            className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
          />
          <input
            type="button"
            value="Annuler"
            className="bg-blue-600 text-white rounded-lg p-2 cursor-pointer hover:bg-blue-700"
          />
        </div>
      </form>
    </div>
  );
}
