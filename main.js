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
                $('.showName').text(`${body.data[i].profile.first_name}` + ` ${body.data[i].profile.last_name}` + ` ${body.data[i].profile.title}`);
                $('.showAddress').text(`${body.data[i].practices[0].visit_address.street}`);
                $('.showPhone').text(`${body.data[i].practices[0].phones[0].number}`);
                $('.showWebsite').text(`${body.data[i].practices[0].website}`);
                $('.showAccepting').text(`${body.data[i].practices[0].accepts_new_patients}`);
                $('.showSpecialty').text(`${body.data[i].specialties[0].name}`);
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
                $('.showName').text(`${body.data[i].profile.first_name}` + ` ${body.data[i].profile.last_name}`+ ` ${body.data[i].profile.title}`);
                $('.showAddress').text(`${body.data[i].practices[0].visit_address.street}`);
                $('.showPhone').text(`${body.data[i].practices[0].phones[0].number}`);
                $('.showWebsite').text(`${body.data[i].practices[0].website}`);
                $('.showAccepting').text(`${body.data[i].practices[0].accepts_new_patients}`);
                $('.showSpecialty').text(`${body.data[i].specialties[0].name}`);
            }
        } else {
            $('.showError').text('Sorry, your search has no results. Try again.');
        }
    });
    
    

  })
});