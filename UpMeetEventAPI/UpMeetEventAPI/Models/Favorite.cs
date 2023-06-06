using System;
using System.Collections.Generic;

namespace UpMeetEventAPI.Models;

public partial class Favorite
{
    public int FavoriteId { get; set; }

    public int? Userid { get; set; }

    public int? Eventid { get; set; }

    public bool? IsFavorite { get; set; }
}
