namespace DatingApp.API.Models
{
    public class Like
    {
        public int LikerId { get; set; } //User that Likes another user
        public int LikeeId { get; set; } //User being like by another user
        public User Liker { get; set; }
        public User Likee { get; set; }
    }
}