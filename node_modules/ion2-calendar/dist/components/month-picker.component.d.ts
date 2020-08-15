import { EventEmitter } from '@angular/core';
import { CalendarMonth } from '../calendar.model';
import * as ɵngcc0 from '@angular/core';
export declare class MonthPickerComponent {
    month: CalendarMonth;
    color: string;
    select: EventEmitter<number>;
    _thisMonth: Date;
    _monthFormat: string[];
    monthFormat: string[];
    constructor();
    _onSelect(month: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MonthPickerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MonthPickerComponent, "ion-calendar-month-picker", never, { "color": "color"; "monthFormat": "monthFormat"; "month": "month"; }, { "select": "select"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJtb250aC1waWNrZXIuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYWxlbmRhck1vbnRoIH0gZnJvbSAnLi4vY2FsZW5kYXIubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTW9udGhQaWNrZXJDb21wb25lbnQge1xuICAgIG1vbnRoOiBDYWxlbmRhck1vbnRoO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgc2VsZWN0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBfdGhpc01vbnRoOiBEYXRlO1xuICAgIF9tb250aEZvcm1hdDogc3RyaW5nW107XG4gICAgbW9udGhGb3JtYXQ6IHN0cmluZ1tdO1xuICAgIGNvbnN0cnVjdG9yKCk7XG4gICAgX29uU2VsZWN0KG1vbnRoOiBudW1iZXIpOiB2b2lkO1xufVxuIl19