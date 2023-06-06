using System;
using System.Collections.Generic;

namespace UpMeetEventAPI.Models;

public partial class Event
{
    public int EventId { get; set; }

    public string? EventName { get; set; }

    public string? EventDescription { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? CreatedDate { get; set; }

    public DateTime? EventStartDate { get; set; }

    public DateTime? EventEndDate { get; set; }

    public string? EventType { get; set; }

    public string? EventLocation { get; set; }

    public decimal? Price { get; set; }
}
