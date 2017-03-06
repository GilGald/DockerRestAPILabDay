using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EasyHttp.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using HttpClient = EasyHttp.Http.HttpClient;

namespace DockerWhaleRestAPI.Controllers
{
    [RoutePrefix("api/container")]
    public class ContainerController : ApiController
    {
        const string hostaddress = "hostAddress";

        [HttpGet]        
        public HttpResponseMessage List()
        {
            string hostAddress = string.Empty;
            //string hostAddress = "http://13.93.209.195:4243/";
            
            if (Request.Headers.Contains(hostaddress))
            {
                hostAddress = Request.Headers.GetValues(hostaddress).First();
            }
            
            var url = string.Join("/",hostAddress ,"images/json");
            var http = new HttpClient();

            http.Request.Accept = HttpContentTypes.ApplicationJson;
            HttpResponse response = http.Get(url);
            var deserializeObject =JsonConvert.DeserializeObject(response.RawText);            
            HttpResponseMessage httpResponseMessage = Request.CreateResponse(response.StatusCode, deserializeObject,new HttpConfiguration().Formatters.JsonFormatter);
            return httpResponseMessage;
        }
    }
}
