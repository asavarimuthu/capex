sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

            },
            onsubmit:function(){
                var data = JSON.stringify({
                    "definitionId": "us10.eacc5c99trial.test1.testprocess",
                    "context": {}
                  });
                  
                  var xhr = new XMLHttpRequest();
                  xhr.withCredentials = false;
                  
                  xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === this.DONE) {
                      console.log(this.responseText);
                    }
                  });
                  
                  //setting request method
                  //API endpoint for API sandbox 
                  xhr.open("POST", "https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/public/workflow/rest/v1/workflow-instances");
                  
                  
                  //adding request headers
                  xhr.setRequestHeader("Accept-Language", "Provide a preferred language. If a translation is available, relevant texts are returned in this language.");
                  xhr.setRequestHeader("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZWFjYzVjOTl0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktNGI0YjBhMTBhMSIsInR5cCI6IkpXVCIsImppZCI6ICJ3VHpGRi9XeDFjZzA2ZGJVemprd2NzY3IyL08xWUJEU2R6R21hS0d5TFlJPSJ9.eyJqdGkiOiI0YTE3Mjc3NDZmYWQ0NGNkODViZGRkZjcyZWQxZDFjMiIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJhODA0ZjhlYS1hYzI4LTQ4NzYtOTliOC1hMDY4OTBmNDRiMDQiLCJ6ZG4iOiJlYWNjNWM5OXRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiJlZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUifSwic3ViIjoic2ItZWZiYzQzYjctNzM5OC00YzBhLTk1N2UtZDJhOTg5NjM2MjM1IWIyNjkzMTB8eHN1YWEhYjQ5MzkwIiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJjaWQiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJhenAiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjEzNDMwYjA1IiwiaWF0IjoxNzEzMzg0OTA4LCJleHAiOjE3MTM0MjgxMDgsImlzcyI6Imh0dHBzOi8vZWFjYzVjOTl0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiYTgwNGY4ZWEtYWMyOC00ODc2LTk5YjgtYTA2ODkwZjQ0YjA0IiwiYXVkIjpbInNiLWVmYmM0M2I3LTczOTgtNGMwYS05NTdlLWQyYTk4OTYzNjIzNSFiMjY5MzEwfHhzdWFhIWI0OTM5MCIsInVhYSJdfQ.PIQMyI2SWOYfHaRCIsezvukuedjM2JmvNhHlt3sp0sVorW2Xl5ajenUMwuEaBfjOn25Sa545oXEJTgFVtwEPECyIgXXGyGvyfjBJRCVQimx2fyCLL75avSExkgd5ZzDfp5pOiLEZQMi_61AQe9yCilrMXdg8MsLLBtVEs1oNcJ7T4eZATeCDFsa3iGcbiNNQKOT0zCAFpiYc5oaQGrNsQo_Ha3RTtpKg9cSNl88Zbfyj0cBXZf4FVMbTEaFg-gs69EC-3IXhE4YCxD1RBFizR1WcpgOVp7Bx18dP5FRJOu9YTQLhAZsWoWSsI6tVA5el2bk5lSPe72F2cnBm3-KZiw");
                  xhr.setRequestHeader("DataServiceVersion", "2.0");
                  xhr.setRequestHeader("Accept", "application/json");
                  xhr.setRequestHeader("Content-Type", "application/json");
                  
                  
                  //sending request
                  xhr.send(data);
            },
            onsubmit1:function(){

                var data1={
                    "definitionId": "us10.eacc5c99trial.test1.testprocess",
                    "context": {}
                };
                const basicAuth = btoa(`sb-efbc43b7-7398-4c0a-957e-d2a989636235!b269310|xsuaa!b49390:ad8866d5-3f1c-401e-8739-39c534fa13f1$HFjBHOlb5HGetCZvjCBQMD8KQZpWXXKmFRBtS9B90wY=`);
                const headers = {
                    authorization: `Basic ${basicAuth}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                };
                $.ajax({
                    url: "https://eacc5c99trial.authentication.us10.hana.ondemand.com/oauth/token?grant_type=client_credentials",
                    type: 'POST',
                    headers: headers,
                    error : function(err) {
                      console.log('Error!', err)
                    },
                    success: function(data) {
                     //url : https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/public/workflow/rest
                     //var token=data.access_token;
                   var token='eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vZWFjYzVjOTl0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL3Rva2VuX2tleXMiLCJraWQiOiJkZWZhdWx0LWp3dC1rZXktNGI0YjBhMTBhMSIsInR5cCI6IkpXVCIsImppZCI6ICJ3VHpGRi9XeDFjZzA2ZGJVemprd2NzY3IyL08xWUJEU2R6R21hS0d5TFlJPSJ9.eyJqdGkiOiI0YTE3Mjc3NDZmYWQ0NGNkODViZGRkZjcyZWQxZDFjMiIsImV4dF9hdHRyIjp7ImVuaGFuY2VyIjoiWFNVQUEiLCJzdWJhY2NvdW50aWQiOiJhODA0ZjhlYS1hYzI4LTQ4NzYtOTliOC1hMDY4OTBmNDRiMDQiLCJ6ZG4iOiJlYWNjNWM5OXRyaWFsIiwic2VydmljZWluc3RhbmNlaWQiOiJlZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUifSwic3ViIjoic2ItZWZiYzQzYjctNzM5OC00YzBhLTk1N2UtZDJhOTg5NjM2MjM1IWIyNjkzMTB8eHN1YWEhYjQ5MzkwIiwiYXV0aG9yaXRpZXMiOlsidWFhLnJlc291cmNlIl0sInNjb3BlIjpbInVhYS5yZXNvdXJjZSJdLCJjbGllbnRfaWQiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJjaWQiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJhenAiOiJzYi1lZmJjNDNiNy03Mzk4LTRjMGEtOTU3ZS1kMmE5ODk2MzYyMzUhYjI2OTMxMHx4c3VhYSFiNDkzOTAiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwicmV2X3NpZyI6IjEzNDMwYjA1IiwiaWF0IjoxNzEzMzg0OTA4LCJleHAiOjE3MTM0MjgxMDgsImlzcyI6Imh0dHBzOi8vZWFjYzVjOTl0cmlhbC5hdXRoZW50aWNhdGlvbi51czEwLmhhbmEub25kZW1hbmQuY29tL29hdXRoL3Rva2VuIiwiemlkIjoiYTgwNGY4ZWEtYWMyOC00ODc2LTk5YjgtYTA2ODkwZjQ0YjA0IiwiYXVkIjpbInNiLWVmYmM0M2I3LTczOTgtNGMwYS05NTdlLWQyYTk4OTYzNjIzNSFiMjY5MzEwfHhzdWFhIWI0OTM5MCIsInVhYSJdfQ.PIQMyI2SWOYfHaRCIsezvukuedjM2JmvNhHlt3sp0sVorW2Xl5ajenUMwuEaBfjOn25Sa545oXEJTgFVtwEPECyIgXXGyGvyfjBJRCVQimx2fyCLL75avSExkgd5ZzDfp5pOiLEZQMi_61AQe9yCilrMXdg8MsLLBtVEs1oNcJ7T4eZATeCDFsa3iGcbiNNQKOT0zCAFpiYc5oaQGrNsQo_Ha3RTtpKg9cSNl88Zbfyj0cBXZf4FVMbTEaFg-gs69EC-3IXhE4YCxD1RBFizR1WcpgOVp7Bx18dP5FRJOu9YTQLhAZsWoWSsI6tVA5el2bk5lSPe72F2cnBm3-KZiw'
                        $.ajax({
                            type: "POST",
                            url: "https://spa-api-gateway-bpi-us-prod.cfapps.us10.hana.ondemand.com/public/workflow/rest/v1/workflow-instances",
                           // headers: { Authorization: $`Bearer ${data.access_token}`},
                           headers: {
                            'Authorization': `Bearer ${token}`,
                            "Accept": "application/json",
                            "Content-Type": "application/json"

                        },
                            data:data1,
                            success: function(response){
                                //if request if made successfully then the response represent the data
                        
                                $( "#result" ).empty().append( response );
                            },
                            error:function(error){
                                console.log(error);
                            }
                          });

                    }
                  });
            }
        });
    });
