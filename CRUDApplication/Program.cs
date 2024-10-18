using CRUDApplication.Data;
using CRUDApplication.Data.Contracts;
using CRUDApplication.Data.Implementations;
using CRUDApplication.Services.Contracts;
using CRUDApplication.Services.Implementations;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
//cors
builder.Services.AddCors(policy =>
{
    policy.AddPolicy("AllowAngularApp", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

//di
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddScoped<IIEmployeeRepository, EmployeeRepository>();
// Add services to the container.

builder.Services.AddControllers();
//database connection
builder.Services.AddDbContextPool<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("mydb"));
});
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAngularApp");
app.UseAuthorization();

app.MapControllers();

app.Run();
