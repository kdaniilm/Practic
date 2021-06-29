using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practic1.Models
{
    public class Settings
    {
        public EnviromentSettings EnviromentSettings { get; set; }
        public string[] AllowedOrigins { get; set; }
    }
}
