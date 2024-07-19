using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            var user = await _context.Users
                .SingleOrDefaultAsync(u => u.Username == loginRequest.Username);

            if (user == null || !VerifyPasswordHash(loginRequest.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid username or password.");
            }

            // If you are using JWT or some other mechanism to return a token, it would be done here.
            return Ok(new { Message = "Login successful", User = user });
        }

        private bool VerifyPasswordHash(string password, string storedHash)
        {
            // Implement your password hashing verification logic here
            // For simplicity, this example just compares plain text passwords
            return password == storedHash;
        }
    }

    public class LoginRequest
    {
        public required string Username { get; set; }
        public required string Password { get; set; }
    }
}
