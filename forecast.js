var temper;
      $(document).ready(function() {
      $.ajax({
      type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.forecast.io/forecast/**your key**/**lat**,**long**",
             error: function(xhr, status, error) {
          console.log(error);
          var para=document.createElement("h1");
            var node=document.createTextNode("Currently chilling in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);
           },
        success: function(data) {
          var tempicon = data.currently.icon;
          temper = Math.round(data.currently.temperature);
            console.log(data);
            console.log(tempicon);
            console.log(temper);
            document.getElementById('panes-status-fuel').innerHTML = "<span style='color: #FFF;'>Current temperature: </span>" + temper + "&#8457;";
          if(tempicon=='partly-cloudy-night'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_night.jpg')";
            var para=document.createElement("h1");
            var node=document.createTextNode("Looks like a partly cloudy night in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);
          }

          else if(tempicon=='clear-night'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_night3.jpg')";
            var creative = document.createElement('div');
            creative.id = 'creative';
            document.getElementById("map-wrapper").appendChild(creative);
            var commons = document.getElementById("creative");
            var content = document.createTextNode("Photo by Ping Foo");
            commons.appendChild(content);


            var para=document.createElement("h1");
            var node=document.createTextNode("It looks like it's a clear night in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

            else if(tempicon=='snow'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_snow.jpg')";
            var creative = document.createElement('div');
            creative.id = 'creative';
            document.getElementById("map-wrapper").appendChild(creative);
            var commons = document.getElementById("creative");
            var content = document.createTextNode("Photo by Grant MacDonald");
            commons.appendChild(content);


            var para=document.createElement("h1");
            var node=document.createTextNode("It looks like it's a snowy one in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

          else if(tempicon=='wind'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_wind4.jpg')";
            var creative = document.createElement('div');
            creative.id = 'creative';
            document.getElementById("map-wrapper").appendChild(creative);
            var commons = document.getElementById("creative");
            var content = document.createTextNode("Photo by Lars-O-Matic");
            commons.appendChild(content);


            var para=document.createElement("h1");
            var node=document.createTextNode("It's a windy one today in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

          else if(tempicon=='cloudy'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_cloud1.jpg')";
            var creative = document.createElement('div');
            creative.id = 'creative';
            document.getElementById("map-wrapper").appendChild(creative);
            var commons = document.getElementById("creative");
            var content = document.createTextNode("Photo by Vincent Solihin");
            commons.appendChild(content);


            var para=document.createElement("h1");
            var node=document.createTextNode("It's looking a little cloudy in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

            else if(tempicon=='clear-day'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_clear2.jpg')";
            var creative = document.createElement('div');
            creative.id = 'creative';
            document.getElementById("map-wrapper").appendChild(creative);
            var commons = document.getElementById("creative");
            var content = document.createTextNode("Photo by Andreina Schoeberlein");
            commons.appendChild(content);


            var para=document.createElement("h1");
            var node=document.createTextNode("It's a nice clear day in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

           else if(tempicon=='rain'){
            var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_rain.jpg')";
            var para=document.createElement("h1");
            var node=document.createTextNode("It looks like it's a wet Toronto day.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

          else {
             var mapwrapper = document.getElementById("map-wrapper");
            mapwrapper.style.backgroundImage="url('tor_morn.jpg')";
            var para=document.createElement("h1");
            var node=document.createTextNode("Looks like a decent day in Toronto.");
            para.appendChild(node);
            var element=document.getElementById("panes-status-weather");
            element.appendChild(para);

          }

          }    
                   
        })
    });

