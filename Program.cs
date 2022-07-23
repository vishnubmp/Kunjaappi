
var builder = WebApplication.CreateBuilder(args);

//ADD SERVIFCE TO CONTAINER
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddControllers();
builder.Services.AddCors();
builder.Services.AddIdentityServices(builder.Configuration);
builder.Services.AddSignalR();

//CONFIGURE HTTP

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
//if (env.IsDevelopment())
//{
//    app.UseDeveloperExceptionPage();
//    app.UseSwagger();
//    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "DatingApp v1"));
//}

app.UseHttpsRedirection();

app.UseCors(x => x.AllowAnyHeader()
.AllowAnyMethod()
.AllowCredentials()
.WithOrigins("https://localhost:4200"));

app.UseAuthentication();

app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();


app.MapControllers();
app.MapHub<PresenceHub>("hubs/presence");
app.MapHub<MessageHub>("hubs/message");
app.MapFallbackToController("Index", "Fallback");

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    var roleManager = services.GetRequiredService<RoleManager<AppRole>>();
    await context.Database.MigrateAsync();
    await Seed.SeedUsers(userManager, roleManager);

}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An Error occured during migration");
    throw;
}

await app.RunAsync();
