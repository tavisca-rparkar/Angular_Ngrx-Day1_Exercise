import { Component, OnInit } from '@angular/core';
import { CommunicatorService } from 'src/app/services/app.communicator.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchedData: string;
  constructor(private communicatorservice: CommunicatorService) { }

  ngOnInit(): void {
  }

  getSearchedData() {
    this.communicatorservice.getSearchedData(this.searchedData);
  }

}
