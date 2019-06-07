import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorFinder } from './doctor-finder';

$(document).ready(function(){
  $('#searchIssue').click(function(){
      let issue = $('#issue').val();
      $('#issue').val("");

      let doctorFinder = new DoctorFinder();
      let promise = doctorFinder.getDoctorByIssue(issue);
      promise.then(function(response) {
          let body = JSON.parse(response);
          
      })
  })
});