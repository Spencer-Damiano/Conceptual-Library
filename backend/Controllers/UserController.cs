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

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginRequest)
        {
            var user = await _context.Users
                .SingleOrDefaultAsync(u => u.Username == loginRequest.Username && u.PasswordHash == loginRequest.PasswordHash);

            if (user == null)
            {
                return Unauthorized();
            }

            // If you are using JWT or some other mechanism to return a token, it would be done here.
            return Ok(new { Message = "Login successful", User = user });
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
