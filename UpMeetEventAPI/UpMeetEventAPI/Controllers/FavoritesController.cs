using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UpMeetEventAPI.Models;

namespace UpMeetEventAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        private readonly UpMeetEventDbContext _context;

        public FavoritesController(UpMeetEventDbContext context)
        {
            _context = context;
        }

        // GET: api/Favorites
        [HttpGet("GetFavorites")]
        public async Task<ActionResult<IEnumerable<Favorite>>> GetFavorites()
        {
          if (_context.Favorites == null)
          {
              return NotFound();
          }
            return await _context.Favorites.ToListAsync();
        }

        // GET: api/Favorites/5
        [HttpGet("GetFavorites/{id}")]
        public async Task<ActionResult<Favorite>> GetFavorite(int id)
        {
          if (_context.Favorites == null)
          {
              return NotFound();
          }
            var favorite = await _context.Favorites.FindAsync(id);

            if (favorite == null)
            {
                return NotFound();
            }

            return favorite;
        }

        [HttpGet("{UserId:int}")]
        public async Task<ActionResult<List<Favorite>>> GetUserFavorites(int UserId)
        {
            if (_context.Favorites == null)
            {
                return NotFound();
            }
            var favorite = await _context.Favorites.Where(f => f.Userid == UserId).ToListAsync();
            if (favorite == null)
            {
                return NotFound();
            }
            return favorite;
        }


        // PUT: api/Favorites/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutFavorite(int id, Favorite favorite)
        //{
        //    if (id != favorite.Userid)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(favorite).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!FavoriteExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/Favorites
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddFavorite")]
        public async Task<ActionResult<Favorite>> PostFavorite(Favorite favorite)
        {
          if (_context.Favorites == null)
          {
              return Problem("Entity set 'UpMeetEventDbContext.Favorites'  is null.");
          }
            _context.Favorites.Add(favorite);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavorite", new { id = favorite.Userid }, favorite);
        }
    
        // DELETE: api/Favorites/5
        [HttpDelete("DeleteFavorite/{id}")]
        public async Task<IActionResult> DeleteFavorite(int id)
        {
            if (_context.Favorites == null)
            {
                return NotFound();
            }
            var favorite = await _context.Favorites.FindAsync(id);
            if (favorite == null)
            {
                return NotFound();
            }

            _context.Favorites.Remove(favorite);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoriteExists(int id)
        {
            return (_context.Favorites?.Any(e => e.Userid == id)).GetValueOrDefault();
        }
    }
}
