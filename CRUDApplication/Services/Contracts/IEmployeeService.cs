using CRUDApplication.Dto;

namespace CRUDApplication.Services.Contracts
{
    public interface IEmployeeService
    {
         ServiceResponse<IEnumerable<EmployeeDto>> GetAllEmployees();
         ServiceResponse<EmployeeDto> GetEmployeeById(int id);
         ServiceResponse<string> AddEmployee(AddEmployeeDto EmployeeDto);
         ServiceResponse<string> ModifyEmployee(EmployeeDto EmployeeDto);
       ServiceResponse<string> DeleteEmployee(int id);
    }
}
