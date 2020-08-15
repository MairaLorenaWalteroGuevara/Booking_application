import { ChangeDetectorRef, EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CalendarDay, CalendarMonth, CalendarOriginal, PickMode } from '../calendar.model';
import * as ɵngcc0 from '@angular/core';
export declare const MONTH_VALUE_ACCESSOR: any;
export declare class MonthComponent implements ControlValueAccessor, AfterViewInit {
    ref: ChangeDetectorRef;
    month: CalendarMonth;
    pickMode: PickMode;
    isSaveHistory: boolean;
    id: any;
    readonly: boolean;
    color: string;
    change: EventEmitter<CalendarDay[]>;
    select: EventEmitter<CalendarDay>;
    selectStart: EventEmitter<CalendarDay>;
    selectEnd: EventEmitter<CalendarDay>;
    _date: Array<CalendarDay | null>;
    _isInit: boolean;
    _onChanged: Function;
    _onTouched: Function;
    readonly _isRange: boolean;
    constructor(ref: ChangeDetectorRef);
    ngAfterViewInit(): void;
    readonly value: CalendarDay[];
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    trackByTime(index: number, item: CalendarOriginal): number;
    isEndSelection(day: CalendarDay): boolean;
    isBetween(day: CalendarDay): boolean;
    isStartSelection(day: CalendarDay): boolean;
    isSelected(time: number): boolean;
    onSelected(item: CalendarDay): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthComponent, "ion-calendar-month", never, { "readonly": "readonly"; "color": "color"; "month": "month"; "pickMode": "pickMode"; "isSaveHistory": "isSaveHistory"; "id": "id"; }, { "change": "change"; "select": "select"; "selectStart": "selectStart"; "selectEnd": "selectEnd"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGguY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1vbnRoLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDYWxlbmRhckRheSwgQ2FsZW5kYXJNb250aCwgQ2FsZW5kYXJPcmlnaW5hbCwgUGlja01vZGUgfSBmcm9tICcuLi9jYWxlbmRhci5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBNT05USF9WQUxVRV9BQ0NFU1NPUjogYW55O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9udGhDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBtb250aDogQ2FsZW5kYXJNb250aDtcbiAgICBwaWNrTW9kZTogUGlja01vZGU7XG4gICAgaXNTYXZlSGlzdG9yeTogYm9vbGVhbjtcbiAgICBpZDogYW55O1xuICAgIHJlYWRvbmx5OiBib29sZWFuO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgY2hhbmdlOiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXlbXT47XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXk+O1xuICAgIHNlbGVjdFN0YXJ0OiBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJEYXk+O1xuICAgIHNlbGVjdEVuZDogRXZlbnRFbWl0dGVyPENhbGVuZGFyRGF5PjtcbiAgICBfZGF0ZTogQXJyYXk8Q2FsZW5kYXJEYXkgfCBudWxsPjtcbiAgICBfaXNJbml0OiBib29sZWFuO1xuICAgIF9vbkNoYW5nZWQ6IEZ1bmN0aW9uO1xuICAgIF9vblRvdWNoZWQ6IEZ1bmN0aW9uO1xuICAgIHJlYWRvbmx5IF9pc1JhbmdlOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkO1xuICAgIHJlYWRvbmx5IHZhbHVlOiBDYWxlbmRhckRheVtdO1xuICAgIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkO1xuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQ7XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQ7XG4gICAgdHJhY2tCeVRpbWUoaW5kZXg6IG51bWJlciwgaXRlbTogQ2FsZW5kYXJPcmlnaW5hbCk6IG51bWJlcjtcbiAgICBpc0VuZFNlbGVjdGlvbihkYXk6IENhbGVuZGFyRGF5KTogYm9vbGVhbjtcbiAgICBpc0JldHdlZW4oZGF5OiBDYWxlbmRhckRheSk6IGJvb2xlYW47XG4gICAgaXNTdGFydFNlbGVjdGlvbihkYXk6IENhbGVuZGFyRGF5KTogYm9vbGVhbjtcbiAgICBpc1NlbGVjdGVkKHRpbWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgb25TZWxlY3RlZChpdGVtOiBDYWxlbmRhckRheSk6IHZvaWQ7XG59XG4iXX0=