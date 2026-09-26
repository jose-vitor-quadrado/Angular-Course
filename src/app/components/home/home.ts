import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { SubmitForm } from '../../services/submit-form';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private submitFormService = inject(SubmitForm)
  myBoolean = false;
  name = "Audemir";
  idButton = 1;
  shouldShowTitle = false;
  listItems = ["Monkey", "Dart", "Balloon"]
  listObjects = [
    {
      id: "1",
      name: "Monkey"
    },
    {
      id: "2",
      name: "Dart"
    },
    {
      id: "3",
      name: "Balloon"
    }
  ];

  @Input("name") myOutsideProperty!: string;

  @Output() sendingNameValue = new EventEmitter<string>();

  updateBoolean(value: boolean) {
    this.myBoolean = value;
  }

  submit() {
    this.sendingNameValue.emit(this.name);
    this.submitFormService.submitDataForBackend("Sending data...");
  }
}
