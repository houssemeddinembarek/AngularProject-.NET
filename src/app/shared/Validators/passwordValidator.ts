import { ValidatorFn, AbstractControl } from "@angular/forms";

export function PasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const passwordReg = new RegExp(/.*(?=^.{6,}$)(?=[^\d]*\d)(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z]).*/);

        if (!passwordReg.test(control.value)) {
            return { 'invalidPassword': true };
        }


        else {
            return null;

        }
    };
}