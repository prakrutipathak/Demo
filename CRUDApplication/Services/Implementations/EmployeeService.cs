using CRUDApplication.Data.Contracts;
using CRUDApplication.Dto;
using CRUDApplication.Models;
using CRUDApplication.Services.Contracts;

namespace CRUDApplication.Services.Implementations
{
    public class EmployeeService: IEmployeeService
    {
        private readonly IIEmployeeRepository _employeeRepository;
        public EmployeeService(IIEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }
        public ServiceResponse<IEnumerable<EmployeeDto>> GetAllEmployees()
        {
            var response = new ServiceResponse<IEnumerable<EmployeeDto>>();
            var employees = _employeeRepository.GetAllEmployees();
            if (employees != null && employees.Any())
            {
                List<EmployeeDto> employeeDtos = new List<EmployeeDto>();
                foreach (var employee in employees)
                {
                    employeeDtos.Add(new EmployeeDto()
                    {
                        EmployeeId = employee.EmployeeId,
                        FirstName = employee.FirstName,
                        LastName = employee.LastName,
                        Email = employee.Email,
                        PhoneNumber = employee.PhoneNumber,

                    });
                }
                response.Success = true;
                response.Data = employeeDtos;
            }
            else
            {
                response.Success = false;
                response.Message = "No record found!";
            }
            return response;
        }
        public ServiceResponse<EmployeeDto> GetEmployeeById(int id)
        {
            var response = new ServiceResponse<EmployeeDto>();
            var existingEmployee = _employeeRepository.GetEmployeeById(id);
            if (existingEmployee != null)
            {
                var book = new EmployeeDto()
                {
                    EmployeeId = existingEmployee.EmployeeId,
                    FirstName = existingEmployee.FirstName,
                    LastName = existingEmployee.LastName,
                    Email = existingEmployee.Email,
                    PhoneNumber = existingEmployee.PhoneNumber,
                  
                };
                response.Success = true;
                response.Data = book;
            }

            else
            {
                response.Success = false;
                response.Message = "Something went wrong,try after sometime";
            }
            return response;
        }
        public ServiceResponse<string> AddEmployee(AddEmployeeDto EmployeeDto)
        {
            var response = new ServiceResponse<string>();
            if (_employeeRepository.EmployeeExists(EmployeeDto.Email))
            {
                response.Success = false;
                response.Message = "Employee Already Exists";
                return response;
            }
            var employee = new Employee()

            {
                FirstName = EmployeeDto.FirstName,
                LastName = EmployeeDto.LastName,
                Email = EmployeeDto.Email,
                PhoneNumber = EmployeeDto.PhoneNumber,
            };

            var result = _employeeRepository.InsertEmployee(employee);
            if (result)
            {
                response.Success = true;
                response.Message = "Employee Saved Successfully";
            }
            else
            {
                response.Success = false;
                response.Message = "Something went wrong. Please try later";
            }
            return response;
        }
        public ServiceResponse<string> ModifyEmployee(EmployeeDto EmployeeDto)
        {
            var response = new ServiceResponse<string>();
            var message = string.Empty;
            if (_employeeRepository.EmployeeExists(EmployeeDto.EmployeeId, EmployeeDto.Email))
            {
                response.Success = false;
                response.Message = "Employee already exists.";
                return response;

            }

            var existingEmployee = _employeeRepository.GetEmployeeById(EmployeeDto.EmployeeId);
            var result = false;
            if (existingEmployee != null)
            {
                existingEmployee.FirstName = EmployeeDto.FirstName;
                existingEmployee.LastName = EmployeeDto.LastName;
                existingEmployee.Email = EmployeeDto.Email;
                existingEmployee.PhoneNumber = EmployeeDto.PhoneNumber ;

                result = _employeeRepository.UpdateEmployee(existingEmployee);
            }
            if (result)
            {
                response.Success = true;
                response.Message = "Employee updated successfully.";
            }
            else
            {
                response.Success = false;
                response.Message = "Something went wrong,try after sometime";
            }
            return response;

        }
        public ServiceResponse<string> DeleteEmployee(int id)
        {
            var response = new ServiceResponse<string>();
            var result = _employeeRepository.DeleteEmployee(id);

            if (result)
            {
                response.Success = true;
                response.Message = "Employee deleted successfully";
            }
            else
            {
                response.Success = false;
                response.Message = "Something went wrong";
            }

            return response;
        }

    }
}
