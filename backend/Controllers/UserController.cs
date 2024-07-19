using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("testdata")]
        public IActionResult GetTestData()
        {
            var testData = new
            {
                Users = _context.Users.ToList(),
                TimerTypes = _context.TimerTypes.ToList(),
                Sessions = _context.Sessions.ToList(),
                Items = _context.Items.ToList(),
                SessionItems = _context.SessionItems.ToList()
            };

            return Ok(testData);
        }
    }
}
