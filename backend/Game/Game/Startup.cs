using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Game.players.ActivePlayer;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Game
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
          ConfigureCustomServices(services);

          ConfigureCors(services);

          services.AddControllers();
          services.AddMediatR(typeof(Startup));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
           app.UseCors();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

          //  app.UseHttpsRedirection();
        
            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureCors(IServiceCollection services)
        {
          services.AddCors(options =>
          {
            options.AddDefaultPolicy(builder => builder
              //.WithOrigins(Configuration.GetSection("CORS")["Origins"])
              .WithOrigins("http://localhost:4200")
             // .AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials());
          });
        }

        private void ConfigureCustomServices(IServiceCollection services)
        {
          services.AddSingleton<IActivePlayerService, ActivePlayerService>();
        }
    }
}
