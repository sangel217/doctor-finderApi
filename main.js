import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorFinder } from './doctor-finder';

 

$(document).ready(function(){
  $('.buttonIssue').click(function(){
    event.preventDefault();
    let issue = $('.issue').val();
    $('.issue').val(" ");
    let name = $('.name').val();
    $('.name').val(" ");
    

    $('.table').show();

    let doctorFinder = new DoctorFinder();
    let promise = doctorFinder.getDoctorByIssue(issue);

    promise.then(function(response) {
        let body = JSON.parse(response);
        if(body.data.length>0){
            for(let i = 0; i < body.data.length; i ++){
              $('.table').append(` <tr>
              <td div class='showName'>${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].profile.title}</td>
              <td div class='showAddress'>${body.data[i].practices[0].visit_address.street}</td>
              <td div class='showPhone'>${body.data[i].practices[0].phones[0].number}</td>
              <td div class='showWebsite'>${body.data[i].practices[0].website}</td>
              <td div class='showAccepting'>${body.data[i].practices[0].accepts_new_patients}</td>
              <td div class='showSpeacialty'>${body.data[i].specialties[0].name}</td>
            </tr>`)
            }
        } else {
            $('.showError').text('Sorry, your search has no results. Try again.');
        }
    });

  });

  $(".buttonName").click(function(){
      event.preventDefault();
      let name = $('.name').val();
      $('.name').val(" ");

      $('.table').show();

    let doctorFinder = new DoctorFinder();
    let promise = doctorFinder.getDoctorByName(name);

    promise.then(function(response) {
        let body = JSON.parse(response);
        if(body.data.length>0){
            for(let i = 0; i < body.data.length; i ++){
                $('.table').append(` <tr>
              <td div class='showName'>${body.data[i].profile.first_name} ${body.data[i].profile.last_name} ${body.data[i].profile.title}</td>
              <td div class='showAddress'>${body.data[i].practices[0].visit_address.street}</td>
              <td div class='showPhone'>${body.data[i].practices[0].phones[0].number}</td>
              <td div class='showWebsite'>${body.data[i].practices[0].website}</td>
              <td div class='showAccepting'>${body.data[i].practices[0].accepts_new_patients}</td>
              <td div class='showSpeacialty'>${body.data[i].specialties[0].name}</td>
            </tr>`)
            }
        } else {
            $('.showError').text('Sorry, your search has no results. Try again.');
        }
    });
    
    

  })
});