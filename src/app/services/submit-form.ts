import { Service } from '@angular/core';

@Service()
export class SubmitForm {
  submitDataForBackend(data: string) {
    console.log("Sending for backend...");
  }
}
