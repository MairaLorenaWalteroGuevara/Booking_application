import { ElementRef, ChangeDetectorRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';
import { CalendarDay, CalendarMonth, CalendarModalOptions } from '../calendar.model';
import { CalendarService } from '../services/calendar.service';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarModal implements OnInit, AfterViewInit {
    private _renderer;
    _elementRef: ElementRef;
    params: NavParams;
    modalCtrl: ModalController;
    ref: ChangeDetectorRef;
    calSvc: CalendarService;
    content: IonContent;
    monthsEle: ElementRef;
    ionPage: boolean;
    options: CalendarModalOptions;
    datesTemp: Array<CalendarDay>;
    calendarMonths: Array<CalendarMonth>;
    step: number;
    showYearPicker: boolean;
    year: number;
    years: Array<number>;
    _scrollLock: boolean;
    _d: CalendarModalOptions;
    actualFirstTime: number;
    constructor(_renderer: Renderer2, _elementRef: ElementRef, params: NavParams, modalCtrl: ModalController, ref: ChangeDetectorRef, calSvc: CalendarService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    init(): void;
    initDefaultDate(): void;
    findCssClass(): void;
    onChange(data: any): void;
    onCancel(): void;
    done(): void;
    canDone(): boolean;
    nextMonth(event: any): void;
    backwardsMonth(): void;
    scrollToDate(date: Date): void;
    scrollToDefaultDate(): void;
    onScroll($event: any): void;
    /**
     * In some older Safari versions (observed at Mac's Safari 10.0), there is an issue where style updates to
     * shadowRoot descendants don't cause a browser repaint.
     * See for more details: https://github.com/Polymer/polymer/issues/4701
     */
    repaintDOM(): Promise<void>;
    findInitMonthNumber(date: Date): number;
    _getDayTime(date: any): number;
    _monthFormat(date: any): string;
    trackByIndex(index: number, momentDate: CalendarMonth): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarModal, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CalendarModal, "ion-calendar-modal", never, { "options": "options"; }, {}, never, ["[sub-header]"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kYWwuZC50cyIsInNvdXJjZXMiOlsiY2FsZW5kYXIubW9kYWwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFJlbmRlcmVyMiwgT25Jbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZQYXJhbXMsIE1vZGFsQ29udHJvbGxlciwgSW9uQ29udGVudCB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENhbGVuZGFyRGF5LCBDYWxlbmRhck1vbnRoLCBDYWxlbmRhck1vZGFsT3B0aW9ucyB9IGZyb20gJy4uL2NhbGVuZGFyLm1vZGVsJztcbmltcG9ydCB7IENhbGVuZGFyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhbGVuZGFyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FsZW5kYXJNb2RhbCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI7XG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG4gICAgcGFyYW1zOiBOYXZQYXJhbXM7XG4gICAgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXI7XG4gICAgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcbiAgICBjYWxTdmM6IENhbGVuZGFyU2VydmljZTtcbiAgICBjb250ZW50OiBJb25Db250ZW50O1xuICAgIG1vbnRoc0VsZTogRWxlbWVudFJlZjtcbiAgICBpb25QYWdlOiBib29sZWFuO1xuICAgIG9wdGlvbnM6IENhbGVuZGFyTW9kYWxPcHRpb25zO1xuICAgIGRhdGVzVGVtcDogQXJyYXk8Q2FsZW5kYXJEYXk+O1xuICAgIGNhbGVuZGFyTW9udGhzOiBBcnJheTxDYWxlbmRhck1vbnRoPjtcbiAgICBzdGVwOiBudW1iZXI7XG4gICAgc2hvd1llYXJQaWNrZXI6IGJvb2xlYW47XG4gICAgeWVhcjogbnVtYmVyO1xuICAgIHllYXJzOiBBcnJheTxudW1iZXI+O1xuICAgIF9zY3JvbGxMb2NrOiBib29sZWFuO1xuICAgIF9kOiBDYWxlbmRhck1vZGFsT3B0aW9ucztcbiAgICBhY3R1YWxGaXJzdFRpbWU6IG51bWJlcjtcbiAgICBjb25zdHJ1Y3RvcihfcmVuZGVyZXI6IFJlbmRlcmVyMiwgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHBhcmFtczogTmF2UGFyYW1zLCBtb2RhbEN0cmw6IE1vZGFsQ29udHJvbGxlciwgcmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQ7XG4gICAgaW5pdCgpOiB2b2lkO1xuICAgIGluaXREZWZhdWx0RGF0ZSgpOiB2b2lkO1xuICAgIGZpbmRDc3NDbGFzcygpOiB2b2lkO1xuICAgIG9uQ2hhbmdlKGRhdGE6IGFueSk6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbiAgICBkb25lKCk6IHZvaWQ7XG4gICAgY2FuRG9uZSgpOiBib29sZWFuO1xuICAgIG5leHRNb250aChldmVudDogYW55KTogdm9pZDtcbiAgICBiYWNrd2FyZHNNb250aCgpOiB2b2lkO1xuICAgIHNjcm9sbFRvRGF0ZShkYXRlOiBEYXRlKTogdm9pZDtcbiAgICBzY3JvbGxUb0RlZmF1bHREYXRlKCk6IHZvaWQ7XG4gICAgb25TY3JvbGwoJGV2ZW50OiBhbnkpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEluIHNvbWUgb2xkZXIgU2FmYXJpIHZlcnNpb25zIChvYnNlcnZlZCBhdCBNYWMncyBTYWZhcmkgMTAuMCksIHRoZXJlIGlzIGFuIGlzc3VlIHdoZXJlIHN0eWxlIHVwZGF0ZXMgdG9cbiAgICAgKiBzaGFkb3dSb290IGRlc2NlbmRhbnRzIGRvbid0IGNhdXNlIGEgYnJvd3NlciByZXBhaW50LlxuICAgICAqIFNlZSBmb3IgbW9yZSBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NzAxXG4gICAgICovXG4gICAgcmVwYWludERPTSgpOiBQcm9taXNlPHZvaWQ+O1xuICAgIGZpbmRJbml0TW9udGhOdW1iZXIoZGF0ZTogRGF0ZSk6IG51bWJlcjtcbiAgICBfZ2V0RGF5VGltZShkYXRlOiBhbnkpOiBudW1iZXI7XG4gICAgX21vbnRoRm9ybWF0KGRhdGU6IGFueSk6IHN0cmluZztcbiAgICB0cmFja0J5SW5kZXgoaW5kZXg6IG51bWJlciwgbW9tZW50RGF0ZTogQ2FsZW5kYXJNb250aCk6IG51bWJlcjtcbn1cbiJdfQ==