import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import { AMOUNT_OF_ELEMENT } from './constants/pagination.constant';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit, OnDestroy {
  @Output() public onChangePage: EventEmitter<number> = new EventEmitter<number>();
  @Output() public onChangeNumberOfElement: EventEmitter<number> = new EventEmitter<number>();
  @Input() public amountOfPages: number;
  @Input() public activePage: number = 1;
  @Input() public resetPage: Subject<void>
  @Input() public amountItems: number;

  public amountOfElements: ISelect[] = AMOUNT_OF_ELEMENT;
  public elementControl: FormControl = new FormControl('100');
  private destroy$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.onChangeNumberOfElement.emit(+this.elementControl.value);
    this.resetPage && this.resetPage.pipe(
      takeUntil(this.destroy$),
    ).subscribe(() => {
      this.activePage = 1;
      this.onChangePage.emit(this.activePage);
    });

    this.elementControl.valueChanges.pipe(
      takeUntil(this.destroy$),
    ).subscribe((value) => {
      this.onChangeNumberOfElement.emit(+value);
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public get pages(): number[] {
    const range = (start, stop) => Array(Math.ceil((stop - start))).fill(start).map((x, y) => x + y);

    if (this.maxPage < 4) {
      return range(1, this.maxPage + 1)
    }

    if (this.activePage + 4 > this.maxPage) {
      return range(this.maxPage - 3, this.maxPage + 1);
    }

    return range(this.activePage, this.activePage + 4);
  }

  public changePage(page: number): void {
    this.activePage = page;
    this.onChangePage.emit(page);
  }

  public get maxPage(): number {
    return Math.ceil(this.amountItems / +this.elementControl.value);
  }

  public get showingItems(): string {
    const elements = +this.elementControl.value;
    const items = this.activePage * elements;

    return `${items - elements + 1} to ${this.amountItems > +this.elementControl.value && this.maxPage !== this.activePage ? items : this.amountItems}`;
  }

  public previous(): void {
    if (this.activePage === 1) return;

    this.activePage -= 1;
    this.onChangePage.emit(this.activePage);
  }

  public next(): void {
    if (this.activePage === this.maxPage) return;

    this.activePage += 1;
    this.onChangePage.emit(this.activePage);
  }

  public firstPage(): void {
    this.activePage = 1;
    this.onChangePage.emit(this.activePage);
  }

  public lastPage(): void {
    this.activePage = this.maxPage;
    this.onChangePage.emit(this.activePage);
  }
}
