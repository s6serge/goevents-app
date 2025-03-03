'use client';
import { useForm } from "react-hook-form";

// Niveau 1 : Composants d'interface utilisateur (UI)

/**
 * Composant FormInput
 * Affiche un champ input avec un label et gère l'affichage des erreurs.
 * @param {string} label - Le texte du label.
 * @param {function} register - La fonction d'enregistrement de react-hook-form.
 * @param {string} name - Le nom du champ.
 * @param {object} validation - Les règles de validation du champ.
 * @param {object} error - L'objet d'erreur associé au champ.
 */
const FormInput = ({ label, register, name, validation, error }) => (
    <label className="flex gap-2 flex-col text-light-text dark:text-gray-200">
        {label}:
        <input
            {...register(name, validation)}
            type="text"
            className="border-2 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700 
                     dark:text-white dark:placeholder-gray-400"
        />
        {error && (
            <span className="text-red-500 text-xs">{error.message}</span>
        )}
    </label>
);

/**
 * Composant FormTextArea
 * Affiche un champ textarea avec un label.
 * @param {string} label - Le texte du label.
 * @param {function} register - La fonction d'enregistrement de react-hook-form.
 * @param {string} name - Le nom du champ.
 */
const FormTextArea = ({ label, register, name }) => (
    <label className="flex gap-2 flex-col text-light-text dark:text-gray-200">
        {label}:
        <textarea
            {...register(name)}
            type="text"
            className="border-2 rounded-lg p-2 dark:bg-gray-800 dark:border-gray-700 
                     dark:text-white dark:placeholder-gray-400"
            rows={5}
        />
    </label>
);

// Niveau 2 : Composants de section

/**
 * Composant FormFields
 * Regroupe plusieurs champs de formulaire avec leurs validations respectives.
 * @param {function} register - La fonction d'enregistrement de react-hook-form.
 * @param {object} errors - Les erreurs de validation pour chaque champ.
 * @param {function} watch - La fonction pour surveiller la valeur des champs.
 */
const FormFields = ({ register, errors, watch }) => (
    <div className="space-y-4">
        <FormInput
            label="Nom"
            register={register}
            name="nom"
            validation={{ required: 'Champ obligatoire' }}
            error={errors.nom}
        />
        <FormInput
            label="Email"
            register={register}
            name="email"
            validation={{
                required: 'Champ obligatoire',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Adresse email invalide',
                },
            }}
            error={errors.email}
        />
        <FormInput
            label="Objet"
            register={register}
            name="objet"
        />
        <FormTextArea
            label="Message"
            register={register}
            name="message"
        />
        <FormInput
            label="Mot de passe"
            register={register}
            name="password"
            validation={{
                required: 'Champ obligatoire',
                minLength: {
                    value: 8,
                    message: 'Minimum 8 caractères',
                },
            }}
            error={errors.password}
        />
        <FormInput
            label="Confirmer mot de passe"
            register={register}
            name="rePassword"
            validation={{
                required: 'Champ obligatoire',
                minLength: {
                    value: 8,
                    message: 'Minimum 8 caractères',
                },
                validate: (value) =>
                    value === watch('password') ||
                    'Les mots de passe ne correspondent pas',
            }}
            error={errors.rePassword}
        />
    </div>
);

// Niveau 3 : Composant d'actions

/**
 * Composant FormActions
 * Affiche les boutons pour soumettre ou annuler le formulaire.
 */
const FormActions = () => (
    <div className="flex justify-center gap-4 my-8">
        <input
            type="submit"
            value="Envoyer"
            className="bg-light-primary dark:bg-accent text-white rounded-lg p-2 
                     cursor-pointer hover:bg-light-primary/90 dark:hover:bg-accent/80"
        />
        <input
            type="button"
            value="Annuler"
            className="bg-gray-200 dark:bg-accent/20 text-gray-700 dark:text-accent 
                     rounded-lg p-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-accent/30"
        />
    </div>
);

// Niveau 4 : Composant principal

/**
 * Composant Envoicontact
 * Composant principal qui assemble le formulaire et gère sa soumission.
 */
export default function Envoicontact() {
    // Utilisation de react-hook-form pour gérer l'état et la validation du formulaire
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

    // Fonction de soumission du formulaire qui récupère les valeurs et les affiche dans la console
    const sendMail = () => {
        const data = getValues();
        console.log(data);
    };

    return (
        <div className="flex justify-center min-h-[80vh] items-center py-12">
            <form
                onSubmit={handleSubmit(sendMail)}
                className="flex gap-4 flex-col min-w-96 bg-white dark:bg-gray-800/50 
                          p-8 rounded-2xl border border-light-border dark:border-gray-700
                          shadow-lg dark:shadow-gray-900/30"
            >
                <FormFields register={register} errors={errors} watch={watch} />
                <FormActions />
            </form>
        </div>
    );
}
