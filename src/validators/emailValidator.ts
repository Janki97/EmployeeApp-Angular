import { FormControl, ValidatorFn } from '@angular/forms';

export function emailValidator(control: FormControl): { [key: string]: boolean} | null {

    if (!control.value.toString())
    {
        return { required: true };
    }

    const regexp = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
    return regexp.test( control.value.toString()) ?  null : { invalidEmail: true };
}
