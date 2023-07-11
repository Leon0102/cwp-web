import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadService } from '@cwp/core/services';

@Component({
  selector: 'cwp-category-1-popup',
  templateUrl: './category-1-popup.component.html',
  styleUrls: ['./category-1-popup.component.scss'],
})
export class Category1PopupComponent implements OnInit {

  fileImage: any[] = [];

  imageUrl: any;

  newData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<Category1PopupComponent>,

    private uploadService: UploadService
  ) {}

  ngOnInit() {
    this.newData = Object.assign({}, this.data);
    this.fileImage = Array(this.newData.item.length).fill('');
  }

  handleFileInput(e: any, index: number): void {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('oldImage', this.newData.item[index].image);

    this.uploadService.uploadFile(formData).subscribe((res) => {
      console.log(res);
      this.newData.item[index].image = res.data;
    });
    this.fileImage[index] = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileImage[index]);
  }


  onChangeTitle(e: any, i: number): void {
    this.newData.item[i].title = e.target.value;
  }

  onChangeUrl(e: any, i: number): void {
    this.newData.item[i].url = e.target.value;
  }


  onChangeDescription(e: any, i: number): void {
    this.newData.item[i].description = e.target.value;
  }

  onSave(): void {
    this.dialogRef.close(this.newData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onRemoveItem(i: number): void {
    this.newData.item.splice(i, 1);
  }

  onAddItem(): void {
    this.newData.item.push({
      title: 'Title',
      url: 'Url',
      description: 'Description',
    });
  }
}
