import { Component, OnInit } from '@angular/core';
import { AlumniData } from './models/alumni-data';
import { AlumniService } from './shared/alumni.service';
import { MatDialog } from '@angular/material';
import { RequestAlumniComponent } from './request-alumni/request-alumni.component';


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {

  alumniData: AlumniData = new AlumniData()
  role = this.alumniData['role']
  alumniInfo = [];
  rowsOnPage: number = 5;
  search_Value: string;
  nav_tab_list = ["Search", "My Requests"];
  searchFlag: boolean = true;
  requestFlag: boolean = false;
  request_alumni = [];
  selectedCategoryIndex=0;
  request_alumni_result = [];
  flag: boolean;

  job_position = []
  experience = []
  academic_year = []
  specialization = []
  filterd_specialization = []
  filtered_academic_year = []
  cancel_filter: boolean = false
  filteredDataPara = []
  filtered_job_position = []
  filtered_experience = []

  apply_filter: boolean = true
  filteredList: string;
  alumnidetails = [];
  filter_on_job_position = [];
  filter_on_experience = [];
  filter_on_academic_year = [];
  filter_on_specialization = [];
  is_filtered_data: boolean=false;

  constructor(private alumniService: AlumniService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.alumniService.getAlumniInfo().subscribe((data) => {
      this.alumniInfo = data["tableDetails"];
      this.alumnidetails = data;
    });
  }

  selectedCategory(i) {
    this.selectedCategoryIndex = i;
    if (this.nav_tab_list[i] == "Search") {

      this.searchFlag = true
      this.requestFlag = false
    }
    else
      this.searchFlag = false;
    this.requestFlag = true
  }

  searchValue() {
    this.filteredList = this.search_Value;
  }

  clearSearch() {
    if (this.search_Value == "") {
      this.searchValue();
    }
  }

  //Request Alumni Popup---------------------
  requestAlumni() {
    this.flag = false;
    const dialogref = this.dialog.open(RequestAlumniComponent,
      {
        width: '600px',
        height:'fit-content',
        position: { top: '3%'},
        disableClose: true,
        data: {
          filtered_data:this.filter_on_specialization
        }
      })

    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.request_alumni_result.push(result["data"])
      }

    })
  }

  // Checkbox filter functions----------------------
  filterData() {
    const dialogref = this.dialog.open(RequestAlumniComponent,
      {
        width: '750px',
        height:"fit-content",
        position: {top:'6%'},
        disableClose: true,
        data: {
          flag: true,
          alumnidata: this.alumnidetails, dropdown_details: this.filteredDataPara
        }
      })
    dialogref.afterClosed().subscribe(result => {
      if (result) {
        this.is_filtered_data=true
        this.filter_on_job_position = []
        this.filter_on_experience = []
        this.filter_on_academic_year = []
        this.filter_on_specialization = []
        this.filtered_job_position = []
        this.filtered_experience = []
        this.filtered_academic_year = []
        this.filterd_specialization = []
        this.filteredDataPara = []
        this.filteredDataPara = result["data"];

        this.job_position = this.filteredDataPara["job_position"]
        this.experience = this.filteredDataPara["experience"]
        this.academic_year = this.filteredDataPara["academic_year"]
        this.specialization = this.filteredDataPara["specialization"]

        this.job_position.forEach(data => {
          if (data["checked"] == true)
            this.filtered_job_position.push(data["name"])
        })
        this.experience.forEach(data => {
          if (data["checked"] == true)
            this.filtered_experience.push(data["name"])
        })
        this.academic_year.forEach(data => {
          if (data["checked"] == true)
            this.filtered_academic_year.push(data["name"])
        })
        this.specialization.forEach(data => {
          if (data["checked"] == true)
            this.filterd_specialization.push(data["name"])
        })
        this.alumniInfo.forEach(data => {
          for (let i = 0; i < this.filtered_job_position.length; i++) {
            if (data["job_position"].includes(this.filtered_job_position[i])) {
              this.filter_on_job_position.push(data)
            }
          }
        })
        this.filter_on_job_position.forEach(data => {
          for (let i = 0; i < this.filtered_experience.length; i++) {
            if (data["experience"].includes(this.filtered_experience[i])) {
              this.filter_on_experience.push(data)
            }
          }
        })
        this.filter_on_experience.forEach(data => {
          for (let i = 0; i < this.filtered_academic_year.length; i++) {
            if (data["academic_year"].includes(this.filtered_academic_year[i])) {
              this.filter_on_academic_year.push(data)
            }
          }
        })
        this.filter_on_academic_year.forEach(data => {
          for (let i = 0; i < this.filterd_specialization.length; i++) {
            if (data["specialzation"].includes(this.filterd_specialization[i])) {
              this.filter_on_specialization.push(data)
            }
          }
        })
      }
    })
  }
}