using CRUDApplication.Dto;
using CRUDApplication.Services.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CRUDApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet("GetAllEmployees")]
        public IActionResult GetAllEmployees()
        {
            var response = _employeeService.GetAllEmployees();
            if (!response.Success)
            {
                return NotFound(response);
            }
            return Ok(response);
        }

      
        [HttpGet("GetEmployeeById/{id}")]
        public IActionResult GetEmployeeById(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Please enter valid data.");
            }
            else
            {
                var response = _employeeService.GetEmployeeById(id);
                return response.Success ? Ok(response) : NotFound(response);
            }

        }

        [HttpPost("AddEmployee")]
        public IActionResult AddEmployee(AddEmployeeDto addEmployee)
        {
            var response = _employeeService.AddEmployee(addEmployee);
            if (!response.Success)
            {
                return BadRequest(response);
            }
            return Ok(response);
        }
        [HttpPut("ModifyEmployee")]
        public IActionResult UpdateBook(EmployeeDto employeeDto)
        {
            var response = _employeeService.ModifyEmployee(employeeDto);
            return response.Success ? Ok(response) : BadRequest(response);
        }

        [HttpDelete("DeleteEmployee/{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Please enter valid data.");
            }
            else
            {
                var response = _employeeService.DeleteEmployee(id);
                return response.Success ? Ok(response) : BadRequest(response);
            }

        }
    }
}
