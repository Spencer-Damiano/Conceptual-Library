using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HelloWorldController : ControllerBase
    {
        [HttpGet("sayhello")]
        public IActionResult SayHello()
        {
            return Ok("Hello, World!");
        }
    }
}
