using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApiService.Entity
{

    public class Book
    {
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public int BookID { get; set; }

        public string UserID { get; set; }

        [Required]
        [MaxLength(250)]
        public virtual string Name { get; set; }

        [MaxLength(250)]
        public string Author { get; set; }

        public Category Category { get; set; }

        [MaxLength(50)]
        public string ISBN { get; set; }

        public double? BookPrice { get; set; }

        public double? OfferPrice { get; set; }

        [MaxLength(4000)]
        public string Remark { get; set; }

        //public DateTimeOffset RegistrationDate { get; set; }

        [DefaultValue(false)]
        public bool IsDeleted { get; set; }

    }
}