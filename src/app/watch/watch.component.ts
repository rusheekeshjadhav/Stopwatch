import { Component } from "@angular/core";
import { SprintLap } from "../sprint/sprint.component";
import { WatchService } from "../watch.service";

@Component({
    selector: 'watch-main',
    templateUrl: './watch.component.html',
    providers: [WatchService]
})
export class StopWatch {

    constructor(public ws : WatchService){}

}