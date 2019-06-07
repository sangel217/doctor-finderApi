export class DoctorFinder{
    getDoctorByIssue(issue){
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.6062%2C%20-122.3321%2C%2050&user_location=47.6062%2C%20-122.3321&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

            request.open("GET", url, true);
            request.send();

            request.onload = function() {
                if(this.status === 200) {
                    resolve(request.response);
                } else {
                    reject(Error(request.statusText));
                }
            }
        });
    }
}