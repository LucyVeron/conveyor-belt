import { 
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { Item } from '../item';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {

  @Input() order: Item[];
}
