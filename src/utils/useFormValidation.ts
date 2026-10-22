import { useState } from 'react';

// Hook reutilizable para validar formularios.
// Usa la validación nativa del navegador (required, minLength, maxLength,
// type="url"), así los mensajes visibles y la condición de envío siguen
// siempre las mismas reglas.
export default function useFormValidation(initialIsValid: boolean) {
  // Mensaje de error de cada campo, guardado por su atributo name
  const [errors, setErrors] = useState<Record<string, string>>({});
  // Si todo el formulario es válido; controla si el botón está habilitado
  const [isValid, setIsValid] = useState(initialIsValid);

  // Se llama en cada onChange: valida el campo y el formulario completo
  function validateField(input: HTMLInputElement): void {
    setErrors((state) => ({ ...state, [input.name]: input.validationMessage }));
    setIsValid(input.form ? input.form.checkValidity() : false);
  }

  // Se llama en el submit: devuelve true solo si el formulario es válido.
  // Si no lo es, muestra el mensaje de todos los campos inválidos.
  function validateForm(form: HTMLFormElement): boolean {
    const isFormValid = form.checkValidity();

    if (!isFormValid) {
      const formErrors: Record<string, string> = {};
      Array.from(form.elements).forEach((element) => {
        if (element instanceof HTMLInputElement) {
          formErrors[element.name] = element.validationMessage;
        }
      });
      setErrors(formErrors);
    }

    setIsValid(isFormValid);
    return isFormValid;
  }

  return { errors, isValid, validateField, validateForm };
}
