import { SelectOption } from './upsert-content.model';

export class ListContent<T> {
  content: T[];
  fields: ListField[] = [];
  totalPages: number;
  total: number;
  pageSize: number;
  currentPage: number;
  currentPageSize: number = 0;
  pages: number[] = [];
  first: boolean = false;
  last: boolean = false;

  constructor(listResponse: ListResponse<T>, fieldList: ListField[]) {
    this.content = listResponse.content;
    this.totalPages = listResponse.totalPages;
    this.total = listResponse.totalElements;
    this.pageSize = listResponse.size;
    this.currentPage = listResponse.number;
    this.currentPageSize = this.content.length;
    this.first = listResponse.first;
    this.last = listResponse.last;

    let firstPage = this.currentPage - 2 > 0 ? this.currentPage - 2 : 0;
    let lastPage =
      this.currentPage + 2 < this.totalPages
        ? this.currentPage + 2
        : this.totalPages - 1;
    for (let i = firstPage; i <= lastPage; i++) {
      this.pages.push(i);
    }

    this.fields = fieldList;
  }
}

export class ListItem {
  id: number = 0;
  [key: string]: any;
}

export interface ListField {
  name: string;
  label: string;
  pipe?: string;
}

export class ListResponse<T> {
  content: T[] = [];
  totalPages: number = 0;
  totalElements: number = 0;
  size: number = 0;
  number: number = 0;
  first: boolean = false;
  last: boolean = false;
}
