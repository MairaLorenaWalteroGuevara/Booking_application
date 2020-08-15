import { ModalController } from '@ionic/angular';
import { ModalOptions, CalendarModalOptions } from './calendar.model';
import { CalendarService } from './services/calendar.service';
import * as ɵngcc0 from '@angular/core';
export declare class CalendarController {
    modalCtrl: ModalController;
    calSvc: CalendarService;
    constructor(modalCtrl: ModalController, calSvc: CalendarService);
    /**
     * @deprecated
     * @param {CalendarModalOptions} calendarOptions
     * @param {ModalOptions} modalOptions
     * @returns {any}
     */
    openCalendar(calendarOptions: CalendarModalOptions, modalOptions?: ModalOptions): Promise<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CalendarController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CalendarController>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29udHJvbGxlci5kLnRzIiwic291cmNlcyI6WyJjYWxlbmRhci5jb250cm9sbGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBDYWxlbmRhck1vZGFsT3B0aW9ucyB9IGZyb20gJy4vY2FsZW5kYXIubW9kZWwnO1xuaW1wb3J0IHsgQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYWxlbmRhci5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhbGVuZGFyQ29udHJvbGxlciB7XG4gICAgbW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXI7XG4gICAgY2FsU3ZjOiBDYWxlbmRhclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IobW9kYWxDdHJsOiBNb2RhbENvbnRyb2xsZXIsIGNhbFN2YzogQ2FsZW5kYXJTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAqIEBwYXJhbSB7Q2FsZW5kYXJNb2RhbE9wdGlvbnN9IGNhbGVuZGFyT3B0aW9uc1xuICAgICAqIEBwYXJhbSB7TW9kYWxPcHRpb25zfSBtb2RhbE9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7YW55fVxuICAgICAqL1xuICAgIG9wZW5DYWxlbmRhcihjYWxlbmRhck9wdGlvbnM6IENhbGVuZGFyTW9kYWxPcHRpb25zLCBtb2RhbE9wdGlvbnM/OiBNb2RhbE9wdGlvbnMpOiBQcm9taXNlPHt9Pjtcbn1cbiJdfQ==