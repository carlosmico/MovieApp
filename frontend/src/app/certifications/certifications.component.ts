import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service'
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {
  certifications: object
  countries: string[] = []
  countrySelected: string
  certs: object[] = []

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.loadCertifications();
  }

  loadCertifications(): void {
    this.moviesService.getCertifications().subscribe((value) => {
      this.certifications = value.certifications;

      for (const country in value.certifications) {
        this.countries.push(country);
      }

      this.printCertifications(this.countries[0])
    }, console.log);
  }

  printCertifications(country:string):void{
    this.countrySelected = country;
    
    this.certs = this.certifications[country];
  }

}
