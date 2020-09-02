namespace DatingApp.API.Helpers
{
    public class MessageParams
    {
         public int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1; //default to 1 if value is not provided
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize; }
            set { pageSize = (value > MaxPageSize ? MaxPageSize : value); }
        }

        public int UserId { get; set; }
        public string MessageContainer { get; set; } = "Unread";
    }
}