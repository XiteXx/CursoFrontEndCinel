import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthStateService } from '../../service/auth-state';
import { Router, RouterModule } from '@angular/router';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-forms',
  //Novo módulo para formulario
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

  //Variavel para receber criar formulario e capturar dados

  protected signInForms: UntypedFormGroup;

  constructor(protected authService: AuthStateService, protected router: Router, private fb: UntypedFormBuilder) {

    this.signInForms = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],

    });
  }

  onSubmit() {
if(!this.signInForms.valid) {
  //Mudar a rota pelo ts
  this.router.navigateByUrl("/form");
}

const localFormEmail = this.signInForms.get("email")?.value;
const localFormPassword = this.signInForms.get("password")?.value;
const localFormsComplete = this.signInForms.value;
console.log(`Dados do formulario passados individualmente:  Email: ${localFormEmail} e password: ${localFormPassword}`)
console.log(`Objeto: formulario completo: ${JSON.stringify(localFormsComplete)}`)
}

goBack = () => {
  //Mudar de rota pelo ts
  this.signInForms.reset();
  this.router.navigateByUrl("/")
}

}
