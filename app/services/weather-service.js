app.service("weatherService", function($http) {
    return {
      findByZip: function(zipcode) {
        return $http.get("http://api.openweathermap.org/data/2.5/weather?zip="+ zipcode +",us&appid=b87ef13e00bc9136960cd7c0541a91b3&units=imperial").then(function(response) {
            return response;
          });
      },
      fiveForcastByZip: function(zipcode) {
        return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?zip="+ zipcode +",us&appid=b87ef13e00bc9136960cd7c0541a91b3&units=imperial&cnt=5").then(function(response) {
            return response;
          });
      }
    };
  });