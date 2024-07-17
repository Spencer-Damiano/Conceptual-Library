using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
        [HttpGet("run")]
        public IActionResult RunTest()
        {
            return Ok("Test Passed");
        }
    }
}
