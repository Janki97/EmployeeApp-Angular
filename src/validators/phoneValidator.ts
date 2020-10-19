import { FormControl } from '@angular/forms';

export function phoneValidator(control: FormControl): { [key: string]: boolean} | null {

    if (!control.value.toString())
    {
        return { required: true };
    }

    const regexp = new RegExp(/^[6-9]\d{9}$/);
    return /^[6-9]\d{9}$/.test(control.value.toString()) ? null : { invalidPhone: true };
}
